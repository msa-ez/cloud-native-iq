<template>
    <div>
        <v-simple-table>
            <thead>
                <tr class="all-guide-table-head">
                    <th style="text-align: left !important;">
                    <v-row>
                        <div>목표수준</div>
                        <div class="color-box-style" style="background-color:rgb(25, 118, 210); margin-left: 4px;"></div>&nbsp;/
                        <div>현수준</div>
                        <div class="color-box-style" style="background-color:rgba(255, 183, 77, 1); margin-left: 4px;"></div>&nbsp;/
                        <div>달성수준</div>
                        <div class="color-box-style" style="background-color:green; margin-left: 4px;"></div>
                    </v-row>
                    </th>
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
                        >
                            <div style="font-weight: 900;">{{ level.name }}</div>
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
    props: {
        selectedAllGuideStatus: Boolean,
    },
    data () {
        return {
            guide: [
                {
                    name: '애플리케이션 관점',
                    name_en: 'application',
                    levels: [
                        { level: 1, path: '/application/level1', name: '모노리식(Monolithic)' },
                        { level: 2, path: '/application/level2', name: '하이브리드(Monolith & Microservice)' },
                        { level: 3, path: '/application/level3', name: '마이크로서비스(Microservice)' },
                        { level: 4, path: '/application/level4', name: '도메인 드리븐 & 이벤트 드리븐(Event driven)' }
                    ]
                },
                {
					name: '데이터베이스 관점',
					name_en: 'database',
                    levels: [
                        { level: 1, path: '/database/level1', name: '싱글 DBMS 사용' },
                        { level: 2, path: '/database/level2', name: '개별 스키마 정의(Scheme per Service)' },
                        { level: 3, path: '/database/level3', name: 'DBMS per Service, 폴리글랏 퍼시스턴스' },
                        { level: 4, path: '/database/level4', name: 'DBMS per Service & Event Sourcing, CQRS' }
                    ]
                },
                {
					name: '인프라스트럭처 관점',
					name_en: 'infrastructure',
                    levels: [
                        { level: 1, path: '/infrastructure/level1', name: '베어 메탈 서버기반 호스팅' },
                        { level: 2, path: '/infrastructure/level2', name: '가상화 데이터센터 기반 인프라 운영' },
                        { level: 3, path: '/infrastructure/level3', name: '퍼블릭 및 프라이빗 클라우드 기반 인프라 운영' },
                        { level: 4, path: '/infrastructure/level4', name: '멀티, 또는 하이브리드 클라우드 기반 자동화 운영' }
                    ]
                },
                {
					name: '개발 관점',
					name_en: 'development',
                    levels: [
                        { level: 1, path: '/development/level1', name: '폭포수 모델, 구조적 방법론' },
                        { level: 2, path: '/development/level2', name: '폭포수 모델과 에자일 방법론 혼용(Iteration)' },
                        { level: 3, path: '/development/level3', name: '에자일 방법론과 마이크로서비스 구현패턴 활용' },
                        { level: 4, path: '/development/level4', name: '비즈데브옵스(BizDevOps)와 MSA' }
                    ]
                },
                {
					name: '보안 관점',
					name_en: 'security',
                    levels: [
                        { level: 1, path: '/security/level1', name: '세션기반 인증 & 서버 사이드 렌더링' },
                        { level: 2, path: '/security/level2', name: '세션 클러스터링 & 서버 사이드 렌더링' },
                        { level: 3, path: '/security/level3', name: '토큰기반 인증 & 클라이언트 사이드 렌더링' },
                        { level: 4, path: '/security/level4', name: '토큰기반 인증 & 제로 트러스트 보안' }
                    ]
                },
                {
					name: '확장성 관점',
					name_en: 'scalability',
                    levels: [
                        { level: 1, path: '/scalability/level1', name: '수직 확장(Vertical Scaling)' },
                        { level: 2, path: '/scalability/level2', name: '수직 확장과 수평 확장의 혼용' },
                        { level: 3, path: '/scalability/level3', name: '수평 확장(Horizontal Scaling)' },
                        { level: 4, path: '/scalability/level4', name: '온디맨드 수평적 복제(On-demand Horizontal' }
                    ]
                },
                {
					name: '가시성 관점',
					name_en: 'visibility',
                    levels: [
                        { level: 1, path: '/visibility/level1', name: 'OS, Hardware 및 정적 로그 통계 모니터링' },
                        { level: 2, path: '/visibility/level2', name: '텔레메트리(Telemetry) 지표 수집에 의한 Observability' },
                        { level: 3, path: '/visibility/level3', name: '서비스 메쉬 기반 텔레메트리(Telemetry) & Observability' },
                        { level: 4, path: '/visibility/level4', name: '예측 분석 및 인프라와 서비스에 대한 통합 인사이트' }
                    ]
                },
            ],
            registeredProfiles: null,
            goalLevelAssessmentPaths: [],
            currentLevelAssessmentPaths: [],
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
    watch: {
        selectedAllGuideStatus(newVal) {
            if (newVal) {
                this.loadGoalPath();
            }
        }
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
                // 목표수준에 대한 path
                this.goalLevelAssessmentPaths = target.perspectives.map(perspective => {
                    return `/${perspective.name_en}/level${perspective.goalLevel}`;
                });

                
                // 현 수준에 대한 path
                this.currentLevelAssessmentPaths = target.perspectives.map(perspective => {
                    // isCompleted가 true인 level의 개수를 계산합니다.
                    const completedLevelsCount = perspective.levels.filter(level => level.isCompleted).length;
                    // 계산된 개수를 바탕으로 path를 설정합니다.
                    return `/${perspective.name_en}/level${completedLevelsCount}`;
                });
                
                this.isDataLoaded = true;
            }
        },
        checkPathMatch(path) {
            if(this.goalLevelAssessmentPaths.includes(path)&& this.currentLevelAssessmentPaths.includes(path)) {
                //겹치는 부분 색상 변경
                return {
                    backgroundColor: 'green', // 여기에 원하는 배경색을 지정
                    color: 'white' // 여기에 원하는 글자색을 지정
                };
            }
            else if (this.goalLevelAssessmentPaths.includes(path)) {
                // 목표수준 색상 변경
                return {
                    backgroundColor: 'rgb(25, 118, 210)', // 여기에 원하는 배경색을 지정
                    color: 'white' // 여기에 원하는 글자색을 지정
                };
            } else if (this.currentLevelAssessmentPaths.includes(path)) {
                // 현수준 색상 변경
                return {
                    backgroundColor: 'rgba(255, 183, 77, 1)', // 여기에 원하는 배경색을 지정
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