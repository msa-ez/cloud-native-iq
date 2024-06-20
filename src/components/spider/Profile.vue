<template>
    <div>
        <!-- <v-treeview
            v-model="activeProfile"
            :items="profiles"
            item-children="users"
            style="position: absolute; right:0px; top:0px; height:100vh; z-index:999; border-left:solid 1px gray; overflow: auto;background-color:white;"
        >
            <template v-slot:append="{ index, item  }">
                    <div>Index: {{ index }}, Item name: {{ item.name }}</div>
                <v-btn icon @click.stop="editProfile(index, item.name)">
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon @click.stop="deleteItem(index)">
                    <v-icon color="red">mdi-delete</v-icon>
                </v-btn>
                <v-text-field
                    v-if="isEditingProfile && editingIndex === index"
                    @keyup.enter="updateProfile(index)"
                    class="profile-input-field"
                    label="그룹 수정"
                    v-model="newProfile.name"
                    :rules="newProfile.nameRules"
                    required
                ></v-text-field>
                <v-btn @click="isEditingClose(index)"
                    icon
                >
                    <v-icon small>mdi-close</v-icon>
                </v-btn>
            </template>
        </v-treeview> -->
        <v-list v-if="openEditProfile"
            style="position: absolute; right:0px; top:0px; height:calc(100vh - 64px); z-index:999; border-left:solid 1px gray; overflow: auto;"
        >
            <v-row class="ma-0 pa-0">
                <v-spacer></v-spacer>
                <v-btn @click="openEditProfile = false"
                    small icon
                    style="margin-right:10px;"
                >
                    <v-icon small>mdi-close</v-icon>
                </v-btn>
            </v-row>
            <v-list-group
                v-for="(profile, index) in profiles"
                :key="profile.name"
                no-action
                @click="selectProfile(profile.name)"
                v-model="expandedGroup[index]"
            >
                <template v-slot:activator>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title v-if="!isEditingProfile || editingIndex !== index">{{ profile.name }}</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-row v-if="isEditingProfile == true && editingIndex == index"
                                style="padding-top:10px;"
                            >
                                <v-text-field @keyup.enter="updateProfile()"
                                    class="profile-input-field"
                                    label="그룹 수정"
                                    v-model="newProfile.name"
                                    :rules="newProfile.nameRules"
                                    required
                                    style="margin-left:-20px;"
                                ></v-text-field>
                                <v-btn @click="isEditingClose()"
                                    icon
                                >
                                    <v-icon small>mdi-close</v-icon>
                                </v-btn>
                            </v-row>
                            <v-row v-else class="ma-0 pa-0" style="margin-left:30px !important;">
                                <v-spacer></v-spacer>
                                <div>
                                    <v-btn icon @click.stop="editProfile(index, profile.name)">
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
                    :key="user.name"
                    link
                    @click="selectUser(user.name)"
                >
                    <v-row class="ma-0 pa-0 d-flex align-center">
                        <div>
                            <v-list-item-title v-if="!isEditingUser || editingIndex !== index">{{ user.name }}</v-list-item-title>
                        </div>
                        <v-spacer></v-spacer>
                        <v-row class="ma-0 pa-0 d-flex align-center"
                            v-if="isEditingUser && editingIndex == index"
                        >
                            <v-text-field class="profile-input-field"
                                style="margin-left:-50px;"
                                label="프로필 수정"
                                v-model="newUser.name"
                                :rules="newUser.nameRules"
                                required
                                @keyup.enter="updateProfile()"
                            ></v-text-field>
                            <div>
                                <v-btn @click="isEditingClose()"
                                    icon
                                >
                                    <v-icon small>mdi-close</v-icon>
                                </v-btn>
                            </div>
                        </v-row>
                        <div v-else style="margin-left:30px;">
                            <v-btn icon @click.stop="editUser(index, user.name)">
                                <v-icon small>mdi-pencil</v-icon>
                            </v-btn>
                            <v-btn icon @click.stop="openDeleteUserDialog(profile, user)">
                                <v-icon small color="red">mdi-delete</v-icon>
                            </v-btn>
                        </div>
                    </v-row>
                </v-list-item>
                <div style="padding:0px 0px 0px 60px;">
                    <v-card v-if="!addUserStatus"
                        @click.stop="addUser(index, profile.name)"
                        class="add-card"
                        outlined
                    >
                        <div style="display: flex; justify-content: center; align-items: center;">
                            프로필 추가
                        </div>
                    </v-card>
                </div>
                    
                <div v-if="addUserStatus">
                    <v-row class="ma-0 pa-0 d-flex align-center" style="padding:0px 5px 0px 73px !important;">
                        <v-text-field @keyup.enter="registerProfile()"
                            class="profile-input-field"
                            label="프로필 입력"
                            v-model="newUser.name"
                            :rules="newUser.nameRules"
                            required
                        ></v-text-field>
                        <v-btn style="margin:10px 10px 0px 0px;"
                            @click="addUserStatus = false"
                            icon
                        >
                            <v-icon small>mdi-close</v-icon>
                        </v-btn>
                    </v-row>
                </div>
            </v-list-group>
            <div v-if="!addProfileStatus" style="padding:0px 0px 0px 22px;">
                <v-card
                    @click.stop="addProfile()"
                    class="add-card"
                    outlined
                >
                    <div style="display: flex; justify-content: center; align-items: center;">
                        그룹 추가
                    </div>
                </v-card>
            </div>
            <div v-else>
                <v-row class="ma-0 pa-0">
                    <v-text-field @keyup.enter="registerProfile()"
                        class="profile-input-field"
                        style="padding-left:35px;"
                        label="그룹 입력"
                        v-model="newProfile.name"
                        :rules="newProfile.nameRules"
                        required
                    ></v-text-field>
                    <v-btn style="margin:10px 10px 0px 0px;"
                        @click.stop="addProfileStatus = false"
                        icon
                    >
                        <v-icon small>mdi-close</v-icon>
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
                    :label="deleteUserName ? `'${deleteProfileName} > ${deleteUserName}' 프로필를 삭제하시겠습니까?` : (deleteProfileName ? `'${deleteProfileName}' 그룹을 삭제하시겠습니까?` : '등록된 그룹이나 프로필가 없습니다.')"
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
            openEditProfile: false,
            deleteUserName: null,
            deleteProfileName: null,
            profiles: [],
            profile: [],
            newProfile: {
                name: '',
                nameRules: [
                    v => (v && v.trim() !== '') ? !this.isNameDuplicate(v) || '이미 등록된 그룹입니다.' : true
                ],
                perspectives: [],
                topics: [],
                users:[]
            },
            newUser: {
                name: '',
                nameRules: [
                    v => (v && v.trim() !== '') ? !this.isNameDuplicate(v) || '이미 등록된 프로필입니다.' : true
                ],
                perspectives: [],
                topics: [],
            },
            chartData: null,
            selectedProfile: null,
            selectedUser: null,
            expandedGroup: {},
        }
    },
    mounted() {
        
        this.loadProfiles();
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
            // 프로필가 그룹을 변경했을 때 실행될 로직
            this.selectedUser = null;
            // Vuex 스토어의 액션을 호출하여 selectedUser를 업데이트합니다.
            this.$store.dispatch('updateSelectedUser', null);
        },
        saveProfiles() {
            // 그룹을 저장한 후 Vuex 스토어의 상태를 업데이트합니다.
            localStorage.setItem('registeredProfiles', JSON.stringify(this.profiles));
        },
        loadProfiles() {
            const getProfileName = localStorage.getItem('selectedProfile');
            const getUserName = localStorage.getItem('selectedUser');
            const profiles = localStorage.getItem('registeredProfiles');
            
            if (getProfileName) {
                this.selectedProfile = getProfileName;
            } else if (this.profiles.length > 0) {
                this.selectedProfile = this.profiles[0].name;
            } else {
                this.selectedProfile = null;
            }
            if (getUserName) {
                this.selectedUser = getUserName;
            } else {
                this.selectedUser = null;
            }
            this.profiles = profiles ? JSON.parse(profiles) : [];
            // 그룹이 비어 있는 경우 기본 그룹을 생성하고 선택합니다.
            if (this.profiles.length === 0) {
                let defaultProfile = {
                    name: 'cloudIq',
                    perspectives: JSON.parse(JSON.stringify(this.perspectives)),
                    topics: JSON.parse(JSON.stringify(this.topics)),
                    users: [],
                };
                this.profiles.push(defaultProfile);  // 기본 그룹을 그룹 배열에 추가합니다.
                this.saveProfiles();  // 변경사항을 저장합니다.
                // 기본 그룹을 localStorage에 저장합니다.
                localStorage.setItem('selectedProfile', defaultProfile.name);
                // Vuex 스토어를 업데이트합니다.
                this.$store.dispatch('updateSelectedProfile', defaultProfile.name);
                // 컴포넌트의 상태를 업데이트합니다.
                this.selectedProfile = defaultProfile.name;
            } else {
                // 그룹이 이미 존재하는 경우, 첫 번째 그룹을 선택합니다.
                if (!this.selectedProfile && this.profiles.length > 0) {
                    this.selectedProfile = this.profiles[0].name;
                    localStorage.setItem('selectedProfile', this.selectedProfile);
                    this.$store.dispatch('updateSelectedProfile', this.selectedProfile);
                }
            }
        },
        profileDisplayText(item) {
            return `${item.name}`;
        },
        userDisplayText(user) {
            return user.name;  // 프로필 객체에서 프로필을 반환
        },
        registerProfile() {
            // 1. 새로운 그룹만 등록하는 경우
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
            // 2. 새로운 그룹에 프로필도 함께 등록하는 경우
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
            // 3. 선택된 그룹에 새로운 프로필를 추가하는 경우
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
            // 그룹 편집 상태인 경우
            if (this.isEditingProfile) {
                let profile = this.profiles[this.editingIndex];
                if (profile && this.newProfile.name.trim() && !this.isNameDuplicate(this.newProfile.name, true)) {
                    profile.name = this.newProfile.name;
                    this.selectedProfile = this.newProfile.name; // 업데이트된 그룹 프로필으로 selectedProfile 업데이트
                }
            }
            // 프로필 편집 상태인 경우
            else if (this.isEditingUser && this.selectedProfile) {
                let profile = this.profiles.find(profile => profile.name === this.selectedProfile);
                if (profile) {
                    let user = profile.users[this.editingIndex];
                    if (user && this.newUser.name.trim() && !this.isNameDuplicate(this.newUser.name)) {
                        user.name = this.newUser.name;
                        this.selectedUser = this.newUser.name; // 업데이트된 프로필 프로필으로 selectedUser 업데이트
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
                    // 선택된 프로필를 포함하는 그룹 찾기
                    let profileIndex = this.profiles.findIndex(profile => profile.name === this.deleteProfileName);
                    if (profileIndex !== -1) {
                        // 그룹에서 해당 프로필 삭제
                        let userIndex = this.profiles[profileIndex].users.findIndex(user => user.name === this.deleteUserName);
                        if (userIndex !== -1) {
                            this.profiles[profileIndex].users.splice(userIndex, 1);
                            // 남아 있는 프로필 중 마지막 프로필를 선택
                            if (this.profiles[profileIndex].users.length > 0) {
                                const lastUser = this.profiles[profileIndex].users[this.profiles[profileIndex].users.length - 1];
                                this.selectedUser = lastUser.name;
                            } else {
                                this.selectedUser = null; // 프로필가 더 이상 없으면 null로 설정
                            }
                        }
                    }
                } else {
                    // 그룹 삭제 로직
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
        addProfile() {
            this.addUserStatus = false
            this.addProfileStatus = true
            this.newUser.name = '';
            this.newProfile.name = '';
        },
        addUser(index, profile) {
            this.addProfileStatus = false;
            this.addUserStatus = true;
            this.newUser.name = '';
            this.newProfile.name = '';
            // 특정 인덱스의 그룹을 확장합니다.
            this.$set(this.expandedGroup, index, true);
            this.selectedProfile = profile;
            // 로컬 스토리지에 selectedProfile 업데이트
            localStorage.setItem('selectedProfile', this.selectedProfile);
            this.$store.dispatch('updateSelectedProfile', profile);

        },
        editProfile(index, groupName) {
            event.stopPropagation();
            this.editingIndex = index
            this.isEditingUser = false
            this.isEditingProfile = true
            this.newProfile.name = groupName;
            this.newUser.name = '';
            this.addUserStatus = false
            this.addProfileStatus = false
        },
        editUser(index, userName) {
            event.stopPropagation(); 
            this.editingIndex = index
            this.isEditingProfile = false
            this.isEditingUser = true
            this.newUser.name = userName;
            this.newProfile.name = '';
            this.addUserStatus = false
            this.addProfileStatus = false
        },
        isNameDuplicate(name) {
            // 새로운 그룹을 등록하는 경우, 그룹 프로필의 중복을 검사합니다.
            if (this.newProfile.name) {
                return this.profiles.some(profile => profile.name === name);
            }
            
            // 새로운 프로필를 기존 그룹에 추가하는 경우, 선택된 그룹 내에서 프로필 프로필의 중복을 검사합니다.
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
            this.addUserStatus = false;
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
  