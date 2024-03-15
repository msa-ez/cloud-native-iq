<template>
    <div>
      <v-simple-table>
        <thead>
          <tr class="all-guide-table-head">
            <th style="text-align: left !important;"></th>
            <th>Level 1</th>
            <th>Level 2</th>
            <th>Level 3</th>
            <th>Level 4</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(guideItem, guideIndex) in guide" :key="guideIndex">
            <td>{{ guideItem.name }}</td>
                <td v-for="level in guideItem.levels" :key="level.level"
                    class="all-guide-view"
                    @click="navigate(level.path)"
                >
                    <v-card style="padding:20px;
                        margin:10px;
                        text-align: center;"
                        :style="checkPathMatch(level.path)"
                    >전환 가이드 보기
                    </v-card>
                </td>
          </tr>
        </tbody>
      </v-simple-table>
    </div>
  </template>

<script>
export default {
    components: {
    },
    data () {
        return {
            guide: [
                {
                    name: '애플리케이션 관점',
                    name_en: 'application',
                    levels: [
                        { level: 1, path: '/application/level1' },
                        { level: 2, path: '/application/level2' },
                        { level: 3, path: '/application/level3' },
                        { level: 4, path: '/application/level4' }
                    ]
                },
                {
					name: '데이터베이스 관점',
					name_en: 'database',
                    levels: [
                        { level: 1, path: '/database/level1' },
                        { level: 2, path: '/database/level2' },
                        { level: 3, path: '/database/level3' },
                        { level: 4, path: '/database/level4' }
                    ]
                },
                {
					name: '인프라스트럭처 관점',
					name_en: 'infrastructure',
                    levels: [
                        { level: 1, path: '/infrastructure/level1' },
                        { level: 2, path: '/infrastructure/level2' },
                        { level: 3, path: '/infrastructure/level3' },
                        { level: 4, path: '/infrastructure/level4' }
                    ]
                },
                {
					name: '개발 관점',
					name_en: 'development',
                    levels: [
                        { level: 1, path: '/development/level1' },
                        { level: 2, path: '/development/level2' },
                        { level: 3, path: '/development/level3' },
                        { level: 4, path: '/development/level4' }
                    ]
                },
                {
					name: '보안 관점',
					name_en: 'security',
                    levels: [
                        { level: 1, path: '/security/level1' },
                        { level: 2, path: '/security/level2' },
                        { level: 3, path: '/security/level3' },
                        { level: 4, path: '/security/level4' }
                    ]
                },
                {
					name: '확장성 관점',
					name_en: 'scalability',
                    levels: [
                        { level: 1, path: '/scalability/level1' },
                        { level: 2, path: '/scalability/level2' },
                        { level: 3, path: '/scalability/level3' },
                        { level: 4, path: '/scalability/level4' }
                    ]
                },
                {
					name: '가시성 관점',
					name_en: 'visibility',
                    levels: [
                        { level: 1, path: '/visibility/level1' },
                        { level: 2, path: '/visibility/level2' },
                        { level: 3, path: '/visibility/level3' },
                        { level: 4, path: '/visibility/level4' }
                    ]
                },
            ],
            registeredProfiles: null,
            registeredTargetGoalPath: [],
            goalLevels: 0,
        }
    },
    computed: {
        selectedProfile() {
            return this.$store.state.selectedProfile;
        },
        selectedUser() {
            return this.$store.state.selectedUser;
        },
    },
    created() {
        this.loadGoalPath();
    },
    methods: {
        navigate(path) {
            this.$router.push(path);
        },
        loadGoalPath() {
            const profilesData = localStorage.getItem('registeredProfiles');
            if (profilesData) {
                this.registeredProfiles = JSON.parse(profilesData);
                // Vuex에서 가져온 selectedProfile과 일치하는 프로필을 찾습니다.
                const matchedProfile = this.registeredProfiles.find(profile => profile.name === this.selectedProfile);
                let target = matchedProfile; // 기본적으로 matchedProfile을 대상으로 설정합니다.
                // selectedUser가 있고, matchedProfile에 users가 정의되어 있다면, 해당 사용자를 대상으로 설정합니다.
                if (this.selectedUser && matchedProfile.users) {
                    const matchedUser = matchedProfile.users.find(user => user.name === this.selectedUser);
                    if (matchedUser) {
                        target = matchedUser; // 대상을 matchedUser로 변경합니다.
                    }
                }
                // 대상(target)의 perspectives를 기반으로 경로를 설정합니다.
                this.registeredTargetGoalPath = target.perspectives.map(perspective => {
                    return `/${perspective.name_en}/level${perspective.goalLevel}`;
                });
                
                this.isDataLoaded = true;
            }
        },
        checkPathMatch(path) {
            if (this.registeredTargetGoalPath.includes(path)) {
                // 조건을 만족하는 경우 사용자 정의 스타일 객체 반환
                return {
                    backgroundColor: 'rgb(25,118,210)', // 여기에 원하는 배경색을 지정
                    color: 'white' // 여기에 원하는 글자색을 지정
                };
            } else
            return {
                backgroundColor: '', // 기본 배경색
                color: '' // 기본 글자색
            };
        },
    },
}
</script>

<style>
.all-guide-view {
    cursor: pointer;
    opacity: 0.8;
}

.all-guide-view:hover {
    opacity: 1;
}

.all-guide-table-head th {
    font-size: 20px !important;
    font-weight: 900 !important;
    text-align: center !important;
}
</style>