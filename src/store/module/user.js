export default {
    state:{
        uid:'',
        jurisdiction:'',
        img:''
    },
    mutations: {
        getUid: function (state, data) {//获取用户id
            state.uid = data;
        },
        getJurisdiction: function (state, data) {//获取用户权限
            state.jurisdiction = data;
        },
        getImg: function (state, data) {//获取用户权限
            state.img = data;
        },
    },
}
