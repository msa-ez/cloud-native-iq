<template>
    <div>
        <v-list v-if="openEditProfile"
            style="position: absolute; left:0px; top:0px; height:100vh; z-index:999;"
        >
            <v-list-group
                v-for="(profile, index) in profiles"
                :key="profile.name"
                no-action
                @mouseover="hoverProfileIndex = index"
                @mouseleave="hoverProfileIndex = null"
                @click="selectProfile(profile.name)"
            >
                <template v-slot:activator>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title >{{ profile.name }}</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-row v-if="isEditingProfile == true && editingIndex == index"
                                style="padding-top:10px;"
                            >
                                <v-text-field class="profile-input-field"
                                    label="프로필 입력"
                                    v-model="newProfile.name"
                                    :rules="newProfile.nameRules"
                                    required
                                ></v-text-field>
                                <v-btn @click="updateProfile()"
                                    color="green"
                                    icon
                                    :disabled="!checkModified()"
                                >
                                    <Icon icon="fluent:people-edit-20-regular" width="20" height="20"/>
                                </v-btn>
                                
                                <v-btn @click="isEditingClose()"
                                    icon
                                >
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </v-row>
                            <v-row v-else class="ma-0 pa-0" style="margin-left:30px !important;">
                                <v-spacer></v-spacer>
                                <div v-if="hoverProfileIndex === index"> 
                                    <v-btn icon @click.stop="editProfile(index)">
                                        <v-icon small>mdi-pencil</v-icon>
                                    </v-btn>
                                    <v-btn icon @click.stop="openDeleteProfileDialog(profile ,index)">
                                        <v-icon color="red" small>mdi-delete</v-icon>
                                    </v-btn>
                                </div>
                            </v-row>
                        </v-list-item-action>
                    </v-list-item>
                </template>

                <v-list-item
                    v-for="(user, index) in profile.users"
                    @mouseover="hoverUserIndex = index"
                    @mouseleave="hoverUserIndex = null"
                    :key="user.name"
                    link
                    @click="selectUser(user.name)"
                >
                    <v-row class="ma-0 pa-0 d-flex align-center">
                        <div>
                            <v-list-item-title>{{ user.name }}</v-list-item-title>
                        </div>
                        <v-spacer></v-spacer>
                        <v-row class="ma-0 pa-0 d-flex align-center"
                            v-if="isEditingUser == true && editingIndex == index"
                        >
                            <v-text-field class="profile-input-field"
                            style="margin-left:20px;"
                                label="이름 입력"
                                v-model="newUser.name"
                                :rules="newUser.nameRules"
                                required
                            ></v-text-field>
                            <div>
                                <v-btn @click="updateProfile()"
                                    color="green"
                                    icon
                                    :disabled="!checkModified()"
                                >
                                    <Icon icon="fluent:person-edit-20-regular" width="20" height="20"/>
                                </v-btn>
                                <v-btn @click="isEditingClose()"
                                    icon
                                >
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </div>
                        </v-row>
                        <div v-else-if="hoverUserIndex === index" style="margin-left:30px;">
                            <v-btn icon @click.stop="editUser(index)">
                                <v-icon small>mdi-pencil</v-icon>
                            </v-btn>
                            <v-btn icon @click.stop="openDeleteUserDialog(profile, user)">
                                <v-icon small color="red">mdi-delete</v-icon>
                            </v-btn>
                        </div>
                    </v-row>
                </v-list-item>
                <v-tooltip v-if="!addUserStatus" bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-card
                            @click="addUser()"
                            class="add-card"
                            outlined
                            v-bind="attrs"
                            v-on="on"
                        >
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <Icon icon="tdesign:user-add" width="20" height="20" style="color: #5EB2E8" />
                            </div>
                        </v-card>
                    </template>
                    <span>사용자 추가</span>
                </v-tooltip>
                <div v-else>
                    <v-row class="ma-0 pa-0 d-flex align-center">
                        <v-text-field
                            class="profile-input-field"
                            style="padding-left:35px;"
                            label="이름 입력"
                            v-model="newUser.name"
                            :rules="newUser.nameRules"
                            required
                        ></v-text-field>
                        <v-btn style="margin-top:10px;"
                            @click="registerProfile()"
                            color="primary"
                            icon
                            :disabled="!checkModified()"
                        >
                            <v-icon>mdi-account-plus</v-icon>
                        </v-btn>
                        <v-btn style="margin:10px 10px 0px 0px;"
                            @click="addUserStatus = false"
                            icon
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-row>
                </div>
            </v-list-group>
            <v-tooltip v-if="!addProfileStatus" bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-card
                        @click="addProfile()"
                        class="add-card"
                        outlined
                        v-bind="attrs"
                        v-on="on"
                    >
                        <div style="display: flex; justify-content: center; align-items: center;">
                            <Icon icon="ant-design:usergroup-add-outlined" width="20" height="20" style="color: #5EB2E8" />
                        </div>
                    </v-card>
                </template>
                <span>프로필 추가</span>
            </v-tooltip>
            <div v-else>
                <v-row class="ma-0 pa-0">
                    <v-text-field 
                        class="profile-input-field"
                        style="padding-left:35px;"
                        label="프로필 입력"
                        v-model="newProfile.name"
                        :rules="newProfile.nameRules"
                        required
                    ></v-text-field>
                    <v-btn style="margin-top:10px;"
                        @click="registerProfile()"
                        color="primary"
                        icon
                        :disabled="!checkModified()"
                    >
                        <Icon icon="ant-design:usergroup-add-outlined" width="20" height="20"/>
                    </v-btn>
                    <v-btn style="margin:10px 10px 0px 0px;"
                        @click="addProfileStatus = false"
                        icon
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-row>
            </div>
        </v-list>
        <v-dialog v-model="deleteDialog" max-width="400">
            <v-card
                style="padding:10px !important;"
            >
                <v-checkbox 
                    v-model="deleteConfirmed"
                    :label="deleteUserName ? `'${deleteProfileName} > ${deleteUserName}' 사용자를 삭제하시겠습니까?` : (deleteProfileName ? `'${deleteProfileName}' 프로필을 삭제하시겠습니까?` : '등록된 프로필이나 사용자가 없습니다.')"
                    class="ma-0 pa-0"
                    :disabled="!deleteProfileName && !deleteUserName"
                ></v-checkbox>
                <v-card-actions class="ma-0 pa-0">
                    <v-spacer></v-spacer>
                    <div>
                        <v-btn @click="deleteProfile()"
                            color="red darken-1"
                            text
                            :disabled="!deleteConfirmed"
                        >삭제</v-btn>
                    </div>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!-- <div>
            <v-dialog v-model="deleteDialog"
                persistent
                max-width="400"
            >
                <v-card class="pa-5">
                    <v-row>
                        <v-card-title class="pa-0">프로필 관리</v-card-title>
                        <v-spacer></v-spacer>
                        <v-btn @click="closedeleteDialog()"
                            style="margin-left: 10px;"
                            icon
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-row>
                    <v-form @submit.prevent="registerProfile()">
                        <v-text-field class="profile-input-field"
                            label="프로필 입력"
                            v-model="newProfile.name"
                            :rules="newProfile.nameRules"
                            required
                        ></v-text-field>
                        <v-text-field class="profile-input-field"
                            label="이름 입력"
                            v-model="newUser.name"
                            :rules="newUser.nameRules"
                            required
                        ></v-text-field>
                    </v-form>
                    <v-row align="center">
                        <v-col 
                            cols="12"
                        >
                            <v-select
                                :items="profiles"
                                :item-text="profileDisplayText"
                                item-value="name"
                                label="프로필"
                                v-model="selectedProfile"
                                @change="handleProfileChange"
                            ></v-select>
                        </v-col>
                        <v-col 
                            cols="12"
                        >
                            <v-select
                                :items="selectedProfileUsers"
                                :item-text="userDisplayText"
                                item-value="name"
                                label="이름"
                                v-model="selectedUser"
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-checkbox 
                        v-model="deleteConfirmed"
                        :label="selectedUser ? `'${selectedUser}' 사용자를 삭제하시겠습니까?` : (selectedProfile ? `'${selectedProfile}' 프로필을 삭제하시겠습니까?` : '등록된 프로필이나 사용자가 없습니다.')"
                        class="ma-0 pa-0"
                        :disabled="!selectedProfile && !selectedUser"
                    ></v-checkbox>
                    <v-card-actions class="ma-0 pa-0">
                        <v-spacer></v-spacer>
                        <div>
                            <v-btn @click="deleteProfile()"
                                color="red darken-1"
                                text
                                :disabled="!deleteConfirmed"
                            >삭제</v-btn>
                            <v-btn @click="updateProfile()"
                                color="green"
                                text
                                :disabled="!checkModified()"
                            >수정
                            </v-btn>
                            <v-btn @click="registerProfile()"
                                color="primary"
                                text
                                :disabled="!checkModified()"
                            >등록
                            </v-btn>
                        </div>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div> -->
        <Step v-if="selectedProfile"
            @saveProfiles="saveProfiles"
            :selectedProfile="profile"
            :chartData="chartData"
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
            deleteConfirmed: false,
            isEditingProfile: false,
            isEditingUser: false,
            addProfileStatus: false,
            addUserStatus: false,
            editingIndex: null,
            deleteDialog: false,
            hoverProfileIndex: null,
            hoverUserIndex: null,
            openEditProfile: false,
            deleteUserName: null,
            deleteProfileName: null,
            profiles: [],
            profile: [],
            newProfile: {
                name: '',
                nameRules: [
                    v => (v && v.trim() !== '') ? !this.isNameDuplicate(v) || '이미 등록된 프로필입니다.' : true
                ],
                perspectives: [],
                topics: [],
                users:[]
            },
            newUser: {
                name: '',
                nameRules: [
                    v => (v && v.trim() !== '') ? !this.isNameDuplicate(v) || '이미 등록된 이름입니다.' : true
                ],
                perspectives: [],
                topics: [],
            },
            chartData: null,
            selectedProfile: null,
            selectedUser: null
        }
    },
    mounted() {
        this.loadProfiles();
        // localStorage에서 선택된 프로필을 불러옵니다.
        const getProfileName = localStorage.getItem('selectedProfile');
        // localStorage에서 선택된 사용자를 불러옵니다.
        const getUserName = localStorage.getItem('selectedUser');
        
        if (getProfileName) {
            // localStorage에 저장된 프로필이 있다면, 해당 프로필을 선택합니다.
            this.selectedProfile = getProfileName;
        } else if (this.profiles.length > 0) {
            // localStorage에 프로필이 없지만 profiles 배열에 프로필이 있다면, 첫 번째 프로필을 선택합니다.
            this.selectedProfile = this.profiles[0].name;
        } else {
            // 프로필이 없는 경우
            this.selectedProfile = null;
        }
        // localStorage에 저장된 사용자가 있다면, 해당 사용자를 선택합니다.
        if (getUserName) {
            this.selectedUser = getUserName;
        } else {
            // 사용자 정보가 없는 경우
            this.selectedUser = null;
        }
        this.$eventBus.$on('openEditProfile', () => {
            this.openEditProfile = !this.openEditProfile; // 이벤트 발생 시 상태 토글
        });
    },
    computed: {
    },
    watch: {
        selectedProfile: {
            handler(selectedProfile) {
                var me = this
                if(!selectedProfile)  return
                this.profile = this.profiles.find(profile => profile.name === selectedProfile);
                this.selectedProfileUsers = this.profile ? this.profile.users : [];
                
                // 하위에 등록된 유저가 있는 경우 로직
                if(this.profile.users.length > 0) {
                    this.initProfile();
                    this.profile.users.forEach(function(user) {
                        user.topics.forEach(function(userTopic, userTopicIndex){
                            userTopic.questions.forEach(function(userQuestion, userQuestionIndex){
                                me.profile.topics[userTopicIndex].questions[userQuestionIndex].value += (userQuestion.value/me.profile.users.length) 
                            })
                        })
                    });
                }
                this.chartData = this.profile;
                this.$eventBus.$emit('changeChartData')
            },
            deep: true, // 객체 내부까지 감시하려면 deep 옵션을 true로 설정합니다.
            immediate: true // 컴포넌트가 마운트될 때 핸들러를 즉시 실행합니다.
        },
        selectedUser(newValue) {
            if (newValue) {
                this.$store.dispatch('updateSelectedUser', newValue); // Vuex 스토어의 액션 호출
                let selectedProfileUser = this.profile.users.find(s => s.name == newValue)
                this.chartData = selectedProfileUser

            } else {
                this.$store.dispatch('updateSelectedUser', null);
            }
        }
    },
    methods: {
        initProfile() {
            this.profile.topics.forEach(function(chartDataTopic){
                chartDataTopic.questions.forEach(function(chartDataQuestion){
                    chartDataQuestion.value = 0;
                })
            });
        },
        addProfile() {
            this.addUserStatus = false
            this.addProfileStatus = true
            this.newUser.name = '';
            this.newProfile.name = '';
        },
        addUser() {
            this.addProfileStatus = false
            this.addUserStatus = true
            this.newUser.name = '';
            this.newProfile.name = '';
        },
        isEditingClose() {
            event.stopPropagation();
            this.isEditingProfile = false
            this.isEditingUser = false
        },
        checkModified() {
            if(this.newProfile.name.length == 0 && this.newUser.name.length == 0) {
                return false
            } else if( !this.isNameDuplicate(this.newProfile.name || this.newUser.name)) {
                return true
            }
        },
        handleProfileChange() {
            // 사용자가 프로필을 변경했을 때 실행될 로직
            this.selectedUser = null;
            // Vuex 스토어의 액션을 호출하여 selectedUser를 업데이트합니다.
            this.$store.dispatch('updateSelectedUser', null);
        },
        saveProfiles() {
            // 프로필을 저장한 후 Vuex 스토어의 상태를 업데이트합니다.
            localStorage.setItem('registeredProfiles', JSON.stringify(this.profiles));
        },
        loadProfiles() {
            const profiles = localStorage.getItem('registeredProfiles');
            this.profiles = profiles ? JSON.parse(profiles) : [];
            // 프로필이 비어 있는 경우 기본 프로필을 생성합니다.
            if (this.profiles.length === 0) {
                // 기본 프로필 생성
                let defaultProfile = {
                    name: 'cloudIq',
                    perspectives: JSON.parse(JSON.stringify(this.perspectives)),
                    topics: JSON.parse(JSON.stringify(this.topics)),
                    users: [],
                };
                this.profiles.push(defaultProfile);  // 기본 프로필을 프로필 배열에 추가합니다.
                this.selectedProfile = defaultProfile.name;  // 기본 프로필을 선택합니다.
                this.saveProfiles();  // 변경사항을 저장합니다.
            }
        },
        profileDisplayText(item) {
            return `${item.name}`;
        },
        userDisplayText(user) {
            return user.name;  // 사용자 객체에서 이름을 반환
        },
        registerProfile() {
            // 1. 새로운 프로필만 등록하는 경우
            if (this.newProfile.name && !this.newUser.name) {
                if (!this.isNameDuplicate(this.newProfile.name)) {
                    let newProfile = {
                        ...this.newProfile,
                        perspectives: JSON.parse(JSON.stringify(this.perspectives)),
                        topics: JSON.parse(JSON.stringify(this.topics)),
                        users: [],
                    };
                    this.profiles.push(newProfile);
                    this.saveProfiles();
                    this.selectedProfile = newProfile.name;
                }
            } 
            // 2. 새로운 프로필에 사용자도 함께 등록하는 경우
            else if (this.newProfile.name && this.newUser.name) {
                if (!this.isNameDuplicate(this.newProfile.name)) {
                    let newProfile = {
                        ...this.newProfile,
                        perspectives: JSON.parse(JSON.stringify(this.perspectives)),
                        topics: JSON.parse(JSON.stringify(this.topics)),
                        users: [
                            {
                                name: this.newUser.name,
                                perspectives: JSON.parse(JSON.stringify(this.perspectives)),
                                topics: JSON.parse(JSON.stringify(this.topics)),
                            }
                        ],
                    };
                    this.profiles.push(newProfile);
                    this.saveProfiles();
                    this.selectedProfile = newProfile.name;
                    if (newProfile.users.length > 0) {
                        const lastUser = newProfile.users[newProfile.users.length - 1];
                        this.selectedUser = lastUser.name;
                    }
                }
            } 
            // 3. 선택된 프로필에 새로운 사용자를 추가하는 경우
            else if (!this.newProfile.name && this.selectedProfile && this.newUser.name) {
                let profile = this.profiles.find(profile => profile.name === this.selectedProfile);
                if (profile && !this.isNameDuplicate(this.newUser.name)) {
                    if (!profile.users) {
                        profile.users = [];
                    }
                    let newUser = {
                        name: this.newUser.name,
                        perspectives: JSON.parse(JSON.stringify(this.perspectives)),
                        topics: JSON.parse(JSON.stringify(this.topics)),
                    };
                    profile.users.push(newUser);
                    this.saveProfiles();
                    this.selectedUser = newUser.name;
                }
            }
            this.addProfileStatus = false
            this.newUser.name = '';
            this.newProfile.name = '';
            
        },
        updateProfile() {
            // 프로필 편집 상태인 경우
            if (this.isEditingProfile) {
                let profile = this.profiles[this.editingIndex];
                if (profile && this.newProfile.name.trim() && !this.isNameDuplicate(this.newProfile.name, true)) {
                    profile.name = this.newProfile.name;
                    this.selectedProfile = this.newProfile.name; // 업데이트된 프로필 이름으로 selectedProfile 업데이트
                }
            }
            // 사용자 편집 상태인 경우
            else if (this.isEditingUser && this.selectedProfile) {
                let profile = this.profiles.find(profile => profile.name === this.selectedProfile);
                if (profile) {
                    let user = profile.users[this.editingIndex];
                    if (user && this.newUser.name.trim() && !this.isNameDuplicate(this.newUser.name)) {
                        user.name = this.newUser.name;
                        this.selectedUser = this.newUser.name; // 업데이트된 사용자 이름으로 selectedUser 업데이트
                    }
                }
            }
            this.saveProfiles(); // 변경사항 저장
            this.isEditingProfile = false;
            this.isEditingUser = false;
        },
        deleteProfile() {
            if (this.deleteConfirmed) {
                if (this.deleteUserName) {
                    // 선택된 사용자를 포함하는 프로필 찾기
                    let profileIndex = this.profiles.findIndex(profile => profile.name === this.deleteProfileName);
                    if (profileIndex !== -1) {
                        // 프로필에서 해당 사용자 삭제
                        let userIndex = this.profiles[profileIndex].users.findIndex(user => user.name === this.deleteUserName);
                        if (userIndex !== -1) {
                            this.profiles[profileIndex].users.splice(userIndex, 1);
                            // 남아 있는 사용자 중 마지막 사용자를 선택
                            if (this.profiles[profileIndex].users.length > 0) {
                                const lastUser = this.profiles[profileIndex].users[this.profiles[profileIndex].users.length - 1];
                                this.selectedUser = lastUser.name;
                            } else {
                                this.selectedUser = null; // 사용자가 더 이상 없으면 null로 설정
                            }
                        }
                    }
                } else {
                    // 프로필 삭제 로직
                    this.profiles = this.profiles.filter(profile => profile.name !== this.deleteProfileName);
                    if (this.profiles.length > 0) {
                        const lastProfile = this.profiles[this.profiles.length - 1];
                        this.selectedProfile = lastProfile.name;
                    } else {
                        this.selectedProfile = null;
                    }
                }
                this.saveProfiles(); // 변경사항 로컬 스토리지에 저장
                this.deleteConfirmed = false; // 체크박스 상태 초기화
                this.deleteDialog = false; // 체크박스 상태 초기화
                this.deleteProfileName = null;
                this.deleteUserName = null;
            }
        },
        closedeleteDialog() {
            this.deleteConfirmed = false;
            this.deleteDialog = false;
        },
        openDeleteProfileDialog(profile) {
            this.deleteDialog = true;
            this.deleteProfileName = profile.name
        },
        openDeleteUserDialog(profile, user) {
            this.deleteDialog = true;
            this.deleteProfileName = profile.name
            this.deleteUserName = user.name
        },
        editProfile(index) {
            event.stopPropagation();
            this.editingIndex = index
            this.isEditingUser = false
            this.isEditingProfile = true
            this.newProfile.name = '';
            this.newUser.name = '';
        },
        editUser(index) {
            event.stopPropagation();
            this.editingIndex = index
            this.isEditingProfile = false
            this.isEditingUser = true
            this.newUser.name = '';
            this.newProfile.name = '';
        },
        isNameDuplicate(name) {
            // 새로운 프로필을 등록하는 경우, 프로필 이름의 중복을 검사합니다.
            if (this.newProfile.name) {
                return this.profiles.some(profile => profile.name === name);
            }
            
            // 새로운 사용자를 기존 프로필에 추가하는 경우, 선택된 프로필 내에서 사용자 이름의 중복을 검사합니다.
            if (!this.selectedProfile || !name) return false;
            const profile = this.profiles.find(p => p.name === this.selectedProfile);
            return profile && Array.isArray(profile.users) && profile.users.some(user => user.name === name);
        },
        selectProfile(profile) {
            // Vuex 스토어의 액션을 디스패치합니다.
            this.selectedProfile = ''; // 먼저 빈 값으로 설정
            this.$nextTick(() => {
                this.selectedProfile = profile; // 다음 틱에서 실제 값을 할당
                this.selectedUser = null;
                this.$store.dispatch('updateSelectedProfile', profile);
            });
        },
        selectUser(userName) {
            this.selectedUser = userName;
            // 필요한 경우 Vuex 스토어를 업데이트하거나, 추가적인 작업을 수행
            this.$store.dispatch('updateSelectedUser', userName);
        },
    },
    beforeDestroy() {
        this.$eventBus.$off('openEditProfile'); // 컴포넌트 파괴 시 이벤트 수신 해제
    },
}
</script>
<style>
.add-card {
    padding: 5px;
    margin:5px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px !important;
}
.profile-input-field .v-messages__message {
    line-height: 18px;
}
</style>
  