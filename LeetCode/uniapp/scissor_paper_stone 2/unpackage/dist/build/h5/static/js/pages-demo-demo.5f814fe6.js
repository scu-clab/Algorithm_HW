(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demo-demo"],{"0ddf":function(t,e,i){var n=i("316e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("0d8beecc",n,!0,{sourceMap:!1,shadowMode:!1})},2021:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=u(i("e6c9")),o=u(i("bbf2")),a=r(i("abd0"));i("9907"),i("553d");var s,l,c=u(i("4058"));function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,i):{};n.get||n.set?Object.defineProperty(e,i,n):e[i]=t[i]}return e.default=t,e}function u(t){return t&&t.__esModule?t:{default:t}}function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var p=(s={components:{uniPopup:o.default,uniCountdown:n.default,uniNoticeBar:c.default},data:function(){return{title:"配對中",type:"",list:["1","2","3","4","5","6","7","8","9","10"],radioItems:[{name:"Scissors",value:"剪刀",checked:"true"},{name:"Stones",value:"石頭",checked:"true"},{name:"Papers",value:"布",checked:"true"}],player:[],pic:"../../static/問號.jpg",user:"",match:"",user_choose:"",round:"",turn:"",result:"",user_name:"",modalHidden:!0,modalHidden2:!0,lose:!1,play_history:[],display:{},turnround:"",lastturnround:"",listOfObjects:"",last_advance:[],his_id:"",submit_button_show:!1,time:null,sessionTime:30,if_end:!1}},onBackPress:function(){if(""!==this.type)return this.type="",!0},onLoad:function(){l=this,this.showLoading("配對中");var t={apiKey:"AIzaSyC99xG1nJDaoDgBFK5_v26H-Q9wUB2TCwc",authDomain:"willion-54d6b.firebaseapp.com",databaseURL:"https://willion-54d6b.firebaseio.com",projectId:"willion-54d6b",storageBucket:"willion-54d6b.appspot.com",messagingSenderId:"762283103134"};a.apps.length||(a.initializeApp(t),console.log(a.app().name)),this.user=uni.getStorage({key:"id",success:function(t){}}),this.wait(),this.lastturnround=uni.getStorage({key:"lastturnround",success:function(t){}})}},d(s,"onBackPress",function(){if(""!==this.type)return this.type="",!0}),d(s,"methods",{timer:function(){var t=this;t.sessionTime=30,this.time=setInterval(function(){if(t.sessionTime>0&&t.sessionTime--,0===t.sessionTime)return t.timeup(),void t.stoptimer()},1e3)},stoptimer:function(){clearInterval(this.time)},timeup:function(){uni.showToast({title:"時間到"})},show_his:function(t){console.log(t),this.his_id=t,console.log(this.his_id),this.togglePopup("middle-list")},detail_pic_show:function(t){return"../../static/"+t+".jpeg"},togglePopup:function(t){this.type=t},showLoading:function(t){uni.showLoading({title:t})},showLoading_lose:function(){uni.showLoading({title:"你輸了"})},showLoading_win:function(){uni.showLoading({title:"你贏了"})},hideLoading:function(){uni.hideLoading()},toast4Tap:function(){uni.showToast({title:"logo"})},tapEvent:function(t){console.log("按钮被点击")},rowCount:function(t){console.log(t.name)},modalTap:function(t){uni.showModal({content:"出拳情況",showCancel:!1})},modalTap_new:function(t){uni.showModal({content:t,showCancel:!1,confirmText:"繼續"})},choose:function(t){this.pic=t.target.dataset.choose,this.user_choose=t.target.dataset.id,console.log(this.pic),console.log(this.user_choose)},back_to_homepage:function(){uni.redirectTo({url:"../database/database"})},wait:function(t){uni.getStorage({key:"id",success:function(t){l.user=t.data,l.user_name=t.data.substring(0,5)}});var e=a.firestore().collection("user").doc(l.user);e.onSnapshot(function(t){var e=t.data(),i=e.now_match;console.log(e),l.match=i;var n=a.firestore().collection("game").doc("game1").collection("match").doc(l.match);n.get().then(function(t){l.timer(),l.player=[],l.hideLoading();var e=t.data();for(var i in Object.keys(e.play))Object.keys(e.play)[i]!=l.user&&(l.player.push({name:Object.keys(e.play)[i].substring(0,5)}),l.display[Object.keys(e.play)[i].substring(0,5)]="../../static/問號.jpg")}),l.submit_button_show=!0,l.getRound(),l.getResult()})},play:function(){this.showLoading("等待對方出拳"),this.stoptimer(),this.submit_button_show;var t=a.firestore().collection("game").doc("game1").collection("match").doc(l.match);t.get().then(function(t){var e=t.data();uni.setStorage({key:"lastturnround",data:e.status["processing"]}),l.lastturnround=e.status["processing"],console.log(l.lastturnround)});var e="play."+this.user;t.update(d({},e,this.user_choose)),console.log(this.lastturnround),console.log(l.user),console.log(l.match);uni.request({url:"https://us-central1-willion-54d6b.cloudfunctions.net/function-1",data:{user_id:l.user,match:l.match},method:"GET",success:function(t){console.log(t.data)}})},getResult:function(){var t=a.firestore().collection("game").doc("game1").collection("match").doc(l.match),e=t.collection("play_data").doc("play_data");console.log(l.match),e.onSnapshot(function(t){var e=t.data();console.log(e);var i=e[Object.keys(e)[Object.keys(e).length-1]];console.log(i);var n=i[Object.keys(i)[Object.keys(i).length-2]];console.log(n["advance"].length),console.log(l.last_advance),l.submit_button_show=!0,n["advance"].length>1?(!1===n["advance"].includes(l.user)?!0!==l.lose&&(l.modalTap_new("你輸了請等待本局結束"),l.lose=!0):l.last_advance.length===n["advance"].length?l.modalTap_new("平手，請繼續出拳"):l.modalTap_new("你贏了，請繼續出拳"),l.last_advance=n["advance"]):0===n["advance"].length?l.getRound():!1===n["advance"].includes(l.user)?(l.modalTap_new("本局結束，"+n["advance"][0]+"為本局贏家"),l.lose=!1):l.modalTap_new("你贏了本局"),l.getRound(),l.getPlayHistory(),l.hideLoading(),l.stoptimer(),console.log(l.if_end),!1===l.if_end&&l.timer()})},demo_play:function(){var t=a.firestore().collection("game").doc("game1").collection("match").doc(l.match);t.get().then(function(t){var e=t.data();uni.setStorage({key:"lastturnround",data:e.status["processing"]}),l.lastturnround=e.status["processing"],console.log(l.lastturnround)});this.user;console.log(this.lastturnround),console.log(l.user),console.log(l.match);uni.request({url:"https://us-central1-willion-54d6b.cloudfunctions.net/function-1",data:{user_id:l.user,match:l.match},method:"GET",success:function(t){console.log(t.data)}});this.getResult()},getRound:function(){var t=a.firestore().collection("game").doc("game1").collection("match").doc(l.match);t.get().then(function(t){var e=t.data();try{return l.round=e.status["processing"].split("/")[0],l.turn=e.status["processing"].split("/")[1],e.status["processing"]}catch(i){return l.if_end=!0,console.log(e.status),"end"==e.status&&(l.submit_button_show=!1,l.modalTap_new("比賽結束"),l.stoptimer()),e.status}})},getPlayHistory:function(){var t=a.firestore().collection("game").doc("game1").collection("match").doc(l.match);t.get().then(function(t){var e=t.data();for(var i in l.play_history=e.play_history,l.display=[],Object.keys(e.play_history)){var n=uni.getStorage({key:"lastturnround",success:function(t){l.lastturnround=t.data}});console.log(n),console.log(e.play_history[Object.keys(e.play)[i]][l.lastturnround]),Object.keys(e.play_history)[i]!==l.user&&("-"===e.play_history[Object.keys(e.play)[i]][l.lastturnround]?l.display[Object.keys(e.play)[i].substring(0,5)]="../../static/loser.jpeg":l.display[Object.keys(e.play)[i].substring(0,5)]="../../static/"+e.play_history[Object.keys(e.play)[i]][l.lastturnround]+".jpeg")}})}}),s);e.default=p},"316e":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'.text[data-v-4b1b6d72]{margin:%?15?% %?10?%;padding:0 %?20?%;background-color:#ebebeb;height:%?70?%;line-height:%?70?%;text-align:center;color:#777;font-size:%?26?%}.desc[data-v-4b1b6d72]{\n\t/* text-indent: 40upx; */}.uni-list-cell[data-v-4b1b6d72]{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.uni-list .label-3[data-v-4b1b6d72]{padding:0}.image[data-v-4b1b6d72]{margin:%?20?% 0;width:%?100?%}uni-page-body[data-v-4b1b6d72]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff}uni-view[data-v-4b1b6d72]{font-size:%?28?%;line-height:inherit}.example[data-v-4b1b6d72]{padding:0 %?30?% %?30?%}.example-title[data-v-4b1b6d72]{font-size:%?32?%;line-height:%?32?%;color:#777;margin:%?40?% %?25?%;position:relative}.example .example-title[data-v-4b1b6d72]{margin:%?40?% 0}.example-body[data-v-4b1b6d72]{padding:0 %?40?%}.uni-padding-wrap[data-v-4b1b6d72]{padding:0 %?30?%}uni-button[data-v-4b1b6d72]{margin:%?20?% 0}.uni-helllo-text[data-v-4b1b6d72]{height:%?100?%;line-height:%?100?%;text-align:center}.center-box[data-v-4b1b6d72]{width:%?500?%;height:%?500?%}.uni-list-item[data-v-4b1b6d72]{text-align:left;line-height:%?80?%;border-bottom:1px #f5f5f5 solid}.uni-list-item[data-v-4b1b6d72]:last-child{border:none}.center-box .image[data-v-4b1b6d72]{width:100%;height:100%}.bottom-title[data-v-4b1b6d72]{line-height:%?60?%;font-size:%?24?%;padding:%?15?% 0}.bottom-content[data-v-4b1b6d72]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0 %?35?%}.bottom-content-box[data-v-4b1b6d72]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-bottom:%?15?%;width:25%;-webkit-box-sizing:border-box;box-sizing:border-box}.bottom-content-image[data-v-4b1b6d72]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:%?90?%;height:%?90?%;overflow:hidden;background:#007aff;border-radius:%?10?%}.bottom-content-text[data-v-4b1b6d72]{font-size:%?26?%;color:#333;margin-top:%?10?%}.bottom-btn[data-v-4b1b6d72]{height:%?90?%;line-height:%?90?%;border-top:1px #f5f5f5 solid}.bottom-content-image.wx[data-v-4b1b6d72]{background:#00ce47}.bottom-content-image.qq[data-v-4b1b6d72]{background:#00b6f6}.bottom-content-image.sina[data-v-4b1b6d72]{background:#ff766a}.bottom-content-image.copy[data-v-4b1b6d72]{background:#07ccd0}@font-face{font-family:iconfont;\n\t/* project id 1028200 */src:url(https://at.alicdn.com/t/font_1028200_47ewtwy4t04.ttf) format("truetype")}.icon[data-v-4b1b6d72]{font-family:iconfont;font-size:%?40?%;color:#fff}body.?%PAGE?%[data-v-4b1b6d72]{background-color:#fff}',""])},"43c2":function(t,e,i){"use strict";i.r(e);var n=i("2021"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},"4ee4":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap uni-flex uni-column "},[i("v-uni-view",[i("v-uni-view",{staticStyle:{"text-align":"left","font-size":"20px"}},[t._v("myID :"+t._s(t.user_name+"  ")),t._v("出拳剩餘時間"+t._s(t.sessionTime))]),i("v-uni-view",{staticStyle:{"text-align":"right","font-size":"20px"}}),i("v-uni-view",{staticStyle:{"font-size":"18px"}},[t._v(t._s(t.round+"     "+t.turn)),i("br"),t._v("Score :")]),i("br"),i("v-uni-view",{staticClass:"uni-flex uni-row ",staticStyle:{"flex-wrap":"wrap"}},[t._l(t.player,function(e,n){return 1===t.player.length?i("v-uni-view",{key:n},[i("v-uni-view",{staticClass:"uni-flex-item-with-height-1 uni-bg-red"},[t._v(t._s(e.name)),i("v-uni-button",{staticStyle:{background:"#F76260","font-size":"0"},attrs:{type:"default"},on:{click:function(e){e=t.$handleEvent(e),t.modalTap(e)}}},[i("v-uni-view",{staticStyle:{flex:"1",height:"300upx",display:"flex","justify-content":"center","align-items":"center",background:"#F76260","font-size":"0"}},[i("v-uni-image",{staticClass:"image",staticStyle:{"align-items":"center"},attrs:{mode:"widthFix",src:"../../static/問號.jpg"}})],1)],1)],1)],1):t._e()}),t._l(t.player,function(e,n){return 2===t.player.length?i("v-uni-view",{key:n},[i("v-uni-view",{staticClass:"uni-flex-item-with-height-2 uni-bg-red"},[t._v(t._s(e.name)),i("v-uni-button",{staticStyle:{background:"#F76260","font-size":"0"},attrs:{type:"default"},on:{click:function(e){e=t.$handleEvent(e),t.modalTap(e)}}},[i("v-uni-view",{staticStyle:{flex:"1",height:"300upx",display:"flex","justify-content":"center","align-items":"center",background:"#F76260","font-size":"0"}},[i("v-uni-image",{staticClass:"image",attrs:{mode:"widthFix",src:"../../static/問號.jpg"}})],1)],1)],1)],1):t._e()}),t._l(t.player,function(e,n){return 4===t.player.length?i("v-uni-view",{key:n},[i("v-uni-view",{staticClass:"uni-flex-item-with-height-2 uni-bg-red"},[t._v(t._s(e.name)),i("v-uni-button",{staticClass:"uni-bg-red",attrs:{position:"button"},on:{click:function(i){i=t.$handleEvent(i),t.show_his(e.name)}}},[i("v-uni-image",{staticClass:"image",attrs:{mode:"widthFix",src:t.display[e.name]}})],1),i("uni-popup",{attrs:{show:"middle-list"===t.type,msg:t.his_id,position:"middle",mode:"fixed"},on:{hidePopup:function(e){e=t.$handleEvent(e),t.togglePopup("")}}},[i("v-uni-scroll-view",{staticClass:"uni-center center-box",attrs:{"scroll-y":"true"}},t._l(t.play_history,function(e,n){return n.indexOf(t.his_id)>-1?i("v-uni-view",{key:n},t._l(e,function(e,n){return i("v-uni-view",{key:n},[i("v-uni-view",[t._v(t._s(n)+" :")]),i("v-uni-image",{staticClass:"image",staticStyle:{width:"50px",height:"50px"},attrs:{mode:"widthFix",src:t.detail_pic_show(e)}})],1)}),1):t._e()}),1)],1)],1)],1):t._e()}),t._l(t.player,function(e,n){return t.player.length>=2&&4!=t.player.length?i("v-uni-view",{key:n},[i("v-uni-view",{staticClass:"uni-flex-item-with-height uni-bg-red"},[t._v(t._s(e.name)),t._l(t.play_history,function(e,n){return i("v-uni-button",{key:n,staticClass:"uni-bg-red",attrs:{type:"button"},on:{click:function(e){e=t.$handleEvent(e),t.togglePopup("middle-list")}}},[i("v-uni-image",{staticClass:"image",attrs:{mode:"widthFix",src:"../../static/item.round.jpg"}})],1)}),i("uni-popup",{attrs:{show:"middle-list"===t.type,position:"middle",mode:"fixed"},on:{hidePopup:function(e){e=t.$handleEvent(e),t.togglePopup("")}}},[i("v-uni-scroll-view",{staticClass:"uni-center center-box",attrs:{"scroll-y":"true"}},t._l(t.list,function(e,n){return i("v-uni-view",{key:n},[t._v("我的自不見了 "+t._s(t.list[n]))])}),1)],1)],2)],1):t._e()})],2)],1)],1),0==t.lose&&0==t.if_end?i("v-uni-view",{staticClass:"uni-flex ",staticStyle:{position:"fixed",bottom:"0"}},[i("v-uni-view",[i("v-uni-button",{attrs:{"data-id":"scissors","data-choose":"../../static/scissors.jpeg"},on:{click:function(e){e=t.$handleEvent(e),t.choose(e)}}},[i("v-uni-image",{staticClass:"image",attrs:{mode:"widthFix",src:"../../static/scissors.jpeg"}})],1)],1),i("v-uni-view",[i("v-uni-button",{attrs:{"data-id":"stone","data-choose":"../../static/stone.jpeg"},on:{click:function(e){e=t.$handleEvent(e),t.choose(e)}}},[i("v-uni-image",{staticClass:"image",attrs:{mode:"widthFix",src:"../../static/stone.jpeg"}})],1)],1),i("v-uni-view",[i("v-uni-button",{attrs:{"data-id":"paper","data-choose":"../../static/paper.jpeg"},on:{click:function(e){e=t.$handleEvent(e),t.choose(e)}}},[i("v-uni-image",{staticClass:"image",attrs:{mode:"widthFix",src:"../../static/paper.jpeg"}})],1)],1),i("v-uni-view",[i("v-uni-text",[t._v("")])],1),i("v-uni-view",{staticStyle:{"text-align":"right"}},[i("v-uni-button",[i("v-uni-image",{staticClass:"image",attrs:{mode:"widthFix",src:t.pic}})],1),1==t.submit_button_show?i("v-uni-button",{on:{click:function(e){e=t.$handleEvent(e),t.play(e)}}},[i("v-uni-text",{staticStyle:{height:"20upx"}},[t._v("submit")])],1):t._e()],1)],1):t._e(),1==t.lose&&0==t.if_end?i("v-uni-view",[t._v("you lose ,please wait until next round"),i("v-uni-button",{on:{click:function(e){e=t.$handleEvent(e),t.demo_play(e)}}},[i("v-uni-text",{staticStyle:{height:"20upx"}},[t._v("其他四人猜拳")])],1)],1):t._e(),1==t.if_end?i("v-uni-view",[i("v-uni-button",{on:{click:function(e){e=t.$handleEvent(e),t.back_to_homepage(e)}}},[i("v-uni-text",{staticStyle:{height:"20upx"}},[t._v("回首頁")])],1)],1):t._e()],1)},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},"90df":function(t,e,i){"use strict";i.r(e);var n=i("4ee4"),o=i("43c2");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("b977");var s=i("2877"),l=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"4b1b6d72",null);e["default"]=l.exports},b977:function(t,e,i){"use strict";var n=i("0ddf"),o=i.n(n);o.a}}]);