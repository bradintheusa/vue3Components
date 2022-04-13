import { defineComponent, h } from "vue";
const MyComponent = defineComponent({
  name: "MyComponent",
  props: {},
  setup() {
    return () => h("div", {}, "hello world from MyComponent in my-lib");
  }
});
const install = (app) => {
  app.component(MyComponent.name, MyComponent);
};
MyComponent.install = install;
export { MyComponent, MyComponent as default };
