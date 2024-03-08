<template>
    <v-app>
        <div style="height: 100vh;">
            <v-app-bar elevation="0" outlined left style="height:60px;">
                <img @click="goHome()" 
                    style="cursor: pointer; align-items: left; width:90px;" 
                    src="https://github.com/msa-ez/cloud-iq/assets/149130268/66649787-f394-49f9-8a72-8002997161c6" 
                />
				<v-tooltip right>
                    <template v-slot:activator="{ on }">
                        <v-btn @click="openEditProfile()"
                            icon
                            v-on="on"
							style="margin-left:10px;"
                        >
                            <Icon icon="carbon:user-profile" width="30" height="30" />
                        </v-btn>
                    </template>
                    <span>프로필 관리</span>
                </v-tooltip>
                <v-spacer></v-spacer>
                <!-- 조건부 렌더링을 사용하여 selectedUser가 있을 때만 출력하도록 변경 -->
                <v-card-title v-if="selectedUser">프로필 : {{ selectedProfile }} > {{ selectedUser }}</v-card-title>
                <!-- selectedUser가 없을 경우에는 selectedProfile만 출력 -->
                <v-card-title v-else>프로필 : {{ selectedProfile }}</v-card-title>
            </v-app-bar>
            <v-main>
                <router-view style="height: calc(100vh - 64px);"></router-view>
            </v-main>
        </div>
    </v-app>
</template>

<script>
export default {
	components: {
	},
	computed: {
		selectedProfile() {
            return this.$store.state.selectedProfile;
        },
		selectedUser() {
            return this.$store.state.selectedUser;
        }
	},
	data() {
		return {
		}
	},
	created() {
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
		openEditProfile() {
			this.$eventBus.$emit('openEditProfile');
		},
	},
};
</script>

<style>

</style>

