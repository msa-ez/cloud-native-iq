<template>
    <div>
        <v-tabs v-model="tab" fixed-tabs>
            <!-- 새로운 고정 탭 추가 -->
            <v-tab class="tab-title" key="fixed-tab">
                참조 아키텍처
            </v-tab>
            <!-- 기존 v-for를 사용한 탭들 -->
            <v-tab class="tab-title" v-for="item in items" :key="item.tab">
                {{ item.tab }}
            </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab" class="guide-box">
            <!-- 새로운 고정 탭 컨텐츠 -->
            <v-tab-item key="fixed-tab-content">
                <v-card flat style="padding:20px;">
                    <div v-if="messagingChannel">messagingChannel</div>
                    <div></div>
                </v-card>
            </v-tab-item>

            <!-- 기존 v-for를 사용한 탭 컨텐츠들 -->
            <v-tab-item v-for="item in items" :key="item.tab">
                <v-card flat style="padding:20px;">
                    <div v-if="goalLevels[item.tab_en] > 0 && Object.keys(markdownContentFolders).length > 0"
                        v-html="markdownContentFolders[item.tab_en][goalLevels[item.tab_en]]">
                    </div>
                    <div v-else>
                        전환목표가 없습니다.
                    </div>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
import axios from 'axios';
import marked from 'marked';

export default {
    name: "GetTheGuide",
    components: {
    },
    props: {
        selectedUser: null
    },
    data () {
        return {
        frontEnd: {
            monolith: Boolean,
            micro: Boolean,
        },
        gateway: Boolean,
        serviceType: {
            sidecar: Boolean,
            micro: Boolean,
            mini: Boolean,
        },
        messagingChannel: Boolean,
        infra: {
            kubernetes: Boolean,
            virtualMachine: Boolean,
            bareMetal: Boolean,
        },
        items: [
            {
                tab: '기능분해',
                tab_en: 'decomposition',
            },
            { 
                tab: '데이터',
                tab_en: 'data',
            },
            { 
                tab: '소프트웨어 아키텍처',
                tab_en: 'sw-architecture',
            },
            { 
                tab: '인프라 아키텍처',
                tab_en: 'infra-architecture',
            },
            { 
                tab: '배포',
                tab_en: "distribute",
            },
            { 
                tab: '팀 구조와 문화',
                tab_en: "team-structure",
            },
        ],
        tab: 0,
        markdownContentFolders: {},
        userPerspectives: [],
        goalLevels: {},
        contents: [],
      }
    },
    created() {
        this.loadUserPerspectives();
    },
    watch: {
        selectedUser: {
            handler(){
                this.markdownContentFolders = {}
                this.loadUserPerspectives();
            },
            deep:true
        },
        tab(newVal) {
            // 고정 탭 선택시 라우트 변경 방지
            if (newVal === 0) {
                this.$router.push(`/get-the-guide/reference-architecture`);
                return;
            }

            // 기존 탭들에 대한 처리
            const tabName = this.items[newVal - 1].tab_en; // 인덱스 조정
            this.selectedUser.perspectives.forEach(p => {
                if (p.name_en === tabName) {
                    this.$router.push(`/get-the-guide/${tabName}/level${p.goalLevel}`);
                }
            });
        }
    },
    methods: {
        updateValues() {
            const decomposition = this.selectedUser.perspectives.find(p => p.name_en === 'decomposition' && p.goalLevel === 3);
            const data = this.selectedUser.perspectives.find(p => p.name_en === 'data' && p.goalLevel === 3);

            if (decomposition && data) {
                this.messagingChannel = true;
                this.infra.kubernetes = true;
                this.infra.vm = true;
            }
        },
        async getAllMarkdownContentFolders() {
            try {
                const response = await axios.get(`https://api.github.com/repos/msa-ez/cloud-iq/contents/get-the-guide-md`);
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
                    const fileResponse = await axios.get(`https://raw.githubusercontent.com/msa-ez/cloud-iq/main/get-the-guide-md/${folderName}/level${i}.md`);
                    const markdownContent = marked(fileResponse.data);
                    folderFiles[i] =  markdownContent ;
                }
                this.markdownContentFolders[folderName] = folderFiles
            } catch (error) {
                console.error(`Failed to load contents for folder ${folderName}`, error);
            }
        },
        loadUserPerspectives() {
            if (this.selectedUser && this.selectedUser.perspectives) {
                this.selectedUser.perspectives.forEach(p =>{
                    this.goalLevels[p.name_en] = p.goalLevel
                });
                this.getAllMarkdownContentFolders()
            }
        }
    },
}
</script>
<style>
.tab-title {
    font-size: 16px;
    font-weight: 700;
}
</style>