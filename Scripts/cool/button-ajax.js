
Vue.component('button-with-ajax', {
    template: '<div><el-button @click="buttonClick" :loading="buttonLoading">从以下URL里随机请求</el-button>\
    <div v-for="url in urls">\
    <div>{{url}}</div>\
    </div>\
    </div>',
    props: ['urls'], 
    data: function () { 
        return { buttonLoading: false }
    },
    methods: {
        buttonClick: function () {
            this.buttonLoading = true
           
            var realUrl = this.urls[parseInt(Math.random() * this.urls.length)]
                        

            var vm = this; 
            axios.get(realUrl)
                .then(function (response) {
                    vm.$emit('api-return', response.data) 
                    vm.buttonLoading = false
                })
        }
    }
})