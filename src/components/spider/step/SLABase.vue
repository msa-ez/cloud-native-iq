<template>
	<div>
	</div>
</template>
  
<script>

export default {
    name: "SLABase.vue",
	mixins: [
	],
	props: {
	},
    comments: {
    },
    data () {
        return {
            slaResult: {
                percentage: '',
                cloudStatus: '',
                count: 0,
                time: '',
                conversionText: '',
                conversionMethod: '',
            },
        }
    },
	created() {
	},
	watch: {
    },
    methods: {
		getSLAPercentage(chartData) {
            // 클라우드 상태 평가 로직
            let count = 0;
            chartData.topics.forEach(topic => {
                count += topic.questions.filter(question => question.value >= 3).length;
            });

            // count 값에 따라 slaResult 설정
            if (count >= 5) {
                this.slaResult.percentage = '99.999%';
                this.slaResult.time = '26초';
                this.slaResult.conversionGoal = 'native';
                this.slaResult.conversionMethod = 'reArchitect';
                this.slaResult.cloudStatus = 'Cloud Native';
                this.slaResult.conversionText = '기존 시스템을 대폭 수정하여 클라우드 네이티브 기능의 이점을 활용할 수 있도록 하는 것입니다.';
            } else if (count >= 3) {
                this.slaResult.percentage = '99.99%';
                this.slaResult.time = '4분 19초';
                this.slaResult.conversionGoal = 'optimized';
                this.slaResult.conversionMethod = 'rePlatform';
                this.slaResult.cloudStatus = 'Cloud Optimized';
                this.slaResult.conversionText = 'OS나 웹/WAS/DB 등과 같은 미들웨어 환경을 일부 변경해서 이전하는 방식입니다.';
            } else if (count >= 2) {
                this.slaResult.percentage = '99.9%';
                this.slaResult.time = '43분 12초';
                this.slaResult.conversionGoal = 'ready';
                this.slaResult.conversionMethod = 'reHost';
                this.slaResult.cloudStatus = 'Cloud Ready';
                this.slaResult.conversionText = '기존의 시스템에서 별다른 수정 없이 환경만 클라우드로 이전하는 것을 말합니다.';
            } else {
                this.slaResult.percentage = '99.5%';
                this.slaResult.time = '3시간 36분';
                this.slaResult.conversionGoal = 'keep';
                this.slaResult.conversionMethod = 'retain';
                this.slaResult.cloudStatus = '기존 시스템 유지';
                this.slaResult.conversionText = '클라우드로 옮기거나 하지 않고 현재 상태로 유지하는 것을 말합니다.';
            }

            this.slaResult.count = count;
        },
	}
}
</script>
  
<style>
</style>
  
  
