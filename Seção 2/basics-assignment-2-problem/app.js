const app = Vue.createApp({
  data() {
    return {
      firstInput: "",
      secondInput: "",
    };
  },
  methods: {
    showAlert(event) {
      alert("This is working!");
    },
    setFirst(event) {
      this.firstInput = event.target.value;
    },
    setSecond() {
      this.secondInput = this.firstInput;
    },
  },
});

app.mount("#assignment");
