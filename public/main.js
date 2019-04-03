const socket = io.connect("http://localhost:4000");

new Vue({
  el: "#app",
  data: {
    msg: "",
    name: "",
    messages: []
  },
  created() {
    socket.on("chat", data => {
      this.messages.push({
        name: data.name,
        msg: data.msg
      });
    });
  },
  methods: {
    sendMsg() {
      socket.emit("chat", {
        msg: this.msg,
        name: this.name
      });
      this.msg = "";
    }
  }
});
