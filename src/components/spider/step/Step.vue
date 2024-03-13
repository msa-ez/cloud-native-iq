<template>
    <div>
        <v-stepper v-model="currentStep">
            <v-stepper-header>
                <template v-for="n in components.length">
                    <v-stepper-step
                        :key="`${n}-step`"
                        :complete="currentStep > n"
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
                    style="padding:0px;"
                >
                    <div class="step-box-in">
                        <component @saveProfiles="saveProfiles"
                            :selectedProfile="selectedProfile"
                            :chartData="chartData"
                            :is="components[n - 1].component"
                        />
                    </div>
                    
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
        <!-- <div class="btn-box">
            <v-btn class="btn-bot"
                color="primary"
                @click="nextStep()"
                :disabled="currentStep === components.length">Next</v-btn>
            <v-btn class="btn-bot" text>Cancel</v-btn>
        </div> -->
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
        selectedProfile: null,
        chartData: null
    },
    data () {
        return {
            stepNumber: 0,
            currentStep: 1,
            components: [
                { component: GoalSetting, name: '목표수준설정', name_en: 'GoalSetting', path: 'goal-setting' },
                { component: Assessment, name: '현수준평가', name_en: 'Assessment', path: 'assessment' },
                { component: GetTheGuide, name: '전환가이드', name_en: 'GetTheGuide', path: 'get-the-guide' }
            ],
        }
    },
    created() {
        const path = this.$route.params.path;
        const matchingComponentIndex = this.components.findIndex(c => c.path === path);
        if (matchingComponentIndex !== -1) {
            this.currentStep = matchingComponentIndex + 1;
        }
    },
    watch: {
        currentStep(newVal, oldVal) {
            if (newVal !== oldVal) {
                const path = this.components[newVal - 1].path;
                if (this.$route.params.path !== path) {
                    this.$router.push(`/${path}`);
                }
            }
        }
    },
    methods: {
        saveProfiles(){
            this.$emit('saveProfiles')
        },
        // nextStep () {
        //     if (this.currentStep === this.components.length) {
        //     } else {
        //         this.currentStep++
        //     }
        // },
    },
}
</script>

<style>
</style>
