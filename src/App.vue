<template>
	<v-app>
		<div style="height: 100vh;">
			<v-app-bar elevation="0" outlined left style="height:60px;">
				<img @click="goHome()" 
					style="width:100%; height:100%; object-fit: contain; cursor: pointer; align-items: left; width:100px;" 
					src="https://github.com/msa-ez/cloud-iq/assets/149130268/66649787-f394-49f9-8a72-8002997161c6" 
				/>
				<v-spacer></v-spacer>
				<v-tooltip bottom>
					<template v-slot:activator="{ on }">
						<v-btn @click="addRegisteredProfile()"
							icon
							v-on="on"
						>
							<Icon icon="uiw:user-add" width="30" height="30" />
						</v-btn>
					</template>
					<span>프로필 등록</span>
				</v-tooltip>
				<v-tooltip bottom>
					<template v-slot:activator="{ on }">
						<v-btn @click="deleteProfile()"
							icon
							v-on="on"
						>
							<Icon icon="uiw:user-delete" width="30" height="30" />
						</v-btn>
					</template>
					<span>프로필 삭제</span>
				</v-tooltip>
			</v-app-bar>
			<v-main style="height: calc(100vh - 60px);">
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
		document.title = 'cloudiq';
	},
	methods: {
		goHome() {
			if (this.$router.currentRoute.path !== '/') {
				this.$router.push('/');
			}
		},
		addRegisteredProfile() {
			this.$eventBus.$emit('addProfile');
		},
		deleteProfile() {
			this.$eventBus.$emit('deleteProfile');
		}
	},
};
</script>

<style>

</style>

