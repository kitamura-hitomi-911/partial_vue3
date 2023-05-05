import { createApp } from "vue";
import { CmnBtn, FormInput } from "./web_components.js";

// customElements.define("cmn-btn", CmnBtn, { extends: "button" });
customElements.define("cmn-btn", CmnBtn);
customElements.define("form-input", FormInput);

const app = createApp({
  data() {
    return {
      inputValue: "Hello Vue!",
    };
  },
  template: "#app-template",
  methods: {
    onClickCreateBtn(e) {
      console.log("★onClickCreateBtn", e);
    },
    onClickOtherBtn(e) {
      console.log("★onClickOtherBtn", e);
    },
    onFocus(e) {
      console.log("★onFocus", e);
    },
    onChange(e) {
      console.log("★onChnage", e);
      this.inputValue = e.detail.value;
    },
  },
});
app.component("CurrentOption", {
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
    <div>CurrentOption</div>
  `,
});
app.mount("#app");
