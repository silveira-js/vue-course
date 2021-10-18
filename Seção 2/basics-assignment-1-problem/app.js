const app = Vue.createApp({
  data() {
    return {
      myAge: 25,
      myName: "Josué Silveira",
      imgLink: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
      preValue: "placehold",
    };
  },
  methods: {
    outputGoal() {
      return Math.random();
    },
    calculateAge() {
      return this.myAge + 5;
    },
  },
});

app.mount("#assignment");
