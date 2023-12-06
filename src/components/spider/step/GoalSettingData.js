export default {
    data() {
        return {
            user:[],
            users:[],
            tickLabels: [
                '전혀 그렇지 않다.',
                '그렇지 않다.',
                '보통이다.',
                '그렇다.',
                '매우 그렇다.'
            ],
            topics: [
                {
                    name: 'Availability',
                    goalLevels:[1, 1, 0, 1, 1, 0],
                    goalCheckCount: 1,
                    questions: [
                        {
                            text: '최근 마이너한 신규 기능의 추가로 인하여 핵심 기능의 장애가 발생한 적이 있는가',
                            value: 0
                        },
                        {
                            text: '요구되는 uptime 이 가장 높은 업무 영역과 낮은 영역간의 격차가 얼마나 되는가',
                            value: 0
                        },
                        {
                            text: '단일 데이터베이스를 여러업무가 사용하면서 lock 이 걸리거나 사용자가 대기시간이 오래걸리는 일들이 있는가',
                            value: 0
                        },
                        {
                            text: '사용자 과부하시에 특정 기능에 대기시간이 급격히 늘어나거나 사용자 불만이 존재하는가',
                            value: 0
                        },
                        {
                            text: '시스템 확장에 한계로 작용하는 취약한 지점이 존재하는가',
                            value: 0
                        },
                        {
                            text: '특정 시간대에 업무가 몰려들어 충분한 자원이 있음에도 사용자 이탈 혹은 요청 처리가 불가능한 경우가 발생하여 장애가 발생한적이 있는가',
                            value: 0
                        },
                    ]
                },
                {
                    name: '업무 간섭 / 이해의 문제',
                    goalLevels:[3, 3, 0, 3, 3, 0],
                    goalCheckCount: 3,
                    questions: [
                        {
                            text: '업무 수정을 위하여 하나 이상의 부서의 프로세스 합의나 데이터베이스 구조 등의 합의가 필요한가',
                            value: 0
                        },
                        {
                            text: '던젼 마스터가 존재하는가',
                            value: 0
                        },
                        {
                            text: '던젼 마스터의 일정에 얼마나 종속적인가',
                            value: 0
                        },
                        {
                            text: '타 시스템간 통합을 위하여 해당 시스템이 죽게 되면 내 시스템도 장애가 발생하는가',
                            value: 0
                        },
                        {
                            text: '데이터베이스 영향도 때문에 스키마가 영향을 받아 시스템 장애가 생긴작이 있는가',
                            value: 0
                        },
                        {
                            text: '팀간에 동일한 시스템 공유로 인한 테스트시 야근 등으로 개발자 만족도가 떨어지는가',
                            value: 0
                        },
                        {
                            text: '개발된 제품이 실제로 운영에 반영되는데 여러가지 정서적 기술적 이유로 지체되는 일이 있는가',
                            value: 0
                        },
                        {
                            text: '시스템은 분리되어있으나 이들간의 api 가 잘 준수되지 못하여 api spec 연동이슈 및 버전의 혼란이 존재하는가',
                            value: 0
                        },
                        {
                            text: '서버들은 잘 분리되었으나 프론트엔드에서도 팀간 분리 사용기술 다양화 등의 이슈가 붉어지기 시작하는가',
                            value: 0
                        },
                    ]
                },
                {
                    name: 'Agility',
                    goalLevels:[1, 2, 3, 4, 3, 4],
                    goalCheckCount: 1,
                    questions: [
                        {
                            text: '신규 업무를 개발하여 배포하는데 타 서비스들간의 테스트를 위하여 대기해야하는 시간이 얼마나 걸리는가 (코드 머지, 통합 테스트, 간섭에 의한 오류 수정)',
                            value: 0
                        },
                    ]
                },
                {
                    name: '다양한 최신기술 수용성',
                    goalLevels:[1, 2, 3, 4, 3, 4],
                    goalCheckCount: 1,
                    questions: [
                        {
                            text: '레가시 기술들(버전,언어, os) 발목이 잡혀 신규 기술들을 적용하지 못함',
                            value: 0
                        },
                        {
                            text: '업무 영역중 사서 써도 되는 시스템이지만 통합의 이슈로 직접 구현해서 쓰는 시스템 영역은 어떤 것들이 있는가',
                            value: 0
                        },
                    ]
                },
                {
                    name: '성능',
                    goalLevels:[1, 2, 3, 4, 3, 4],
                    goalCheckCount: 1,
                    questions: [
                        {
                            text: '대시보드 혹은 결산 등 데이터 조회에 동원되는 테이블 개수가 막대하여 성능 문제와 join sql 등의 관리가 어려운가',
                            value: 0
                        },
                        {
                            text: '금액 등 중요한 정보를 다루기 때문에 데이터 변경이력을 꼭 관리해야하고 필요시 복구해야 하는가',
                            value: 0
                        },
                    ]
                },
                {
                    name: '관리자동화/효율화',
                    goalLevels:[4, 4, 4, 4, 4, 4],
                    goalCheckCount: 2,
                    questions: [
                        {
                            text: '관리하는 서버들을 수작업으로 관리하는가 아니면 자동화된 시스템으로 확장 축소 장애시 재시작 등이 이루어지는가',
                            value: 0
                        },
                        {
                            text: '서버들간의 연동에 있어 직접적인 ip 어드레스 등이 관리어려운가',
                            value: 0
                        },
                        {
                            text: '서비스 사용자의 폭주등을 관리할 수 있도록 접속 제한, 공격방어 등이 필요한가',
                            value: 0
                        },
                        {
                            text: '시스템 복구나 테스트용도의 시스템을 최대한 빠르게 재구성할 수 있어야 하는가',
                            value: 0
                        },
                    ]
                },
                {
                    name: '데이터 분석 및 혁신',
                    goalLevels:[3, 2, 3, 4, 3, 4],
                    goalCheckCount: 1,
                    questions: [
                        {
                            text: '각 업무 분석의 데이터가 너무 통합되어 도메인별 관리가 어려운가',
                            value: 0
                        },
                        {
                            text: '시계열 데이터의 수집과 분석이 필요한가',
                            value: 0
                        },
                    ]
                },
                {
                    name: '지속적 혁신',
                    goalLevels:[3, 2, 3, 4, 3, 4],
                    goalCheckCount: 1,
                    questions: [
                        {
                            text: '기존 시스템에 대한 개선 지표와 서비스 수준이 관리될 필요가 있는가',
                            value: 0
                        },
                        {
                            text: '기존 사용자가 새로운 시도에 얼마나 반응하는지 지속적인 개선을 위한 실 사용자 피드백이 절실한가',
                            value: 0
                        },
                    ]
                },
            ],
        }
    },
};