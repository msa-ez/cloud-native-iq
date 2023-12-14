<template>
    <div>
        <div>
            <div>
                <h2>프로필 선택/등록</h2>
                <v-row align="center">
                    <v-col cols="2">
                        <v-select
                            :items="profiles"
                            :item-text="profileDisplayText"
                            item-value="name"
                            label="프로필 선택"
                            v-model="selectedProfile"
                            class="ml10"
                        ></v-select>
                    </v-col>
                </v-row>
            </div>
        
            <!-- 프로플 추가 다이얼로그 -->
            <v-dialog v-model="profileDialog"
                persistent
                max-width="300"
            >
                <v-card width="500">
                    <v-card-title>프로필 등록</v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-form @submit.prevent="registerProfile">
                                <v-text-field class="profile-input-field"
                                    label="프로필"
                                    v-model="newProfile.name"
                                    :rules="newProfile.nameRules"
                                    required
                                ></v-text-field>
                            </v-form>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <div>
                            <v-btn @click="closeProfileDialog"
                                style="margin-left: 10px;"
                                text
                            >취소
                            </v-btn>
                            <v-btn @click="registerProfile"
                                color="primary"
                                text
                                :disabled="isNameDuplicate(newProfile.name)"
                            >등록
                            </v-btn>
                        </div>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <!-- 프로필 삭제 다이얼로그 -->
            <v-dialog v-model="deleteDialog" persistent max-width="300px">
                <v-card>
                    <v-card-title class="headline">프로필 삭제 확인</v-card-title>
                    <v-card-text>
                        "{{ selectedProfile }}" 프로필을 삭제하시겠습니까?
                        <v-checkbox v-model="deleteConfirmed" label="확인"></v-checkbox>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="deleteDialog = false"
                            text
                        >취소
                        </v-btn>
                        <v-btn @click="deleteProfile()"
                            color="red darken-1"
                            text
                            :disabled="!deleteConfirmed"
                        >삭제</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
        <Step v-if="selectedProfile"
            @saveProfiles="saveProfiles"
            :selectedProfile="profile"
        />
    </div>
</template>

<script>
import Step from './step/Step.vue';
import AssessmentData from './step/AssessmentData2.js';
import GoalSettingData from './step/GoalSettingData2.js';

export default {
    mixins: [
        AssessmentData,
        GoalSettingData
    ],
    components: {
        Step
    },
    data() {
        return {
            deleteDialog: false,
            deleteConfirmed: false,
            profileDialog: false,
            profiles: [],
            profile: [],
            newProfile: {
                name: '',
                nameRules: [
                    v => !!v || '프로필을 입력해 주세요.',
                    v => !this.isNameDuplicate(v) || '이미 등록된 프로필입니다.'
                ],
                perspectives: [],
                topics: [],
            },
            selectedProfile: null,
        }
    },
    mounted() {
        if (this.profiles.length > 0) {
        this.selectedProfile = this.profiles[0].name;
    } else {
        this.selectedProfile = null;
    }
        this.$eventBus.$on('addProfile', this.openAddProfile);
        this.$eventBus.$on('deleteProfile', this.openDeleteProfile);
    },
    created() {
        this.loadProfiles();
    },
    watch: {
        selectedProfile: {
            handler(selectedProfile) {
                this.profile = this.profiles.find(profile => profile.name === selectedProfile);
            }
        }
    },
    methods: {
        saveProfiles() {
            localStorage.setItem('registeredProfiles', JSON.stringify(this.profiles));
        },
        loadProfiles() {
            const profiles = localStorage.getItem('registeredProfiles');
            if (profiles) {
                this.profiles = JSON.parse(profiles);
            }
        },
        profileDisplayText(item) {
            return `${item.name}`;
        },
        registerProfile() {
            if (!this.isNameDuplicate(this.newProfile.name)) {
                let newProfile = { ...this.newProfile };
                newProfile.perspectives = JSON.parse(JSON.stringify(this.perspectives));
                newProfile.topics = JSON.parse(JSON.stringify(this.topics));
                this.profiles.push(newProfile);
                this.profile = newProfile;
                this.selectedProfile = newProfile.name;
                this.saveProfiles();
                this.closeProfileDialog();
            }
        },
        deleteProfile() {
            if (this.deleteConfirmed) {
                this.profiles = this.profiles.filter(profile => profile.name !== this.selectedProfile);
                this.saveProfiles();
                if (this.selectedProfile === this.selectedProfile) {
                    this.selectedProfile = null;
                }
                this.deleteDialog = false;
                this.deleteConfirmed = false; // 체크박스 상태 초기화
            }
        },
        openDeleteProfile() {
            this.deleteDialog = true;
        },
        closeProfileDialog() {
            this.profileDialog = false;
            this.newProfile.name = '';
        },
        openAddProfile() {
            this.profileDialog = true;
        },
        isNameDuplicate(name) {
            return this.profiles.some(profile => profile.name === name);
        },
    },
    beforeDestroy() {
        this.$eventBus.$off('addProfile', this.openAddProfile);
        this.$eventBus.$off('deleteProfile', this.openDeleteProfile);
    }
}
</script>
<style>
.profile-box {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    /* border-bottom: 1px dashed #ccc; */
    /* border-radius: 5px;
    padding: 10px; */
    /* box-shadow: 0 4px 4px -4px #333; */
    /* box-shadow: 0 1px 2px 1px #ddd; */
}
.profile-box-in {
    width: 86%;
    display: flex;
    align-items: center;
}
.ml10, .btn-reg {
    margin-left: 10px;
}
.profile-input-field .v-messages__message {
    line-height: 18px;
}

@media only screen and (max-width:1440px) {
    .profile-box > h2 {
        font-size: 22px;
    }
    .profile-box-in {
        width: 82%;
    }
}
@media only screen and (max-width:1024px) {
    .profile-box-in {
        width: 75%;
    }
}
@media only screen and (max-width:750px) {
  .profile-box {
    height: 90px;
    display: block;
  }
  .profile-box-in {
    width: 100%;
  }
  .ml10 {
    margin: 0;
  }
  .btn-reg {
    margin-top: -10px;
  }
} 
</style>
  