(function(e){function t(t){for(var a,r,i=t[0],o=t[1],l=t[2],u=0,h=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&h.push(n[r][0]),n[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);d&&d(t);while(h.length)h.shift()();return c.push.apply(c,l||[]),s()}function s(){for(var e,t=0;t<c.length;t++){for(var s=c[t],a=!0,i=1;i<s.length;i++){var o=s[i];0!==n[o]&&(a=!1)}a&&(c.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},n={app:0},c=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/msa-ez-cloudiq.github.io/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=o;c.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0b24":function(e,t,s){},"10c0":function(e,t,s){},"33db":function(e,t,s){"use strict";s("10c0")},"38c8":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);var a=s("2b0e"),n=function(){var e=this,t=e._self._c;return t("v-app",[t("div",{staticStyle:{height:"100vh"}},[t("v-app-bar",{staticStyle:{height:"60px"},attrs:{left:""}},[t("img",{staticStyle:{width:"100px",height:"100%","object-fit":"contain",cursor:"pointer","align-items":"left"},attrs:{src:"https://github.com/msa-ez/cloud-iq/assets/149130268/66649787-f394-49f9-8a72-8002997161c6"},on:{click:function(t){return e.goHome()}}})]),t("v-main",{staticStyle:{padding:"20px",height:"calc(100vh - 60px)"}},[t("router-view",{staticStyle:{height:"calc(100vh - 100px)"}})],1)],1)])},c=[],r={components:{},computed:{},data(){return{}},mounted(){document.title="cloudiq"},methods:{goHome(){this.$router.push("/")}}},i=r,o=s("2877"),l=Object(o["a"])(i,n,c,!1,null,null,null),d=l.exports,u=s("ce5b"),h=s.n(u);s("bf40");a["default"].use(h.a);var p=new h.a({}),v=s("8c4f"),m=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"flex-column"},[e._m(0),t("v-row",e._l(e.steps,(function(s,a){return t("v-col",{key:a},[t("v-card",{staticClass:"card-box",on:{click:function(t){return e.goToStep(s.path)}}},[t("h2",[e._v("Step. "+e._s(a+1))]),t("h1",[e._v(e._s(s.name))]),t("div",[e._v(e._s(s.name_en))])])],1)})),1),t("div",{staticClass:"flex-grow-1"}),t("v-row",{staticClass:"align-left justify-left",staticStyle:{height:"36px"}},[t("v-btn",{attrs:{text:""}},[e._v("전환가이드 전체 보기")]),t("v-divider",{staticClass:"mx-2",attrs:{vertical:""}}),t("v-btn",{attrs:{text:""}},[e._v("About")])],1)],1)])},x=[function(){var e=this,t=e._self._c;return t("div",{staticStyle:{"text-align":"center"}},[t("img",{staticClass:"main-logo2",attrs:{src:"https://github.com/msa-ez/cloud-iq/assets/149130268/1d4667a1-b6b7-47ef-a07c-94dc0da510b2"}}),t("div",{staticClass:"main-title"},[e._v("클라우드 네이티브 전환 가이드라인")]),t("div",[t("img",{attrs:{src:"https://github.com/msa-ez/cloud-iq/assets/149130268/66649787-f394-49f9-8a72-8002997161c6"}})])])}],g={components:{},computed:{},data(){return{steps:[{name:"현 수준 평가",name_en:"Assessment",path:"/user"},{name:"목표수준 설정",name_en:"Goal Setting",path:"/user"},{name:"전환 가이드",name_en:"Get the Guide",path:"/user"}]}},mounted(){},methods:{goToStep(e){this.$router.push(e)}}},b=g,k=(s("cf18"),Object(o["a"])(b,m,x,!1,null,null,null)),f=k.exports,C=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"user-box"},[t("h2",[e._v("프로필 선택/등록")]),t("div",{staticClass:"user-box-in"},[t("v-select",{staticClass:"ml10",attrs:{items:e.users,"item-text":e.userDisplayText,"item-value":"email",label:"사용자 선택"},model:{value:e.selectedUser,callback:function(t){e.selectedUser=t},expression:"selectedUser"}}),t("v-btn",{staticClass:"btn-reg",attrs:{color:"primary"},on:{click:function(t){e.showDialog=!0}}},[e._v("사용자 등록")])],1)]),t("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:e.showDialog,callback:function(t){e.showDialog=t},expression:"showDialog"}},[t("v-card",[t("v-card-title",[e._v("사용자 등록")]),t("v-card-text",[t("v-container",[t("v-form",{on:{submit:function(t){return t.preventDefault(),e.registerUser.apply(null,arguments)}}},[t("v-text-field",{staticClass:"user-input-field",staticStyle:{width:"300px"},attrs:{label:"이름",rules:e.newUser.nameRules,required:""},model:{value:e.newUser.name,callback:function(t){e.$set(e.newUser,"name",t)},expression:"newUser.name"}}),t("v-text-field",{staticClass:"user-input-field",attrs:{label:"이메일",rules:e.newUser.emailRules,required:""},model:{value:e.newUser.email,callback:function(t){e.$set(e.newUser,"email",t)},expression:"newUser.email"}})],1)],1)],1),t("v-card-actions",[t("v-spacer"),t("div",{staticClass:"reg-btn-box"},[t("v-btn",{attrs:{color:"primary"},on:{click:e.registerUser}},[e._v("등록")]),t("v-btn",{staticStyle:{"margin-left":"10px",border:"1px solid #ddd"},attrs:{text:""},on:{click:e.closeDialog}},[e._v("취소")])],1)],1)],1)],1),e.selectedUser?t("Step",{attrs:{selectedUser:e.user},on:{saveUsers:e.saveUsers}}):e._e()],1)},_=[],y=function(){var e=this,t=e._self._c;return t("div",[t("v-stepper",{staticClass:"box-wrap",model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}},[t("v-stepper-header",[e._l(e.components.length,(function(s){return[t("v-stepper-step",{key:s+"-step",attrs:{complete:e.e1>s,step:s,editable:""}},[t("div",[t("div",[e._v("Step "+e._s(s))]),t("div",[e._v(e._s(e.components[s-1].name))])])]),s!==e.components.length?t("v-divider",{key:s}):e._e()]}))],2),t("v-stepper-items",{staticClass:"step-box"},e._l(e.components.length,(function(s){return t("v-stepper-content",{key:s+"-content",attrs:{step:s}},[t("v-card",{staticClass:"mb-12 step-box-in"},[t(e.components[s-1].component,{tag:"component",attrs:{selectedUser:e.selectedUser},on:{saveUsers:e.saveUsers}})],1)],1)})),1)],1),t("div",{staticClass:"btn-box"},[t("v-btn",{staticClass:"btn-bot",attrs:{color:"primary"},on:{click:function(t){return e.nextStep(e.n)}}},[e._v("Next")]),t("v-btn",{staticClass:"btn-bot",attrs:{text:""}},[e._v("Cancel")])],1)],1)},U=[],S=function(){var e=this,t=e._self._c;return t("div",[t("v-row",[t("v-col",[t("div",{staticClass:"qna-box assess-box"},[e._l(e.selectedUser.perspectives,(function(s,a){return t("div",{key:a,staticStyle:{"margin-bottom":"40px"}},[t("h2",{staticStyle:{"margin-bottom":"20px"}},[e._v(e._s(s.name))]),e._l(s.levels,(function(a,n){return t("div",{key:n},[t("h3",{staticStyle:{"margin-bottom":"10px"}},[e._v("Level "+e._s(n+1))]),t("div",{staticStyle:{"margin-bottom":"20px"}},e._l(a.checkpoints,(function(n,c){return t("label",{key:c},[t("div",{staticStyle:{display:"flex","align-items":"start","margin-left":"15px","line-height":"1.7"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.checked,expression:"checkpoint.checked"}],staticStyle:{margin:"7px 5px 0 0"},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(n.checked)?e._i(n.checked,null)>-1:n.checked},on:{change:[function(t){var s=n.checked,a=t.target,c=!!a.checked;if(Array.isArray(s)){var r=null,i=e._i(s,r);a.checked?i<0&&e.$set(n,"checked",s.concat([r])):i>-1&&e.$set(n,"checked",s.slice(0,i).concat(s.slice(i+1)))}else e.$set(n,"checked",c)},function(t){return e.updateLevelCompletion(s,a)}]}}),t("span",{staticStyle:{color:"black"}},[e._v(e._s(n.text))])])])})),0)])}))],2)})),t("div",[t("h2",[e._v("Result")]),e.isAllLevelsCompleted?t("p",[e._v("All levels are completed!")]):t("p",[e._v("Some levels are not completed.")])])],2)]),t("v-col",[t("SpiderChart",{attrs:{perspectives:e.selectedUser.perspectives,chartWidth:e.chartWidth,chartHeight:e.chartHeight,chartCenterX:e.chartCenterX,chartCenterY:e.chartCenterY,chartRadius:e.chartRadius,labelOffset:e.labelOffset,maxDataValue:e.maxDataValue,pointRadius:e.pointRadius}})],1)],1)],1)},w=[],O=function(){var e=this,t=e._self._c;return t("div",{staticClass:"spider-box"},[t("svg",{attrs:{width:e.chartWidth,height:e.chartHeight}},[t("g",{attrs:{transform:`translate(${e.chartCenterX}, ${e.chartCenterY})`}},[e._l(e.perspectives,(function(s,a){return t("g",{key:`perspective-${a}₩`},[t("line",{attrs:{x1:0,y1:0,x2:e.getCoordinate(e.chartRadius,a,e.perspectives.length)[0],y2:e.getCoordinate(e.chartRadius,a,e.perspectives.length)[1],stroke:"lightgray"}}),t("text",{attrs:{x:e.getCoordinate(e.chartRadius+e.labelOffset,a,e.perspectives.length)[0],y:e.getCoordinate(e.chartRadius+e.labelOffset,a,e.perspectives.length)[1],"dominant-baseline":"middle","text-anchor":"middle"}},[e._v("\n\t\t\t\t\t\t"+e._s(s.name)+"\n\t\t\t\t\t")])])})),t("g",[t("polygon",{attrs:{points:e.getPolygonPoints(e.perspectives),fill:"rgba(75, 192, 192, 0.2)",stroke:"rgba(75, 192, 192, 1)"}}),t("polygon",{attrs:{points:e.getPolygonPointsGoal(e.perspectives),fill:"rgba(192, 75, 192, 0.1)",stroke:"rgba(192, 75, 192, 1)"}}),e._l(e.perspectives,(function(s,a){return t("g",[t("circle",{attrs:{cx:e.getCoordinateForCircle(s,a)[0],cy:e.getCoordinateForCircle(s,a)[1],r:e.pointRadius,fill:"rgba(75, 192, 192, 1)"}}),t("circle",{attrs:{cx:e.getCoordinateForCircleGoal(s,a)[0],cy:e.getCoordinateForCircleGoal(s,a)[1],r:e.pointRadius,fill:"rgba(192, 75, 192, 0.5)"}})])}))],2)],2)])])},L=[],R={name:"GoalSetting",mixins:[],props:{perspectives:Array,chartWidth:Number,chartHeight:Number,chartCenterX:Number,chartCenterY:Number,chartRadius:Number,labelOffset:Number,maxDataValue:Number,pointRadius:Number},comments:{},data(){return{}},mounted(){},watch:{},methods:{getDataLength(e){let t=0;return Object.keys(e).forEach(s=>{var a=e[s];a.details.forEach(e=>{t+=1})}),t},getCoordinateForCircle(e,t){const s=e.levels.filter(e=>e.isCompleted).length,a=this.chartRadius*(s/this.maxDataValue);return this.getCoordinate(a,t,this.perspectives.length)},getCoordinateForCircleGoal(e,t){const s=this.chartRadius*(e.goalLevel/this.maxDataValue);return this.getCoordinate(s,t,this.perspectives.length)},getCoordinate(e,t,s){const a=2*Math.PI*t/s-Math.PI/2,n=e*Math.cos(a),c=e*Math.sin(a);return[n,c]},getPolygonPoints(e){if(!e||0===e.length)return"";var t=e.map((t,s)=>{const a=t.levels.filter(e=>e.isCompleted).length,n=this.chartRadius*(a/this.maxDataValue);return this.getCoordinate(n,s,e.length).join(",")}).join(" ");return t},getPolygonPointsGoal(e){if(!e||0===e.length)return"";var t=e.map((t,s)=>{const a=this.chartRadius*(t.goalLevel/this.maxDataValue);return this.getCoordinate(a,s,e.length).join(",")}).join(" ");return t},checkAllLevelsCompletion(e){e.isCompleted=e.levels.every(e=>e.isCompleted);const t=this.chartData.labels.findIndex(t=>t===e.name);if(-1!==t){const s=e.levels.findIndex(e=>!e.isCompleted)-1,a=-1!==s?s+1:this.chartData.labels.length;this.chartData.data[t]=a,this.chartData.data2[t]=a}}}},D=R,P=(s("e0a3"),Object(o["a"])(D,O,L,!1,null,null,null)),A=P.exports,M={data(){return{isAllLevelsCompleted:!1,perspectives:[{name:"기능분해관점",name_en:"decomposition",goalLevel:0,levels:[{checkpoints:[{text:"비즈니스 역량 도출: 비즈니스 도메인을 분석하여 주요 기능과 유즈케이스를 도출하였는가?",checked:!1},{text:"기능 정의: 각 기능을 명확하게 정의하고 해당 기능의 범위를 결정하였는가?",checked:!1},{text:"유즈케이스 식별: 각 기능에 대한 유즈케이스를 식별하고 이를 단위로 분리하였는가?",checked:!1},{text:"의존성 분석: 각 기능과 유즈케이스 간의 의존성을 분석하여 적절한 분리 수준을 결정하였는가?",checked:!1}],isCompleted:!1},{checkpoints:[{text:"인터페이스 설계: 각 유즈케이스와 관련된 데이터에 대한 인터페이스를 정의하고 필요한 메소드와 매개변수를 명시하였는가?",checked:!1},{text:"데이터 액세스 계획: 각 유즈케이스에서 필요한 데이터 액세스 방법을 계획하고 이를 인터페이스에 반영하였는가?",checked:!1},{text:"보안 및 인증 고려: 서비스 간의 인터페이스에서 보안 및 인증 요구사항을 고려하여 액세스 제어 방법을 정의하였는가?",checked:!1},{text:"에러 핸들링 정의: 인터페이스에서 발생할 수 있는 예외 상황에 대한 처리 방법과 오류 핸들링 전략을 정의하였는가?",checked:!1}],isCompleted:!1},{checkpoints:[{text:"Ubiquitous language 정의: 각 bounded context에서 사용될 공통 언어와 용어를 정의하고 이를 문서화하였는가?",checked:!1},{text:"Boundary 정의: 각 bounded context의 경계를 명확하게 정의하고 외부에서의 커뮤니케이션 방식을 결정하였는가?",checked:!1},{text:"Anti-corruption layer 구현: bounded context 간의 통신을 관리하기 위해 Anti-corruption layer를 구현하고 외부 인터페이스 변환 및 데이터 변환을 수행하였는가?",checked:!1},{text:"도메인 이벤트 식별: bounded context 간에 필요한 도메인 이벤트를 식별하고 이를 통해 비동기적인 상호작용을 구현하였는가?",checked:!1}],isCompleted:!1},{checkpoints:[{text:"CQRS 모델 설계: 읽기와 쓰기를 위한 별도의 모델을 설계하고 도메인 이벤트를 활용하였는가?",checked:!1},{text:"이벤트 스토리지 구현: 도메인 이벤트를 저장하고 관리하기 위한 이벤트 스토리지를 구현하였는가?",checked:!1},{text:"이벤트 드리븐 아키텍처 구축: 도메인 이벤트를 기반으로 비즈니스 로직을 처리하는 이벤트 드리븐 아키텍처를 구축하였는가?",checked:!1},{text:"이벤트 버전 관리: 도메인 이벤트의 버전을 관리하고 업데이트할 수 있는 메커니즘을 도입하였는가?",checked:!1},{text:"이벤트 소싱 및 재생: 이벤트 소싱을 통해 시스템 상태를 재생하고 이벤트 스트림을 통해 상태 변경을 추적하였는가?",checked:!1}],isCompleted:!1}]},{name:"데이터 관점",name_en:"data",goalLevel:0,levels:[{checkpoints:[{text:"트랜잭션 관리: 각 마이크로서비스에서 ACID 기반의 트랜잭션을 유지하기 위한 방법과 프레임워크를 도입하였는가?",checked:!1},{text:"데이터 일관성 유지: Canonical Data Model을 도입하여 데이터의 일관성을 유지하고 데이터의 중복 및 모순을 방지하였는가?",checked:!1}],isCompleted:!1},{checkpoints:[{text:"개별 스키마 정의: 각 마이크로서비스는 자체적인 스키마를 가지고 있으며, 각 서비스의 데이터 구조와 필드 정의가 명확하게 이루어졌는가?",checked:!1},{text:"다중 엔터프라이즈 데이터 조정: 서비스 간의 다중 엔터프라이즈 데이터 저장소와의 트랜잭션 조정 방식을 정의하고 이를 구현하였는가?",checked:!1},{text:"데이터 일관성 유지: 데이터 조정 및 동기화 과정에서 데이터 일관성을 유지하기 위한 메커니즘을 도입하였는가?",checked:!1}],isCompleted:!1},{checkpoints:[{text:"분산 데이터 관리: 각 마이크로서비스는 완전히 분산된 데이터 관리를 수행하고 있으며, 필요에 따라 데이터의 파티셔닝, 샤딩, 복제 등을 구현하였는가?",checked:!1},{text:"폴리글랏 퍼시스턴스: 각 마이크로서비스는 자체적으로 다른 유형의 DBMS를 사용할 수 있는 폴리글랏 퍼시스턴스를 구현하였는가?",checked:!1},{text:"데이터 접근 및 관리: 각 마이크로서비스에서 필요한 데이터 액세스 방법을 선택하고 이를 효율적으로 관리하고 있으며, 성능과 확장성을 고려하였는가?",checked:!1}],isCompleted:!1},{checkpoints:[{text:"이벤트 기반 데이터 관리: 이벤트 중심 아키텍처를 구축하여 각 마이크로서비스 간의 데이터 흐름을 이벤트 기반으로 관리하고 있는가?",checked:!1},{text:"이벤트 소싱 및 커맨드-쿼리 분리(CQRS): 이벤트 소싱을 통해 시스템의 상태를 재생하고 커맨드와 쿼리를 분리하여 비동기적인 데이터 처리를 구현하였는가?",checked:!1},{text:"데이터 일관성 관리: 일시적으로 데이터에 일관성이 없는 상태가 존재할 수 있으며, 이를 일정 시간 내에 해소하여 다시 일관성을 충족시키는 메커니즘을 구현하였는가?",checked:!1}],isCompleted:!1}]},{name:"소프트웨어 아키텍처 관점",name_en:"sw-architecture",goalLevel:0,levels:[{checkpoints:[{text:"UI/UX: Server Side Rendering (SSR): 클라이언트 요청 시 서버에서 페이지를 완전히 렌더링하여 전송하는 방식을 사용합니다. 이를 통해 초기 로딩 속도를 개선하고 SEO에 더 유리한 환경을 제공할 수 있습니다.",checked:!1},{text:"Session-based 보안: 세션을 사용하여 사용자 인증 및 권한 부여를 처리합니다. 세션은 서버에 저장되어 클라이언트와의 상태를 유지하고 보안을 강화합니다.",checked:!1},{text:"단일 언어(예: Spring Framework): 특정 언어 또는 프레임워크에 의존하여 애플리케이션을 개발합니다. 예를 들어, Spring Framework를 사용하여 모노리틱 서비스를 구축하고 운영합니다.",checked:!1}],isCompleted:!1},{checkpoints:[{text:"UI/UX: Server Side Rendering (SSR): Level 1과 동일하게 서버에서 페이지를 렌더링하여 전송합니다.",checked:!1},{text:"Session Cluster 적용: 세션 클러스터링을 통해 여러 서버 간에 세션 정보를 공유하여 확장성과 가용성을 개선합니다.",checked:!1},{text:"MSA 지향 언어(예: Spring Boot): 마이크로서비스 아키텍처에 적합한 언어 또는 프레임워크를 선택하여 개발합니다. Spring Boot와 같은 경량화된 프레임워크를 사용하여 서비스를 독립적으로 구축하고 배포합니다.",checked:!1}],isCompleted:!1},{checkpoints:[{text:"UI/UX: Client Side Rendering (CSR): 클라이언트에서 페이지 렌더링을 수행하고 필요한 데이터만 서버로부터 요청하여 가져옵니다. 이를 통해 초기 로딩 시간을 줄이고 사용자 경험을 향상시킬 수 있습니다.",checked:!1},{text:"Token-based 보안, OAuth2: 세션 대신 토큰을 사용하여 사용자 인증과 권한 부여를 처리합니다. OAuth2와 같은 표준 프로토콜을 사용하여 안전한 인증 및 인가를 구현합니다.",checked:!1},{text:"폴리글랏 언어: 다양한 언어를 선택하여 각 마이크로서비스에 가장 적합한 언어를 사용합니다. 이를 통해 개발자들은 자신이 가장 잘 알고 있는 언어로 서비스를 개발할 수 있으며, 시스템 전체의 다양성과 유연성을 높일 수 있습니다.",checked:!1}],isCompleted:!1},{checkpoints:[{text:"UI/UX: Client Side Rendering (CSR) + MVVM: 클라이언트에서 페이지 렌더링 및 상태 관리를 담당하는 MVVM(Model-View-ViewModel) 아키텍처를 사용합니다. 이를 통해 사용자 경험을 향상시키고 복잡한 상태 관리를 용이하게 합니다.",checked:!1},{text:"Token-based 보안, OAuth2: Level 3과 동일하게 토큰 기반의 보안 메커니즘을 사용합니다.",checked:!1},{text:"폴리글랏 언어 + Service Mesh: 다양한 언어를 사용하며, 마이크로서비스 간 통신과 네트워크 기능을 관리하기 위해 Service Mesh를 도입합니다. Service Mesh는 서비스 간의 통신, 로드 밸런싱, 모니터링 등을 추상화하여 관리합니다. 이를 통해 시스템의 확장성과 안정성을 향상시킬 수 있습니다.",checked:!1}],isCompleted:!1}]},{name:"인프라 아키텍처 관점",name_en:"infra-architecture",goalLevel:0,levels:[{checkpoints:[{text:"지속적인 빌드와 지속적인 통합 운영을 수행하고 있는가?",checked:!1},{text:"개발 및 운영 사이의 원활한 협업을 위한 도구와 프로세스를 도입하였는가?",checked:!1}],isCompleted:!1},{checkpoints:[{text:"지속적인 딜리버리와 배포를 수행하고 있는가?",checked:!1},{text:"로그를 중앙 집중화하여 모니터링과 분석을 용이하게 하였는가?",checked:!1}],isCompleted:!1},{checkpoints:[{text:"컨테이너 사용 (도커)을 적용하였는가?",checked:!1},{text:"컨테이너 오케스트레이터 (Kubernetes)를 사용하여 마이크로서비스를 관리하고 스케일링하였는가?",checked:!1},{text:"외부 구성 요소 (예: 유레카, 주키퍼)를 활용하여 마이크로서비스 간의 통신과 구성 관리를 개선했는가?",checked:!1}],isCompleted:!1},{checkpoints:[{text:"자동 프로비저닝을 갖춘 PaaS(Pass-as-a-Service) 기반 솔루션을 사용하였는가?",checked:!1},{text:"인프라 자원의 프로비저닝, 확장 및 관리를 자동화하고 스케일링 용이성을 향상시켰는가?",checked:!1},{text:"PaaS를 통해 개발팀은 인프라 구성과 관리에 대해 걱정하지 않고 비즈니스 로직에 집중할 수 있는 환경을 제공받았는가?",checked:!1}],isCompleted:!1}]},{name:"배포 관점",name_en:"distribute",goalLevel:0,levels:[{checkpoints:[{text:"설치 스크립트 구동 및 호스트 당 멀티 서비스 인스턴스를 적용하였는가?",checked:!1},{text:"설치 스크립트: 서비스 인스턴스를 설치하고 구성하기 위한 자동화된 스크립트를 사용하였는가?",checked:!1},{text:"호스트 당 멀티 서비스 인스턴스: 단일 호스트에서 여러 개의 서비스 인스턴스를 실행하여 확장성을 향상시켰는가?",checked:!1}],isCompleted:!1},{checkpoints:[{text:"VM 당 하나의 서비스 인스턴스, 클라이언트 사이드 로드 밸런싱, 서버 사이드 로드 밸런싱을 적용하였는가?",checked:!1},{text:"VM 당 하나의 서비스 인스턴스: 가상 머신(VM) 당 하나의 서비스 인스턴스를 실행하여 격리와 확장성을 개선했는가?",checked:!1},{text:"클라이언트 사이드 로드 밸런싱: 클라이언트 측에서 요청을 여러 서비스 인스턴스로 분산시키는 로드 밸런싱을 구현하였는가?",checked:!1},{text:"서버 사이드 로드 밸런싱: 로드 밸런서를 사용하여 서비스 인스턴스 간에 요청을 분산시키는 로드 밸런싱을 구현하였는가?",checked:!1}],isCompleted:!1},{checkpoints:[{text:"Immutable 서버, 컨테이너 당 하나의 서비스 인스턴스, blue/green 배포를 포함한 다양한 배포 전략을 구사하였는가?",checked:!1},{text:"Immutable 서버: 변경 불가능한 서버 이미지를 사용하여 배포와 롤백의 안정성과 일관성을 확보하였는가?",checked:!1},{text:"컨테이너 당 하나의 서비스 인스턴스: 컨테이너 당 하나의 서비스 인스턴스를 실행하여 격리와 확장성을 개선했는가?",checked:!1},{text:"Blue/Green 배포: 새로운 버전의 서비스를 기존 버전과 동시에 배포하고 트래픽을 전환하는 Blue/Green 배포 전략을 구현하였는가?",checked:!1}],isCompleted:!1},{checkpoints:[{text:"멀티 클라우드 및 멀티 데이터 센터 지원을 포함한 배포 관점의 성숙도를 갖췄는가?",checked:!1},{text:"멀티 클라우드: 여러 클라우드 제공업체를 사용하여 애플리케이션을 배포 및 실행하는 환경을 구축하였는가?",checked:!1},{text:"멀티 데이터 센터: 여러 데이터 센터에 애플리케이션을 분산 배포하여 가용성과 복원력을 향상시켰는가?",checked:!1}],isCompleted:!1}]},{name:"팀 구조와 문화 관점",name_en:"team-structure",goalLevel:0,levels:[{checkpoints:[{text:"개발, QA, 릴리즈, 운영이 분리된 하나의 기능 팀을 적용하였는가?",checked:!1},{text:"개발, QA, 릴리즈, 운영이 분리된 하나의 기능 팀: 기능별로 분리된 팀이 각자의 역할에 집중하여 작업하고, 개발부터 운영까지 전체 생명주기를 담당하였는가?",checked:!1}],isCompleted:!1},{checkpoints:[{text:"공유된 서비스 모델로 팀 공동 작업, 내부 소스 공개를 적용하였는가?",checked:!1},{text:"공유된 서비스 모델: 여러 팀이 공통적으로 사용하는 서비스 모델을 개발하고 유지보수하여 효율성을 향상시켰는가?",checked:!1},{text:"팀 공동 작업: 여러 팀이 협업하여 기능을 개발하고 통합하는 작업을 수행하였는가?",checked:!1},{text:"내부 소스 공개: 팀 내에서 개발된 소스 코드와 지식을 공유하고 문서화하여 효율적인 협업을 도모하였는가?",checked:!1}],isCompleted:!1},{checkpoints:[{text:"서비스별 프로덕트 팀(PO, UI/UX 디자이너, 개발자) Cross Functional한 플랫폼 팀을 적용하였는가?",checked:!1},{text:"서비스별 프로덕트 팀: 각 서비스에 대한 전체적인 책임을 갖는 프로덕트 팀을 구성하였는가?",checked:!1},{text:"PO, UI/UX 디자이너, 개발자: 다양한 역할을 수행하는 멤버들로 구성되어 프로덕트를 개발하고 개선하는데 참여하였는가?",checked:!1},{text:"Cross Functional한 플랫폼 팀: 다양한 기술과 역할을 갖춘 팀이 플랫폼 관련 업무를 수행하고, 서비스 팀을 지원하였는가?",checked:!1}],isCompleted:!1},{checkpoints:[{text:'업무 기능별 혹은 도메인별 팀들이 모든 관점에서 책임을 수반하였으며, "네가 구축한 것은 네가 운영합니다"를 적용하였는가?',checked:!1},{text:"업무 기능별 혹은 도메인별 팀: 특정 업무 기능이나 도메인을 담당하는 팀이 모든 측면에서 책임을 진다.",checked:!1},{text:'"네가 구축한 것은 네가 운영합니다": 각 팀이 자체적으로 구축한 서비스나 기능을 직접 운영하고 유지보수하는 책임을 가지며, 자율성을 강조하였는가?',checked:!1}],isCompleted:!1}]}],chartWidth:400,chartHeight:400,chartCenterX:200,chartCenterY:200,chartRadius:150,labelOffset:20,maxDataValue:5,pointRadius:4}}},j={mixins:[M],components:{SpiderChart:A},props:{selectedUser:[]},data(){return{}},mounted(){},watch:{},methods:{updateLevelCompletion(e,t){t.isCompleted=t.checkpoints.every(e=>e.checked),this.$emit("saveUsers")}}},q=j,F=Object(o["a"])(q,S,w,!1,null,null,null),$=F.exports,I=function(){var e=this,t=e._self._c;return t("div",[t("v-row",[t("v-col",[t("div",{staticClass:"qna-box goal-box"},e._l(e.selectedUser.topics,(function(s,a){return t("div",{key:a,staticStyle:{"margin-bottom":"40px"}},[t("h3",{staticStyle:{"margin-bottom":"10px"}},[e._v(e._s(s.name))]),e._l(s.questions,(function(s,a){return t("div",{key:a,staticStyle:{"margin-bottom":"10px",padding:"10px 10px 0 0","border-bottom":"1px solid #ccc"}},[t("div",[e._v(e._s(s.text))]),t("v-slider",{staticClass:"tickLabels-txt",attrs:{"tick-labels":e.tickLabels,max:e.tickLabels.length-1,step:"1",ticks:"always","tick-size":4},on:{input:function(t){return e.onSliderChange()}},model:{value:s.value,callback:function(t){e.$set(s,"value",t)},expression:"question.value"}})],1)}))],2)})),0)]),t("v-col",[t("SpiderChart",{attrs:{perspectives:e.selectedUser.perspectives,chartWidth:e.chartWidth,chartHeight:e.chartHeight,chartCenterX:e.chartCenterX,chartCenterY:e.chartCenterY,chartRadius:e.chartRadius,labelOffset:e.labelOffset,maxDataValue:e.maxDataValue,pointRadius:e.pointRadius}})],1)],1)],1)},V=[],G={data(){return{user:[],users:[],tickLabels:["전혀 그렇지 않다.","그렇지 않다.","보통이다.","그렇다.","매우 그렇다."],topics:[{name:"Availability",goalLevels:[3,3,0,3,3,0],goalCheckCount:3,questions:[{text:"최근 마이너한 신규 기능의 추가로 인하여 핵심 기능의 장애가 발생한 적이 있는가",value:0},{text:"요구되는 uptime 이 가장 높은 업무 영역과 낮은 영역간의 격차가 얼마나 되는가",value:0},{text:"단일 데이터베이스를 여러업무가 사용하면서 lock 이 걸리거나 사용자가 대기시간이 오래걸리는 일들이 있는가",value:0},{text:"사용자 과부하시에 특정 기능에 대기시간이 급격히 늘어나거나 사용자 불만이 존재하는가",value:0},{text:"시스템 확장에 한계로 작용하는 취약한 지점이 존재하는가",value:0},{text:"특정 시간대에 업무가 몰려들어 충분한 자원이 있음에도 사용자 이탈 혹은 요청 처리가 불가능한 경우가 발생하여 장애가 발생한적이 있는가",value:0}]},{name:"업무 간섭 / 이해의 문제",goalLevels:[3,3,0,3,3,0],goalCheckCount:3,questions:[{text:"업무 수정을 위하여 하나 이상의 부서의 프로세스 합의나 데이터베이스 구조 등의 합의가 필요한가",value:0},{text:"던젼 마스터가 존재하는가",value:0},{text:"던젼 마스터의 일정에 얼마나 종속적인가",value:0},{text:"타 시스템간 통합을 위하여 해당 시스템이 죽게 되면 내 시스템도 장애가 발생하는가",value:0},{text:"데이터베이스 영향도 때문에 스키마가 영향을 받아 시스템 장애가 생긴작이 있는가",value:0},{text:"팀간에 동일한 시스템 공유로 인한 테스트시 야근 등으로 개발자 만족도가 떨어지는가",value:0},{text:"개발된 제품이 실제로 운영에 반영되는데 여러가지 정서적 기술적 이유로 지체되는 일이 있는가",value:0},{text:"시스템은 분리되어있으나 이들간의 api 가 잘 준수되지 못하여 api spec 연동이슈 및 버전의 혼란이 존재하는가",value:0},{text:"서버들은 잘 분리되었으나 프론트엔드에서도 팀간 분리 사용기술 다양화 등의 이슈가 붉어지기 시작하는가",value:0}]},{name:"Agility",goalLevels:[1,2,3,4,3,4],goalCheckCount:1,questions:[{text:"신규 업무를 개발하여 배포하는데 타 서비스들간의 테스트를 위하여 대기해야하는 시간이 얼마나 걸리는가 (코드 머지, 통합 테스트, 간섭에 의한 오류 수정)",value:0}]},{name:"다양한 최신기술 수용성",goalLevels:[1,2,3,4,3,4],goalCheckCount:1,questions:[{text:"레가시 기술들(버전,언어, os) 발목이 잡혀 신규 기술들을 적용하지 못함",value:0},{text:"업무 영역중 사서 써도 되는 시스템이지만 통합의 이슈로 직접 구현해서 쓰는 시스템 영역은 어떤 것들이 있는가",value:0}]},{name:"성능",goalLevels:[1,2,3,4,3,4],goalCheckCount:1,questions:[{text:"대시보드 혹은 결산 등 데이터 조회에 동원되는 테이블 개수가 막대하여 성능 문제와 join sql 등의 관리가 어려운가",value:0},{text:"금액 등 중요한 정보를 다루기 때문에 데이터 변경이력을 꼭 관리해야하고 필요시 복구해야 하는가",value:0}]},{name:"관리자동화/효율화",goalLevels:[4,4,4,4,4,4],goalCheckCount:2,questions:[{text:"관리하는 서버들을 수작업으로 관리하는가 아니면 자동화된 시스템으로 확장 축소 장애시 재시작 등이 이루어지는가",value:0},{text:"서버들간의 연동에 있어 직접적인 ip 어드레스 등이 관리어려운가",value:0},{text:"서비스 사용자의 폭주등을 관리할 수 있도록 접속 제한, 공격방어 등이 필요한가",value:0},{text:"시스템 복구나 테스트용도의 시스템을 최대한 빠르게 재구성할 수 있어야 하는가",value:0}]},{name:"데이터 분석 및 혁신",goalLevels:[3,2,3,4,3,4],goalCheckCount:1,questions:[{text:"각 업무 분석의 데이터가 너무 통합되어 도메인별 관리가 어려운가",value:0},{text:"시계열 데이터의 수집과 분석이 필요한가",value:0}]},{name:"지속적 혁신",goalLevels:[3,2,3,4,3,4],goalCheckCount:1,questions:[{text:"기존 시스템에 대한 개선 지표와 서비스 수준이 관리될 필요가 있는가",value:0},{text:"기존 사용자가 새로운 시도에 얼마나 반응하는지 지속적인 개선을 위한 실 사용자 피드백이 절실한가",value:0}]}]}}},X={name:"GoalSetting",mixins:[M,G],components:{SpiderChart:A},props:{selectedUser:null},data(){return{}},created(){},watch:{},methods:{onSliderChange(){this.changeGoalLevel()},changeGoalLevel(){var e=this,t=[];e.selectedUser.perspectives.forEach((function(){t.push(0)})),this.selectedUser.topics.forEach((function(e,s){const a=e.questions.filter(e=>e.value>=3).length;a<e.goalCheckCount||e.goalLevels.forEach((function(e,s){t[s]<e&&(t[s]=e)}))})),t.forEach((function(t,s){e.selectedUser.perspectives[s].goalLevel=t})),this.$emit("saveUsers")}}},N=X,T=(s("d657"),Object(o["a"])(N,I,V,!1,null,null,null)),B=T.exports,H=function(){var e=this,t=e._self._c;return t("div",[t("v-tabs",{attrs:{"fixed-tabs":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.items,(function(s){return t("v-tab",{key:s.tab},[e._v("\n            "+e._s(s.tab)+"\n        ")])})),1),t("v-tabs-items",{staticClass:"guide-box",model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.items,(function(s){return t("v-tab-item",{key:s.tab},[t("v-card",{attrs:{flat:""}},[e._l(s.content,(function(s){return[t("v-card-text",[e._v(e._s(s.text))])]})),e.goalLevels[s.tab_en]>0&&Object.keys(e.markdownContentFolders).length>0?t("div",{domProps:{innerHTML:e._s(e.markdownContentFolders[s.tab_en][e.goalLevels[s.tab_en]])}}):e._e()],2)],1)})),1)],1)},E=[],z=s("cee4"),W=s("0e54"),Y=s.n(W),J={name:"GetTheGuide",components:{},props:{selectedUser:null},data(){return{items:[{tab:"기능분해",tab_en:"decomposition",content:[{text:"Ubiquitous language 정의: 각 bounded context에서 사용될 공통 언어와 용어를 정의하고 이를 문서화하였는가?"},{text:"Boundary 정의: 각 bounded context의 경계를 명확하게 정의하고 외부에서의 커뮤니케이션 방식을 결정하였는가?"},{text:"Anti-corruption layer 구현: bounded context 간의 통신을 관리하기 위해 Anti-corruption layer를 구현하고 외부 인터페이스 변환 및 데이터 변환을 수행하였는가?"},{text:"Ubiquitous language 정의: 각 bounded context에서 사용될 공통 언어와 용어를 정의하고 이를 문서화하였는가?"}]},{tab:"데이터",tab_en:"data",content:[{text:"분산 데이터 관리: 각 마이크로서비스는 완전히 분산된 데이터 관리를 수행하고 있으며, 필요에 따라 데이터의 파티셔닝, 샤딩, 복제 등을 구현하였는가?"},{text:"폴리글랏 퍼시스턴스: 각 마이크로서비스는 자체적으로 다른 유형의 DBMS를 사용할 수 있는 폴리글랏 퍼시스턴스를 구현하였는가?"},{text:"데이터 접근 및 관리: 각 마이크로서비스에서 필요한 데이터 액세스 방법을 선택하고 이를 효율적으로 관리하고 있으며, 성능과 확장성을 고려하였는가?"}]},{tab:"소프트웨어 아키텍처",tab_en:"sw-architecture",content:[{text:"UI/UX: Client Side Rendering (CSR): 클라이언트에서 페이지 렌더링을 수행하고 필요한 데이터만 서버로부터 요청하여 가져옵니다. 이를 통해 초기 로딩 시간을 줄이고 사용자 경험을 향상시킬 수 있습니다."},{text:"Token-based 보안, OAuth2: 세션 대신 토큰을 사용하여 사용자 인증과 권한 부여를 처리합니다. OAuth2와 같은 표준 프로토콜을 사용하여 안전한 인증 및 인가를 구현합니다."},{text:"폴리글랏 언어: 다양한 언어를 선택하여 각 마이크로서비스에 가장 적합한 언어를 사용합니다. 이를 통해 개발자들은 자신이 가장 잘 알고 있는 언어로 서비스를 개발할 수 있으며, 시스템 전체의 다양성과 유연성을 높일 수 있습니다."}]},{tab:"인프라 아키텍처",tab_en:"infra-architecture",content:[{text:"컨테이너 사용 (도커)을 적용하였는가?"},{text:"컨테이너 오케스트레이터 (Kubernetes)를 사용하여 마이크로서비스를 관리하고 스케일링하였는가?"},{text:"외부 구성 요소 (예: 유레카, 주키퍼)를 활용하여 마이크로서비스 간의 통신과 구성 관리를 개선했는가?"}]},{tab:"배포",tab_en:"distribute",content:[{text:"Immutable 서버, 컨테이너 당 하나의 서비스 인스턴스, blue/green 배포를 포함한 다양한 배포 전략을 구사하였는가?"},{text:"Immutable 서버: 변경 불가능한 서버 이미지를 사용하여 배포와 롤백의 안정성과 일관성을 확보하였는가?"},{text:"컨테이너 당 하나의 서비스 인스턴스: 컨테이너 당 하나의 서비스 인스턴스를 실행하여 격리와 확장성을 개선했는가?"},{text:"Blue/Green 배포: 새로운 버전의 서비스를 기존 버전과 동시에 배포하고 트래픽을 전환하는 Blue/Green 배포 전략을 구현하였는가?"}]},{tab:"팀 구조와 문화",tab_en:"team-structure",content:[{text:"서비스별 프로덕트 팀(PO, UI/UX 디자이너, 개발자) Cross Functional한 플랫폼 팀을 적용하였는가?"},{text:"서비스별 프로덕트 팀: 각 서비스에 대한 전체적인 책임을 갖는 프로덕트 팀을 구성하였는가?"},{text:"PO, UI/UX 디자이너, 개발자: 다양한 역할을 수행하는 멤버들로 구성되어 프로덕트를 개발하고 개선하는데 참여하였는가?"},{text:"Cross Functional한 플랫폼 팀: 다양한 기술과 역할을 갖춘 팀이 플랫폼 관련 업무를 수행하고, 서비스 팀을 지원하였는가?"}]}],tab:0,markdownContentFolders:{},userPerspectives:[],goalLevels:{},contents:[]}},created(){this.loadUserPerspectives()},watch:{selectedUser:{handler(){this.markdownContentFolders={},this.loadUserPerspectives()},deep:!0}},methods:{async getAllMarkdownContentFolders(){try{const e=await z["a"].get("https://api.github.com/repos/msa-ez/cloud-iq/contents/get-the-guide-md"),t=e.data.filter(e=>"dir"===e.type);for(const s of t)await this.getFolderContents(s.name);this.$forceUpdate()}catch(e){console.error("Failed to load markdownContentFolders",e)}},async getFolderContents(e){try{let t={};for(let s=1;s<=4;s++){const a=await z["a"].get(`https://raw.githubusercontent.com/msa-ez/cloud-iq/main/get-the-guide-md/${e}/level${s}.md`),n=Y()(a.data);t[s]=n}this.markdownContentFolders[e]=t}catch(t){console.error("Failed to load contents for folder "+e,t)}},loadUserPerspectives(){this.selectedUser&&this.selectedUser.perspectives&&(this.selectedUser.perspectives.forEach(e=>{this.goalLevels[e.name_en]=e.goalLevel}),this.getAllMarkdownContentFolders())}}},Q=J,K=Object(o["a"])(Q,H,E,!1,null,null,null),Z=K.exports,ee={components:{},props:{selectedUser:null},data(){return{e1:1,components:[{component:$,name:"현수준평가"},{component:B,name:"목표수준설정"},{component:Z,name:"전환가이드"}]}},watch:{},methods:{saveUsers(){this.$emit("saveUsers")},nextStep(e){e===this.components.length?this.e1=1:this.e1=e+1}}},te=ee,se=(s("33db"),Object(o["a"])(te,y,U,!1,null,null,null)),ae=se.exports,ne={mixins:[M,G],components:{Step:ae},data(){return{showDialog:!1,users:[],user:[],newUser:{name:"",email:"",nameRules:[e=>!!e||"이름을 입력해 주세요."],emailRules:[e=>!!e||"이메일을 입력해 주세요.",e=>/.+@.+\..+/.test(e)||"유효한 이메일 형식이 아닙니다."],perspectives:[],topics:[]},selectedUser:null}},created(){this.loadUsers()},watch:{selectedUser:{handler(e){this.user=this.users.find(t=>t.email==e)}}},methods:{saveUsers(){localStorage.setItem("registeredUsers",JSON.stringify(this.users))},loadUsers(){const e=localStorage.getItem("registeredUsers");e&&(this.users=JSON.parse(e))},userDisplayText(e){return`${e.name} (${e.email})`},registerUser(){var e={...this.newUser};e.perspectives=this.perspectives,e.topics=this.topics,this.users.push(e),this.user=e,this.selectedUser=e.email,this.saveUsers(),this.closeDialog()},closeDialog(){this.showDialog=!1,this.newUser.name="",this.newUser.email=""}}},ce=ne,re=(s("a5ac"),Object(o["a"])(ce,C,_,!1,null,null,null)),ie=re.exports;a["default"].use(v["a"]);const oe=[{path:"/",name:"main",component:f},{path:"/user",name:"User",component:ie}],le=new v["a"]({mode:"history",routes:oe});var de=le;s("5363");a["default"].prototype.$bus=new a["default"],s("38c8"),new a["default"]({vuetify:p,router:de,render:e=>e(d)}).$mount("#app")},"6da0":function(e,t,s){},a5ac:function(e,t,s){"use strict";s("c974")},c974:function(e,t,s){},cf18:function(e,t,s){"use strict";s("6da0")},d443:function(e,t,s){},d657:function(e,t,s){"use strict";s("d443")},e0a3:function(e,t,s){"use strict";s("0b24")}});
//# sourceMappingURL=app.74e37d91.js.map