<template>
	<v-app>
		<div style="height: 100vh;">
			<v-app-bar left style="height:60px;">
				<img @click="goHome()" 
					style="width:100%; height:100%; object-fit: contain; cursor: pointer; align-items: left; width:100px;" 
					src="./image/DPG_logo.png" 
				/>
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

