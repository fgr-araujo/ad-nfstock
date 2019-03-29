import { storiesOf } from "@storybook/vue";
import MainFooter from '../../../src/components/main-footer/main-footer';

storiesOf("main-footer", module)
.add("default", () => ({
    components: { MainFooter },
    template: `
      <section style="background-color: #DDD; width: 100%; height: 100%;">
      <main-footer />
      </section>
    `
  })
);
