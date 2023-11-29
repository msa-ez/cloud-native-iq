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

        <v-tabs-items v-model="tab" class="guide-box">
            <v-tab-item
                v-for="item in items"
                :key="item.tab"
            >
                <v-card flat style="padding:20px;">
                    <div v-if="goalLevels[item.tab_en] > 0 && Object.keys(markdownContentFolders).length > 0"
                        v-html="markdownContentFolders[item.tab_en][goalLevels[item.tab_en]]"
                    ></div>
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
        selectedUser:{
            handler(){
                this.markdownContentFolders = {}
                this.loadUserPerspectives();
            },
            deep:true
        },
    },
    methods: {
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