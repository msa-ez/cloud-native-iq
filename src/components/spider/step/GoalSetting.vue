<template>
    <div>
        <v-row style="padding:20px;">
            <v-col>
                <div class="qna-box goal-box">
                    <div class="tab-info">본 단계에서는 클라우드 기반 공공 서비스 도입이 필요한 수요기관에서 As-Is 분석과 To-Be 모델을 기반으로 클라우드 서비스 구축사업의 기능/비기능적 요구사항을 정의 합니다. 아래 목표수준 설정에 필요한 클라우드 역량항목에 응답해 주시기 바랍니다.</div>
                    <div v-for="(topic, topicIndex) in chartData.topics" :key="topicIndex" style="margin-bottom: 40px;">
                        <h3 style="margin-bottom: 10px;">{{ topic.name }}</h3>
                        <div v-for="(question, questionIndex) in topic.questions" :key="questionIndex" style="margin-bottom: 10px;padding:10px 10px 0 0;border-bottom: 1px solid #ccc;">
                            <div style="font-weight: 700;">{{ question.title }}</div>
                            <div>{{ question.text }}</div>
                            <v-slider
                                :disabled="chartData.users && chartData.users.length > 0"
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
                    :selectedProfile="selectedProfile"
                    :chartData="chartData"
                    :chartWidth="chartWidth"
                    :chartHeight="chartHeight"
                    :chartCenterX="chartCenterX"
                    :chartCenterY="chartCenterY"
                    :chartRadius="chartRadius"
                    :labelOffset="labelOffset"
                    :maxDataValue="maxDataValue"
                    :pointRadius="pointRadius"
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
        selectedProfile: null,
        chartData: null
    },
    data () {
        return {
        }
    },
    created() {
    },
    mounted() {
        this.$eventBus.$on('changeChartData', this.onSliderChange);
    },
    beforeDestroy() {
        this.$eventBus.$off('changeChartData', this.onSliderChange);
    },
    watch: {
    },

    methods: {
        getTickLabels(question) {
            // question에 tickLabels가 정의되어 있으면 그것을 사용하고, 그렇지 않으면 기본 tickLabels를 반환합니다.
            return question.tickLabels || this.tickLabels;
        },
        onSliderChange() {
            this.changeGoalLevel();
        },
        changeGoalLevel() {
            var me = this;
            var goalLevelResult = [];
            me.chartData.perspectives.forEach(function (){
                goalLevelResult.push(0);
            });
            this.chartData.topics.forEach(function (topic, index) {
                const count = topic.questions.filter(q => q.value >= 3).length;
                if (count < topic.goalCheckCount) return;
                topic.questions.forEach(function (question, index) {
                    // goalCheckLevel이 없는 경우를 처리하기 위해 find 대신 filter 사용
                    const goalLevelObjects = question.goalLevelsList.filter(g => g.goalCheckLevel == question.value);
                    var gLevels;
                    if(goalLevelObjects.length > 0) {
                        // goalCheckLevel이 있는 경우
                        gLevels = goalLevelObjects[0].goalLevels;
                    } else {
                        // goalCheckLevel이 없는 경우, 모든 gLevels 값을 1로 설정
                        gLevels = [1, 1, 1, 1, 1, 1, 1];
                    }
                    gLevels.forEach(function(gLevel, goalIndex) {
                        if(goalLevelResult[goalIndex] < gLevel) {
                            goalLevelResult[goalIndex] = gLevel;
                        }
                    });
                });
            });
            goalLevelResult.forEach(function (goalLevel, index){
                me.chartData.perspectives[index].goalLevel = goalLevel;
            });
            this.$emit('saveProfiles');
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