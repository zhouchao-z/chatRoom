var container = new Vue({
    el: "#container",
    data: {
        name: "",
        sendText: "",
        msgList: [],
        offset: 0,
        limit: 20,
        count:0,
    },
    methods: {
        sendMsg () {
            if(this.name == "" || this.sendText == "") {
                alert("姓名和内容不能为空");
                return;
            }
            axios({
                method: "get",
                url: "/insertChat?name=" + this.name + "&sendText=" + this.sendText
            }).then(function (resp) {
                container.sendText = "";
                axios({
                    //先请求总数，从而的出要offset的值。
                    method: "get",
                    url: "/queryCount",
                }).then(function (resp) {
                    container.count = resp.data.data[0].sum;
                    container.offset = parseInt(container.count) - parseInt(container.limit) <= 0 ? 0:(parseInt(container.count) - parseInt(container.limit));
                    axios({
                        method: "get",
                        url: "/queryChat?offset=" + container.offset + "&limit=" + container.limit
                    }).then(function (resp) {
                        container.msgList = resp.data.data;
                    }).catch(function (resp) {
                        console.log(resp);
                    })
                }).catch(function (resp) {
                    console.log(resp);
                })
            }).catch(function (resp) {
                console.log(resp);
            })
        }
    },
    computed: {

    },
    created () {
        setInterval(function () {
            axios({
                method: "get",
                url: "/queryCount",
            }).then(function (resp) {
                container.count = resp.data.data[0].sum;
                container.offset = parseInt(container.count) - parseInt(container.limit) <= 0 ? 0:(parseInt(container.count) - parseInt(container.limit));
                axios({
                    method: "get",
                    url: "/queryChat?offset=" + container.offset + "&limit=" + container.limit
                }).then(function (resp) {
                    container.msgList = resp.data.data;
                }).catch(function (resp) {
                    console.log(resp);
                })
            }).catch(function (resp) {
                console.log(resp);
            })
        }, 500)
    }
})