<template>
    <div>
        <v-stepper v-model="e1" class="box-wrap">
            <v-stepper-header>
                <template v-for="n in components.length">
                    <v-stepper-step
                        :key="`${n}-step`"
                        :complete="e1 > n"
                        :step="n"
                        editable
                    >
                    <div>
                        <div>Step {{ n }}</div>
                        <div>{{ components[n - 1].name }}</div>
                    </div>
                    </v-stepper-step>
        
                    <v-divider
                        v-if="n !== components.length"
                        :key="n"
                    ></v-divider>
                </template>
            </v-stepper-header>
  
            <v-stepper-items class="step-box">
                <v-stepper-content
                    v-for="n in components.length"
                    :key="`${n}-content`"
                    :step="n"
                >
                    <v-card class="mb-12 stop-box-in">
                        <component @saveUsers="saveUsers" :selectedUser="selectedUser" :is="components[n - 1].component" />
                    </v-card>
                    
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
        <div class="btn-box">
            <v-btn class="btn-bot" color="primary" @click="nextStep(n)">Next</v-btn>
            <v-btn class="btn-bot" text>Cancel</v-btn>
        </div>
    </div>
</template>

<script>
import Assessment from './Assessment';
import GoalSetting from './GoalSetting';
import GetTheGuide from './GetTheGuide';

export default {
    components: {
    },
    props: {
        selectedUser: null,
    },
    data () {
        return {
            e1: 1,
            components: [
                { component: Assessment, name: '현수준평가' },
                { component: GoalSetting, name: '목표수준설정' },
                { component: GetTheGuide, name: '전환가이드' }
            ],
        }
    },

    watch: {
    },

    methods: {
        saveUsers(){
            this.$emit('saveUsers')
        },
        nextStep (n) {
            if (n === this.components.length) {
                this.e1 = 1
            } else {
                this.e1 = n + 1
            }
        },
    },
}
</script>

<style>
.box-wrap {
    height:calc(100vh - 220px);
    /* border:1px solid blue; */
}
.step-box {
    /* overflow: auto; */
    height:calc(100vh - 220px);
    /* background-color: lightgoldenrodyellow; */
}
.stop-box-in { 
    /* step-box 안의 흰 박스 */
    height:calc(100vh - 300px);
}
.qna-box {
    /* width: 130%; */
    height:calc(100vh - 335px);
	overflow: auto;
    padding: 20px;
	/* border: 1px solid pink; */
}
.btn-box {
    text-align: right;
    margin-top: 10px;
}

@media only screen and (max-width:1100px) {
    .qna-box {
        /* width: 100%; */
    }
}
@media only screen and (max-width:700px) {
    .box-wrap, .step-box, .stop-box-in {
        height:100%;
    }
    .qna-box {
        height: 50vh;
        padding: 0;
    }
    .btn-bot {
        margin-bottom:10px;
    }
}
</style>
