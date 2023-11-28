<template>
    <div>
        <div v-for="folder in folders" :key="folder.name">
            <h2>{{ folder.name }}</h2>
            <div v-for="file in folder.files" :key="file.level">
                <h3>Level {{ file.level }}</h3>
                <div v-html="file.markdownContent"></div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import marked from 'marked';

export default {
    name: 'GetTheGuideMd',
    props: {
        selectedUser: null,
    },
    data() {
        return {
            folders: [], // 폴더 목록 및 각 폴더의 파일 목록
            userPerspectives: [], // 사용자의 perspectives
        };
    },
    methods: {
        async getAllFolders() {
            try {
                const response = await axios.get(`https://api.github.com/repos/msa-ez/cloud-iq/contents/get-the-guide-md`);
                const folders = response.data.filter(item => item.type === 'dir');
                for (const folder of folders) {
                    if (this.userPerspectives.includes(folder.name)) {
                        await this.getFolderContents(folder.name);
                    }
                }
            } catch (error) {
                console.error("Failed to load folders", error);
            }
        },
        async getFolderContents(folderName) {
            try {
                let folderFiles = [];
                for (let i = 1; i <= 4; i++) {
                    const fileResponse = await axios.get(`https://raw.githubusercontent.com/msa-ez/cloud-iq/main/get-the-guide-md/${folderName}/level${i}.md`);
                    const markdownContent = marked(fileResponse.data);
                    folderFiles.push({ level: i, markdownContent: markdownContent });
                }
                this.folders.push({ name: folderName, files: folderFiles });
            } catch (error) {
                console.error(`Failed to load contents for folder ${folderName}`, error);
            }
        },
        loadUserPerspectives() {
            const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers'));
            if (registeredUsers && registeredUsers.length > 0) {
                // 예시로 첫 번째 사용자의 perspectives를 사용합니다.
                this.userPerspectives = registeredUsers[0].perspectives.map(p => p.name_en);
            }
        }
    },
    mounted() {
        this.loadUserPerspectives();
        this.getAllFolders();
    }
};
</script>
