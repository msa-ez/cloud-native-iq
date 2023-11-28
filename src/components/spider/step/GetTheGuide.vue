<template>
    <div>
        <v-tabs
            v-model="tab"
            fixed-tabs
        >
        <v-tab
            v-for="item in items"
            :key="item.tab"
        >
            {{ item.tab }}
        </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab" style="overflow:auto;">
            <v-tab-item
                v-for="item in items"
                :key="item.tab"
            >
                <v-card flat>
                    <template v-for="content in item.content">
                        <v-card-text>{{ content.text }}</v-card-text>
                    </template>
                    <GetTheGuideMd :selectedUser="selectedUser" />
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
import GetTheGuideMd from './GetTheGuideMd.vue'

export default {
    name: "GetTheGuide",
    components: {
        GetTheGuideMd
    },
    props: {
        selectedUser: null
    },
    data () {
        return {
        tab: null,
        items: [
            { 
                tab: '기능분해',
                content: [
                    {
                        text: 'Ubiquitous language 정의: 각 bounded context에서 사용될 공통 언어와 용어를 정의하고 이를 문서화하였는가?'
                    },
                    {
                        text: 'Boundary 정의: 각 bounded context의 경계를 명확하게 정의하고 외부에서의 커뮤니케이션 방식을 결정하였는가?'
                    },
                    {
                        text: 'Anti-corruption layer 구현: bounded context 간의 통신을 관리하기 위해 Anti-corruption layer를 구현하고 외부 인터페이스 변환 및 데이터 변환을 수행하였는가?'
                    },
                    {
                        text: 'Ubiquitous language 정의: 각 bounded context에서 사용될 공통 언어와 용어를 정의하고 이를 문서화하였는가?'
                    },
                ]
            },
            { 
                tab: '데이터',
                content: [
                    {
                        text: '분산 데이터 관리: 각 마이크로서비스는 완전히 분산된 데이터 관리를 수행하고 있으며, 필요에 따라 데이터의 파티셔닝, 샤딩, 복제 등을 구현하였는가?'
                    },
                    {
                        text: '폴리글랏 퍼시스턴스: 각 마이크로서비스는 자체적으로 다른 유형의 DBMS를 사용할 수 있는 폴리글랏 퍼시스턴스를 구현하였는가?'
                    },
                    {
                        text: '데이터 접근 및 관리: 각 마이크로서비스에서 필요한 데이터 액세스 방법을 선택하고 이를 효율적으로 관리하고 있으며, 성능과 확장성을 고려하였는가?'
                    },
                ]
            },
            { 
                tab: '소프트웨어 아키텍처',
                content: [
                    {
                        text: 'UI/UX: Client Side Rendering (CSR): 클라이언트에서 페이지 렌더링을 수행하고 필요한 데이터만 서버로부터 요청하여 가져옵니다. 이를 통해 초기 로딩 시간을 줄이고 사용자 경험을 향상시킬 수 있습니다.'
                    },
                    {
                        text: 'Token-based 보안, OAuth2: 세션 대신 토큰을 사용하여 사용자 인증과 권한 부여를 처리합니다. OAuth2와 같은 표준 프로토콜을 사용하여 안전한 인증 및 인가를 구현합니다.'
                    },
                    {
                        text: '폴리글랏 언어: 다양한 언어를 선택하여 각 마이크로서비스에 가장 적합한 언어를 사용합니다. 이를 통해 개발자들은 자신이 가장 잘 알고 있는 언어로 서비스를 개발할 수 있으며, 시스템 전체의 다양성과 유연성을 높일 수 있습니다.'
                    },
                ]
            },
            { 
                tab: '인프라 아키텍처',
                content: [
                    {
                        text: '컨테이너 사용 (도커)을 적용하였는가?'
                    },
                    {
                        text: '컨테이너 오케스트레이터 (Kubernetes)를 사용하여 마이크로서비스를 관리하고 스케일링하였는가?'
                    },
                    {
                        text: '외부 구성 요소 (예: 유레카, 주키퍼)를 활용하여 마이크로서비스 간의 통신과 구성 관리를 개선했는가?'
                    },
                ]
            },
            { 
                tab: '배포',
                content: [
                    {
                        text: 'Immutable 서버, 컨테이너 당 하나의 서비스 인스턴스, blue/green 배포를 포함한 다양한 배포 전략을 구사하였는가?'
                    },
                    {
                        text: 'Immutable 서버: 변경 불가능한 서버 이미지를 사용하여 배포와 롤백의 안정성과 일관성을 확보하였는가?'
                    },
                    {
                        text: '컨테이너 당 하나의 서비스 인스턴스: 컨테이너 당 하나의 서비스 인스턴스를 실행하여 격리와 확장성을 개선했는가?'
                    },
                    {
                        text: 'Blue/Green 배포: 새로운 버전의 서비스를 기존 버전과 동시에 배포하고 트래픽을 전환하는 Blue/Green 배포 전략을 구현하였는가?'
                    },
                ]
            },
            { 
                tab: '팀 구조와 문화',
                content: [
                    {
                        text: '서비스별 프로덕트 팀(PO, UI/UX 디자이너, 개발자) Cross Functional한 플랫폼 팀을 적용하였는가?'
                    },
                    {
                        text: '서비스별 프로덕트 팀: 각 서비스에 대한 전체적인 책임을 갖는 프로덕트 팀을 구성하였는가?'
                    },
                    {
                        text: 'PO, UI/UX 디자이너, 개발자: 다양한 역할을 수행하는 멤버들로 구성되어 프로덕트를 개발하고 개선하는데 참여하였는가?'
                    },
                    {
                        text: 'Cross Functional한 플랫폼 팀: 다양한 기술과 역할을 갖춘 팀이 플랫폼 관련 업무를 수행하고, 서비스 팀을 지원하였는가?'
                    },
                ]
            },
        ],
      }
    },

    watch: {
    },

    methods: {
    },
}
</script>