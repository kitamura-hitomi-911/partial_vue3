export class CmnBtn extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const buttonElm = document.createElement("button");
    // buttonElm.addEventListener("click", this.fireClickedEvent);
    const style = document.createElement("style");
    style.textContent = `
        :host{
          border:1px solid #000;
        }
        button{
          border:1px solid #000;
          border-radius:4px;
        }
        .label{
          color:#f00;
        }
      `;
    const labelElm = document.createElement("span");
    labelElm.setAttribute("class", "label");
    labelElm.textContent = this.getAttribute("label") || "";
    buttonElm.appendChild(style);
    buttonElm.appendChild(labelElm);
    shadowRoot.append(buttonElm);
  }

  static get observedAttributes() {
    return ["label"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("attributeChangedCallback", name, oldValue, newValue);
    if (name === "label") {
      this.updateLabel(newValue);
    }
  }

  updateLabel(label) {
    this.shadowRoot.querySelector(".label").textContent = label;
  }

  fireClickedEvent() {
    console.log("きた");
    const event = new Event("click", {
      /* bubbles: true, */
      composed: true,
    });
    // this.dispatchEvent(event);
  }
}

export class FormInput extends HTMLElement {
  constructor() {
    super();
    this.state = {
      type: this.getAttribute("type") || "text",
      name: this.getAttribute("name") || "",
      value: this.getAttribute("value") || "",
    };
    const shadowRoot = this.attachShadow({ mode: "open" });
    const wrapperElm = document.createElement("div");
    const inputElm = document.createElement("input");
    inputElm.setAttribute("type", this.state.type);
    this.state.name && inputElm.setAttribute("name", this.state.name);
    inputElm.setAttribute("value", this.state.value);
    inputElm.addEventListener("focus", this.fireClickedEvent);
    inputElm.addEventListener("change", this.fireChangeEvent);
    const style = document.createElement("style");
    style.textContent = `
        input{
          padding:4px 8px;
          border:1px solid #000;
          border-radius:0;
        }
        .label{
          color:#f00;
        }
      `;
    wrapperElm.appendChild(style);
    wrapperElm.appendChild(inputElm);
    shadowRoot.append(wrapperElm);
  }

  static get observedAttributes() {
    return ["type", "name", "value"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("attributeChangedCallback", this, name, oldValue, newValue);
    if (name === "type" || name === "name" || name === "value") {
      this.state[name] = newValue;
      this.updateAttribute(name);
    }
  }

  updateAttribute(name) {
    console.log(name);
    this.shadowRoot.querySelector("input").setAttribute(name, this.state[name]);
  }

  fireClickedEvent() {
    console.log("きた");
    const event = new Event("onFocus", {
      /* bubbles: true, */
      composed: true,
    });
    this.dispatchEvent(event);
  }

  fireChangeEvent() {
    const event = new CustomEvent("onChange", {
      composed: true,
      detail: {
        value: this.value,
      },
    });
    this.dispatchEvent(event);
  }
}

export class CmnBtnHoge extends HTMLButtonElement {
  constructor() {
    const self = super();
    console.log(self);
    const style = document.createElement("style");
    style.textContent = `
        :host{
          border:1px solid #000;
        }
        .label{
          color:#f00;
        }
      `;
    const labelElm = document.createElement("span");
    labelElm.setAttribute("class", "label");
    labelElm.textContent = self.getAttribute("label");
    self.appendChild(style);
    self.appendChild(labelElm);
  }
}
