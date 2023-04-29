import { createApp } from "vue";

const app = createApp({
  data() {
    return {
      message: "Hello Vue!",
    };
  },
  methods: {
    onClickBtn(params) {
      console.log("★", params);
    },
  },
  template: `
    <div>{{ message }}<CmnBtn label="ボタンラベル！" @onClickBtn="onClickBtn" /></div>
  `,
});
app.component("CmnBtn", {
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    onClickBtn(e) {
      console.log(e);
      this.$emit("onClickBtn", "hoge");
    },
  },
  template: `
    <button @click="onClickBtn">{{label}}</button>
  `,
});
app.mount("#app");
/* 
createApp({
  data() {
    return {
      message: "Hello Vue!",
    };
  },
  template: `
    <div>{{ message }}<CmnBtn /></div>
  `,
}).mount("#app"); */
