<template>
    <v-app>
        <div style="height: 100vh;">
            <v-app-bar elevation="0" outlined left app style="height:60px;">
                <img @click="goHome()" 
                    style="cursor: pointer; align-items: left; width:90px;" 
                    src="https://github.com/msa-ez/cloud-iq/assets/149130268/66649787-f394-49f9-8a72-8002997161c6" 
                />
                <v-spacer></v-spacer>
                <v-tooltip bottom v-if="showProfileInfo">
                    <template v-slot:activator="{ on }">
                        <div v-on="on" @click="openEditProfile()"
                            style="cursor: pointer;"
                        >
                            <!-- 조건부 렌더링을 사용하여 selectedUser가 있을 때만 출력하도록 변경 -->
                            <v-card-title v-if="selectedUser">프로필 : {{ selectedProfile }} > {{ selectedUser }}</v-card-title>
                            <!-- selectedUser가 없을 경우에는 selectedProfile만 출력 -->
                            <v-card-title v-else>그룹 : {{ selectedProfile }}</v-card-title>
                        </div>
                    </template>
                    <span>그룹/프로필 관리</span>
                </v-tooltip>
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
	data() {
		return {
            showProfileInfo: false,
		}
	},
	watch: {
        // $route 객체를 감시하여 라우터 변경 시 로직을 실행
        '$route'(to, from) {
            // 특정 경로들을 배열로 정의
            const specificPaths = ['/goal-setting', '/assessment', '/get-the-guide'];
            // 현재 경로가 specificPaths 배열에 정의된 경로 중 하나로 시작하는지 확인
            this.showProfileInfo = specificPaths.some(path => to.path.startsWith(path));
        }
    },
    created() {
        // 컴포넌트 생성 시 현재 경로를 기반으로 showProfileInfo 초기화
        this.showProfileInfo = this.$route.path !== '/';
    },
	computed: {
		selectedProfile() {
            return this.$store.state.selectedProfile;
        },
		selectedUser() {
            return this.$store.state.selectedUser;
        },
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

