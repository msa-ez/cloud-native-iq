<template>
    <div>
        <v-row>
            <v-col>
                <div class="qna-box goal-box">
                    <div class="tab-info">본 단계에서는 클라우드 기반 공공 서비스 도입이 필요한 수요기관에서 As-Is 분석과 To-Be 모델을 기반으로 클라우드 서비스 구축사업의 기능/비기능적 요구사항을 정의 합니다. 아래 목표수준 설정에 필요한 클라우드 역량항목에 응답해 주시기 바랍니다.</div>
                    <div v-for="(topic, topicIndex) in selectedUser.topics" :key="topicIndex" style="margin-bottom: 40px;">
                        <h3 style="margin-bottom: 10px;">{{ topic.name }}</h3>
                        <div v-for="(question, questionIndex) in topic.questions" :key="questionIndex" style="margin-bottom: 10px;padding:10px 10px 0 0;border-bottom: 1px solid #ccc;">
                            <div style="font-weight: 700;">{{ question.title }}</div>
                            <div>{{ question.text }}</div>
                            <v-slider
                                v-model="question.value"
                                :tick-labels="getTickLabels(question)"
                                :max="getTickLabels(question).length - 1"
                                step="1"
                                ticks="always"
                                :tick-size="4"
                                class="tickLabels-txt"
                                @input="onSliderChange(question)"
                            ></v-slider>
                        </div>
                    </div>
                </div>
            </v-col>
            <v-col>
                <SpiderChart
                    :perspectives="selectedUser.perspectives"
                    :chartWidth="chartWidth"
                    :chartHeight="chartHeight"
                    :chartCenterX="chartCenterX"
                    :chartCenterY="chartCenterY"
                    :chartRadius="chartRadius"
                    :labelOffset="labelOffset"
                    :maxDataValue="maxDataValue"
                    :pointRadius="pointRadius"
                    :slaPercentage="slaPercentage"
                    :cloudStatus="cloudStatus"
                />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import SpiderChart from './SpiderChart.vue'
import AssessmentData from './AssessmentData2.js';
import GoalSettingData from './GoalSettingData2.js'

export default {
    name: "GoalSetting",
    mixins: [
        AssessmentData,
        GoalSettingData
    ],
    components: {
        SpiderChart
    },
    props: {
        selectedUser: null,
    },
    data () {
        return {
            slaPercentage: '',
            cloudStatus: '',
        }
    },
    created() {
        this.getSLAPercentage()
    },
    watch: {
    },

    methods: {
        getTickLabels(question) {
            // question에 tickLabels가 정의되어 있으면 그것을 사용하고, 그렇지 않으면 기본 tickLabels를 반환합니다.
            return question.tickLabels || this.tickLabels;
        },
        onSliderChange() {
            this.changeGoalLevel()
            this.getSLAPercentage()
        },
        getSLAPercentage() {
            let percentage = '';
            for (let topic of this.selectedUser.topics) {
                // '[정보시스템 등급]' 질문 찾기
                const slaQuestion = topic.questions.find(q => q.title === '[정보시스템 등급]');
                if (slaQuestion) {
                    switch (slaQuestion.value) {
                        case 0:
                            percentage = '99.5%';
                            break;
                        case 1:
                            percentage = '99.9%';
                            break;
                        case 2:
                            percentage = '99.95%';
                            break;
                        default:
                            percentage = '99.99%';
                            break;
                    }
                    break; // 질문을 찾으면 루프를 종료합니다.
                }
            }

            this.slaPercentage = percentage;

            // 클라우드 상태 평가 로직
            let count = 0;
            this.selectedUser.topics.forEach(topic => {
                count += topic.questions.filter(question => question.value >= 3).length;
            });

            if (count >= 5) {
                this.cloudStatus = 'Cloud Native';
            } else if (count >= 3) {
                this.cloudStatus = 'Cloud Optimized';
            } else if (count === 2) {
                this.cloudStatus = 'Cloud Ready';
            } else {
                this.cloudStatus = '기존 시스템 유지';
            }

            return percentage;
        },
        changeGoalLevel() {
            var me = this
            var goalLevelResult = []
            me.selectedUser.perspectives.forEach(function (){
                goalLevelResult.push(0)
            });
            this.selectedUser.topics.forEach(function (topic, index) {
                const count = topic.questions.filter(q => q.value >= 3).length;
                if (count < topic.goalCheckCount) return
                topic.goalLevels.forEach(function(goalLevel, goalIndex) {
                    if(goalLevelResult[goalIndex] < goalLevel) {
                        goalLevelResult[goalIndex] = goalLevel
                    } 
                });
            });
            goalLevelResult.forEach(function (goalLevel ,index){
                me.selectedUser.perspectives[index].goalLevel = goalLevel
            });
            this.$emit('saveUsers')
        },
    },
}
</script>

<style>
.tickLabels-txt {
    font-size: 14px;
}
@media only screen and (max-width:1100px) {
  .tickLabels-txt {
    font-size: 12px;
  }    
}
</style>