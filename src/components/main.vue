<template>
	<div class="">
		<div class="flex-column">
			<div class="title-box">
				<img class="dpg-logo" src="https://github.com/msa-ez/cloud-iq/assets/149130268/1d4667a1-b6b7-47ef-a07c-94dc0da510b2" />
				<div class="main-title">클라우드 네이티브 전환 가이드라인</div>
				<img class="iq-logo" src="https://github.com/msa-ez/cloud-iq/assets/149130268/66649787-f394-49f9-8a72-8002997161c6" />
			</div>
			<v-row>
				<v-col v-for="(step, index) in steps" :key="index">
					<v-card @click="goToStep(step.path)" class="card-box">
						<div>
							<h2 class="step-index">Step. {{ index + 1 }}</h2>
							<Icon :icon="step.icon" width="50" height="50"/>
							<h1 class="step-name">{{ step.name }}</h1>
							<div class="step-name-en">{{ step.name_en }}</div>
						</div>
					</v-card>
				</v-col>
			</v-row>
			<div class="flex-grow-1"></div> 
			<v-row class="align-left justify-left footer-wrap">
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
					name: "목표수준 설정",
					name_en: "Goal Setting",
					path: "/goal-setting",
					icon: "fluent:delete-28-filled"
				},
				{
					name: "현 수준 평가",
					name_en: "Assessment",
					path: "/assessment",
					icon: "octicon:goal-24"
				},
				{
					name: "전환 가이드",
					name_en: "Get the Guide",
					path: "/get-the-guide",
					icon: "https://github.com/msa-ez/cloud-iq/assets/149130268/7fc71935-b563-4900-b436-f8c2d52070f3"
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
.title-box {
	max-width: 767px;
	width: 100%;
	height: calc((100vh - 96px) * 0.6);
	margin: 0 auto;
	text-align: center;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.dpg-logo {
	max-width: 100%;
	height: auto;
}
.main-title {
	font-size: 2.8rem;
	font-weight: bold;
	color: #003669;
	margin: 10px;
}
.iq-logo {
	max-width: 100%;
	height: calc((100vh - 96px) * 0.4);
}
.card-box {
	height: calc((100vh - 96px) * 0.33);
	margin: 30px 20px 20px 20px; 
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 1px solid #ededed !important;
}
.card-icon {
	width: 45px;
	height: 45px;
	margin: 20px auto;
}
.card-box:hover {
	color: #fff;
	background-color: #003669;
	border: 1px solid #003669 !important;
	/* transition: all linear 0.3s 0s; */
}
.card-box:hover .card-icon {
	border-radius: 50%;
	background-color: #fff;
	transition: all linear 0.3s 0s;
}
.step-name-en {
	font-size: 1.25rem; 
	margin-top: 10px;
}
.footer-wrap {
	width: 100%;
	height: 36px;
	position: fixed;
	bottom: 1%;
}
@media all and (min-width:1520px) and (max-height:770px) { 
	.title-box {
		display: block;
	}
	.main-title {
		font-size: 2.4rem;
		margin: 0;
	}
	.step-index {
		font-size: 1.4rem;
	}
	.card-icon {
		margin: 5px auto;
	}
	.step-name {
		font-size: 1.9rem;
	}
	.step-name-en {
		font-size: 1.17rem;
		margin-top: 3px;
	}
} 
@media only screen and (max-width:1519px) {
	.title-box {
		display: block;
	}
	.dpg-logo {
		width: 35%;
	}
	.main-title {
		font-size: 2.4rem;
	}
	.iq-logo {
		width: 50%;
		height: auto;
	}
	.step-index {
		font-size: 1.4rem;
	}
	.card-icon {
		margin: 5px auto;
	}
	.step-name {
		font-size: 1.9rem;
	}
	.step-name-en {
		font-size: 1.17rem;
		margin-top: 3px;
	}
}
@media only screen and (max-width:1279px) {
	.dpg-logo {
		width: 30%;
	}
	.iq-logo {
		width: 45%;
	}
}
@media only screen and (max-width:1023px) {
	.iq-logo {
		width: 40%;
	}
	.card-icon {
		width: 40px;
		height: 40px;
	}
}
@media only screen and (max-width:768px) {
	.title-box {
		height: auto;
	}
	.dpg-logo {
		width: 250px;
	}
	.main-title {
		font-size: 1.68rem;
	}
	.iq-logo {
		width: 350px;
	}
	.card-box {
		margin: 10px auto;
		width: 90vw;
		height: auto;
		padding: 30px;
	}
	.step-index {
		font-size: 22px;
	}
	.step-name {
		font-size: 26px;
	}
	.step-name-en {
		font-size: 16px;
	}
	.footer-wrap {
		position: relative;
	}
}
</style>

