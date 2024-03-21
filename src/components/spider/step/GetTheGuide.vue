<template>
    <div>
        <v-tabs v-model="tab" fixed-tabs>
            <!-- 새로운 고정 탭 추가 -->
            <v-tab class="tab-title" key="fixed-tab">
                검토결과
            </v-tab>
            <!-- 기존 v-for를 사용한 탭들 -->
            <v-tab class="tab-title" v-for="item in guideTabs" :key="item.tab">
                {{ item.tab }}
            </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab" class="guide-box">
            <!-- 새로운 고정 탭 컨텐츠 -->
            <v-tab-item key="fixed-tab-content">
                <div flat style="padding:0px;">
                    <!-- 외부 컨테이너 div 추가 -->
                    <div class="img-box-wrap">
                        <div class="conversion-img-box">
                            <div>
                                <h3>ㆍ목표 성숙도 모델</h3>
                                <img :src="conversionGoalImage(slaResult.conversionGoal)" />
                                <div style="text-align: start; margin-left:16%;">
                                    <div>서비스에 대한 클라우드 네이티브 적합성 검토결과,<br>
                                        <span style="font-weight: 700;" class="text-primary">{{ slaResult.count }}</span>개 이상 항목에서 적합성 조건을 충족하여
                                        <span style="font-weight: 700;" class="text-primary">{{ slaResult.cloudStatus }}{{ getConversionResult(slaResult.conversionGoal) }}</span>
                                    </div>
                                    <div>
                                        - 목표 시스템 레벨에 따른 SLA 수준 : <span style="font-weight: 700;" class="text-primary">{{ slaResult.percentage }}</span>
                                        <br>
                                        - 월 허용가능 장애시간 : <span style="font-weight: 700;" class="text-primary">약 {{ slaResult.time }}</span>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <div>
                                <h3>ㆍ전환 및 모더나이즈 방법론 : {{ getConversionMethodInfo(slaResult.conversionMethod).text }}</h3>
                                <img :src="getConversionMethodInfo(slaResult.conversionMethod).imagePath" />
                                <div style="text-align: start; margin-left:16%;">
                                    <div>{{ slaResult.conversionText }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="reference-img-box">
                            <h3>ㆍ참조 아키텍처</h3>
                            <template v-for="(path) in referenceArchitecturegetImagePath()">
                                <img :src="path" />
                            </template>
                        </div>
                    </div>
                </div>
            </v-tab-item>
            <!-- 기존 v-for를 사용한 탭 컨텐츠들 -->
            <v-tab-item v-for="item in guideTabs" :key="item.tab">
                <div flat style="padding:20px;">
                    <div v-if="goalLevels[item.tab_en] > 0 && Object.keys(markdownContentFolders).length > 0"
                        v-html="markdownContentFolders[item.tab_en][goalLevels[item.tab_en]]">
                    </div>
                    <div v-else>
                        전환목표가 없습니다.
                    </div>
                </div>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
import axios from 'axios';
import marked from 'marked';
import SLABase from './SLABase.vue'

export default {
    name: "GetTheGuide",
    mixins: [
        SLABase
    ],
    components: {
    },
    props: {
        selectedProfile: null,
        chartData: null
    },
    data () {
        return {
            frontEnd: {
                monolith: false,
                micro: false,
            },
            gateway: false,
            serviceType: {
                monolith: false,
                mini: false,
                micro: false,
                sidecar: false,
            },
            messagingChannel: false,
            infra: {
                kubernetes: false,
                virtualMachine: false,
                bareMetal: false,
            },
            guideTabs: [
                {
                    tab: '애플리케이션 영역',
                    tab_en: 'application',
                },
                { 
                    tab: '데이터베이스 영역',
                    tab_en: 'database',
                },
                { 
                    tab: '인프라스트럭처 영역',
                    tab_en: 'infrastructure',
                },
                { 
                    tab: '개발 영역',
                    tab_en: 'development',
                },
                { 
                    tab: '보안 영역',
                    tab_en: "security",
                },
                { 
                    tab: '확장성 영역',
                    tab_en: "scalability",
                },
                { 
                    tab: '가시성 영역',
                    tab_en: "visibility",
                },
            ],
            tab: 0,
            markdownContentFolders: {},
            profilePerspectives: [],
            goalLevels: {},
            contents: [],
        }
    },
    created() {
        this.loadProfilePerspectives();
        this.checkReferenceArchitecture();
        this.getSLAPercentage(this.chartData);
    },
    watch: {
        chartData: {
            handler(){
                this.markdownContentFolders = {}
                this.loadProfilePerspectives();
                this.checkReferenceArchitecture();
                this.getSLAPercentage(this.chartData);
            },
            deep:true
        },
        tab(newVal) {
            // 고정 탭 선택시 라우트 변경
            if (newVal === 0) {
                this.$router.push(`/get-the-guide/review-result`);
                return;
            }

            // 기존 탭들에 대한 처리
            const tabName = this.guideTabs[newVal - 1].tab_en; // 인덱스 조정
            this.chartData.perspectives.forEach(p => {
                if (p.name_en === tabName) {
                    this.$router.push(`/get-the-guide/${tabName}/level${p.goalLevel}`);
                }
            });
        }
    },
    methods: {
        referenceArchitecturegetImagePath() {
            let paths = [];

            // Frontend Images
            if (this.frontEnd.micro) {
                paths.push(require('../../../../src/image/referenceArchitecture/mic-frontend.png')); // Microservice Frontend Image
            }
            if (this.frontEnd.monolith) {
                paths.push(require('../../../../src/image/referenceArchitecture/mono-frontend.png')); // Monolith Frontend Image
            }

            // Gateway Image
            if (this.gateway) {
                paths.push(require('../../../../src/image/referenceArchitecture/api.png')); // API Gateway Image
            }

            // Inner Architecture Images
            if (this.serviceType.monolith) {
                paths.push(require('../../../../src/image/referenceArchitecture/inner1.png')); // Monolith Inner Architecture Image
            }
            if (this.serviceType.mini) {
                paths.push(require('../../../../src/image/referenceArchitecture/inner2.png')); // Mini Inner Architecture Image
            }
            if (this.serviceType.micro) {
                paths.push(require('../../../../src/image/referenceArchitecture/inner3.png')); // Microservice Inner Architecture Image
            }
            if (this.serviceType.sidecar) {
                paths.push(require('../../../../src/image/referenceArchitecture/inner4.png')); // Sidecar Inner Architecture Image
            }

            // Messaging Channel Image
            if (this.messagingChannel) {
                paths.push(require('../../../../src/image/referenceArchitecture/Messaging.png')); // Messaging Channel Image
            }

            // Infrastructure Images
            if (this.infra.kubernetes) {
                paths.push(require('../../../../src/image/referenceArchitecture/Kubernetes.png')); // Kubernetes Infrastructure Image
            }
            if (this.infra.virtualMachine) {
                paths.push(require('../../../../src/image/referenceArchitecture/vm.png')); // Virtual Machine Infrastructure Image
            }
            if (this.infra.bareMetal) {
                paths.push(require('../../../../src/image/referenceArchitecture/bare.png')); // Bare Metal Infrastructure Image
            }

            return paths;
        },
        conversionGoalImage(type) {
            switch (type) {
                case 'keep':
                    return require('../../../../src/image/conversionGoal/00keep.png');
                case 'ready':
                    return require('../../../../src/image/conversionGoal/01ready.png');
                case 'optimized':
                    return require('../../../../src/image/conversionGoal/02optimized.png');
                case 'native':
                    return require('../../../../src/image/conversionGoal/03native.png');
            }
        },
        getConversionMethodInfo(type) {
            const info = {
                'retain': {
                    text: 'Retain',
                    imagePath:  require('../../../../src/image/conversionMethod/00retain.png')
                },
                'reHost': {
                    text: 'ReHost',
                    imagePath:  require('../../../../src/image/conversionMethod/02rehost.png')
                },
                'rePlatform': {
                    text: 'RePlatform',
                    imagePath:  require('../../../../src/image/conversionMethod/04replatform.png')
                },
                'reArchitect': {
                    text: 'ReArchitect',
                    imagePath:  require('../../../../src/image/conversionMethod/07rearchitect.png')
                }
            };

            return info[type] || { text: '', imagePath: '' }; // 기본값 처리
        },
        getConversionResult(type) {
            switch (type) {
                case 'keep':
                    return '로 검토됨';
                default :
                    return '로의 전환이 요구됨';
            }
        },
        checkReferenceArchitecture() {
            const swArchitecture = this.chartData.perspectives.find(p => p.name_en === 'application');
            const decomposition = this.chartData.perspectives.find(p => p.name_en === 'development');
            const dataPerspective = this.chartData.perspectives.find(p => p.name_en === 'database');
            const infraArchitecture = this.chartData.perspectives.find(p => p.name_en === 'scalability');

            // Frontend 조건 설정
            this.frontEnd.micro = swArchitecture && swArchitecture.goalLevel === 4;
            this.frontEnd.monolith = swArchitecture && swArchitecture.goalLevel < 4;

            // Gateway 조건 설정
            this.gateway = (decomposition && decomposition.goalLevel >= 2) || (dataPerspective && dataPerspective.goalLevel >= 2);

            // Inner Architecture 조건 설정
            this.serviceType.monolith = dataPerspective && dataPerspective.goalLevel <= 1;
            this.serviceType.mini = dataPerspective && dataPerspective.goalLevel === 2;
            this.serviceType.micro = dataPerspective && dataPerspective.goalLevel === 3;
            if (dataPerspective && dataPerspective.goalLevel >= 3 && swArchitecture && swArchitecture.goalLevel === 4) {
                this.serviceType.sidecar = true
            }

            // Messaging Channel 조건 설정
            this.messagingChannel = (decomposition && decomposition.goalLevel == 4) || (dataPerspective && dataPerspective.goalLevel == 4);

            // Infra 조건 설정
            this.infra.kubernetes = infraArchitecture && infraArchitecture.goalLevel >= 3;
            this.infra.virtualMachine = infraArchitecture && infraArchitecture.goalLevel === 2;
            this.infra.bareMetal = infraArchitecture && infraArchitecture.goalLevel <= 1;
        },
        async getAllMarkdownContentFolders() {
            try {
                const response = await axios.get(`https://api.github.com/repos/msa-ez/cloud-iq-md/contents/get-the-guide-md2`);
                const markdownContentFolders = response.data.filter(item => item.type === 'dir');
                for (const folder of markdownContentFolders) {
                    await this.getFolderContents(folder.name);
                }
                this.$forceUpdate()
            } catch (error) {
                console.error("Failed to load markdownContentFolders", error);
            }
        },
        async getFolderContents(folderName) {
            try {
                let folderFiles = {};
                for (let i = 1; i <= 4; i++) {
                    const fileResponse = await axios.get(`https://raw.githubusercontent.com/msa-ez/cloud-iq-md/main/get-the-guide-md2/${folderName}/level${i}.md`);
                    const markdownContent = marked(fileResponse.data);
                    folderFiles[i] =  markdownContent ;
                }
                this.markdownContentFolders[folderName] = folderFiles
            } catch (error) {
                console.error(`Failed to load contents for folder ${folderName}`, error);
            }
        },
        loadProfilePerspectives() {
            if (this.chartData && this.chartData.perspectives) {
                this.chartData.perspectives.forEach(p =>{
                    this.goalLevels[p.name_en] = p.goalLevel
                });
                this.getAllMarkdownContentFolders()
            }
        }
    },
}
</script>
<style>
.text-primary {
    color:#1976D2
}
.guide-box {
    padding:20px;
    overflow: auto;
}
.tab-title {
    font-size: 16px;
    font-weight: 700;
}
.img-box-wrap {
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: flex-start; 
    justify-content: center;
}
.conversion-img-box {
    max-width: 720px;
    width: 40%;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.conversion-img-box > div {
    width: 100%;
    max-height: 100%;
}
.conversion-img-box > div > h3 {
    width: 80%;
    margin: 0 auto;
}
.conversion-img-box > div > img {
    display: block;
    max-width: 100%;
    width: 70%;
	height: auto;
    margin: 0 auto;
}
.reference-img-box {
    max-width: 760px;
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.reference-img-box > h3 {
    width: 70%;
    margin: 0 auto;
}
.reference-img-box > img {
    max-width: 100%;
    width: 60%;
	height: auto;
    margin: 0 auto;
}

@media all and (min-width:1520px) and (max-height:779px) { 
    .conversion-img-box > div > h3, .conversion-img-box > div > img {
        font-size: 1.1rem;
    }
    .reference-img-box > h3, .reference-img-box > img {
        width: 53%;
        font-size: 1.1rem;
    }
}
@media only screen and (max-width:1280px) {
    .conversion-img-box > div > h3, .conversion-img-box > div > img {
        width: 80%;
    }
    .reference-img-box > h3, .reference-img-box > img {
        width: 70%;
    }
}
@media only screen and (max-width:1024px) {
    .conversion-img-box > div > h3, .conversion-img-box > div > img {
        width: 90%;
        font-size: 1.05rem;
    }
    .reference-img-box > h3, .reference-img-box > img {
        width: 80%;
        font-size: 1.05rem;
    }
}
@media only screen and (max-width:768px) {
    .img-box-wrap {
        height: 100%;
        padding: 10px;
        flex-direction: column;
        justify-content: flex-start;
    }
    .conversion-img-box{
        width: 100%;
        padding-bottom: 20px;
    }
    .conversion-img-box > div > h3, .conversion-img-box > div > img {
        width: 100%;
    }
    .reference-img-box {
        width: 100%;
        height: 100%;
        justify-content: flex-start;
        margin-top: 20px;
    }
    .reference-img-box > h3, .reference-img-box > img {
        width: 100%;
    }
}
</style>