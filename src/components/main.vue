<template>
	<div>
		<div class="flex-column">
			<div style="text-align: center;">
				<!-- <img class="main-logo" src="../image/DPG_logo.png" /> -->
				<img class="main-logo2" src="https://github.com/msa-ez/cloud-iq/assets/149130268/1d4667a1-b6b7-47ef-a07c-94dc0da510b2" />
				<div class="main-title">클라우드 네이티브 전환 가이드라인</div>
				<div>
					<img style="" src="https://github.com/msa-ez/cloud-iq/assets/149130268/66649787-f394-49f9-8a72-8002997161c6" />
				</div>
			</div>
			<v-row>
				<v-col v-for="(step, index) in steps" :key="index">
					<v-card @click="goToStep(step.path)" class="card-box">
						<h2>Step. {{ index + 1 }}</h2>
						<h1>{{ step.name }}</h1>
						<div>{{ step.name_en }}</div>
					</v-card>
				</v-col>
			</v-row>
			<div class="flex-grow-1"></div> 
			<v-row class="align-left justify-left" style="height:36px;">
				<v-btn text>전환가이드 전체 보기</v-btn>
				<v-divider vertical class="mx-2"></v-divider> 
				<v-btn text>About</v-btn>
			</v-row>
		</div>
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
			steps: 
			[
				{
					name: "현 수준 평가",
					name_en: "Assessment",
					path: "/user"
				},
				{
					name: "목표수준 설정",
					name_en: "Goal Setting",
					path: "/user"
				},
				{
					name: "전환 가이드",
					name_en: "Get the Guide",
					path: "/user"
				}
			]
		}
	},
	mounted() {
	},
	methods: {
		goToStep(path) {
			this.$router.push(path);
		},
	},
};
</script>

<style>
/* .main-logo {
	height: calc(50vh - 36px);
} */
.main-logo2 {
	width: 300px;
	margin: 20px auto;
}
.main-title {
	font-size: 48px;
	font-weight: bold;
	color: #003669;
}
.card-box {
	margin:40px 20px 20px 20px; 
	padding: 30px; 
	text-align: center;
}
.card-box > h1 {
	margin-top: 50px;
}
.card-box > div {
	font-size:20px; 
	margin-top:20px;
}

@media only screen and (max-width:1400px) {
	/* .main-logo {
		height: calc(50vh - 66px);
	} */
	.main-title {
		font-size: 38px;
	}
	.card-box > h1 {
		margin-top: 30px;;
	}
}
@media only screen and (max-width:700px) {
	/* .main-logo {
    	width: 100%;
		height: 100%;
  	} */
	.main-logo2 {
		width: 250px;
	}
	.main-title {
		font-size: 27px;
	}
	
	.card-box > h1 {
		font-size: 26px;
	}
	.card-box > div {
		font-size: 16px;
	}
} 
</style>

