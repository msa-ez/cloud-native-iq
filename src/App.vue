<template>
	<v-app>
		<div style="height: 100vh;">
			<v-app-bar left style="height:60px;">
				<!-- <img @click="goHome()" 
					style="width:100%; height:100%; object-fit: contain; cursor: pointer; align-items: left; width:100px;" 
					src="./image/DPG_logo.png" 
				/> -->
				<img @click="goHome()" 
					style="width:100%; height:100%; object-fit: contain; cursor: pointer; align-items: left; width:100px;" 
					src="https://github.com/msa-ez/cloud-iq/assets/149130268/66649787-f394-49f9-8a72-8002997161c6" 
				/>
				<!-- <div style="font-weight: bold; color: #003669; margin-left: 5px;">
					<div>디지털 플랫폼 정부</div>
					<div>클라우드 네이티브 전환 가이드라인</div>
				</div> -->
			</v-app-bar>
			<v-main style="padding:20px; height: calc(100vh - 60px);">
				<router-view style="height:calc(100vh - 100px);"></router-view>
			</v-main>
		</div>
	</v-app>
</template>

<script>
export default {
	components: {
	},
	computed: {
	},
	data() {
		return {

		}
	},
	mounted() {
	},
	methods: {
		goHome() {
			this.$router.push('/');
		}
	},
};
</script>

<style>

</style>

