<template>
	<div align="center" style="padding:20px 100px 20px 100px;">
        <div>
            <h1>고객 사례</h1>
            <h2>엔터프라이즈부터 공공 분야까지</h2>
        </div>
        <v-row>
            <v-col v-for="client in clients" style="margin:20px;">
                <v-card outlined style="padding:20px; text-align: left;">
                    <v-row >
                        <div>
                            <div style="font-size:24px; font-weight: 700;">{{ client.title }}</div>
                            <div style="font-size:14px; opacity: 0.8;">{{ client.subTitle }}</div>
                        </div>
                        <v-spacer></v-spacer>
                        <v-chip outlined>{{ client.chip }}</v-chip>
                    </v-row>
                    <div style="margin-top:20px;">{{ client.case }}</div>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
	components: {
	},
	computed: {
	},
	data() {
		return {
            clients: [
                {
                    title: 'KB헬스케어',
                    subTitle: '애플리케이션',
                    chip: '헬스',
                    case: 'KB헬스케어는 그룹사 정책으로 데이터를 외국에 보내는 것에 제한이 있습니다. cloudIq는 국내 리전도 제공할 뿐 아니라 프라이빗 클라우드 내에 설치도 가능하여 선택하게 되었습니다.'
                },
                {
                    title: '정상제이엘에스',
                    subTitle: '애플리케이션',
                    chip: '교육',
                    case: '인프라 이슈부터 애플리케이션 문제까지 와탭 하나로 확인할 수 있으니깐 어디서 문제가 발생한건지 명확하게 판단할 수 있게 해줍니다.'
                },
                {
                    title: '한국조폐공사',
                    subTitle: '애플리케이션',
                    chip: '공기업',
                    case: '국민이 이용하는 대민 서비스에는 모니터링이 필수 입니다. 서비스를 개선하고 품질을 향상시키기 위해 모니터링은 필수입니다.'
                },
            ]
		}
	},
	mounted() {
	},
	methods: {
	},
};
</script>

<style>

</style>

