<template>
    <div>
        <v-stepper v-model="currentStep" style="box-shadow: none;">
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
                    <div>
                        <component @saveProfiles="saveProfiles"
                            :selectedProfile="selectedProfile"
                            :chartData="chartData"
                            :selectedAllGuideStatus="selectedAllGuideStatus"
                            :is="components[n - 1].component"
                        />
                    </div>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
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
            selectedAllGuideStatus: false,
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
            this.updateSelectedAllGuideStatus(this.currentStep);
        }
    },
    watch: {
        currentStep(newVal, oldVal) {
            if (newVal !== oldVal) {
                const path = this.components[newVal - 1].path;
                if (this.$route.params.path !== path) {
                    this.$router.push(`/${path}`);
                }
                this.updateSelectedAllGuideStatus(newVal);
            }
        }
    },
    methods: {
        saveProfiles(){
            this.$emit('saveProfiles')
        },
        updateSelectedAllGuideStatus(step) {
            this.selectedAllGuideStatus = this.components[step - 1].name_en === 'GetTheGuide';
        }
    },
}
</script>

<style>
</style>