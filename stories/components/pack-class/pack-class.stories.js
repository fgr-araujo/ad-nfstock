import { storiesOf } from "@storybook/vue";
import PackClass from '../../../src/components/pack-class/pack-class';

storiesOf("pack-class", module)
  .add("default", () => ({
    components: { PackClass },
    template: `
      <section style="background-color: #DDD; width: 100%; height: 100%;">
        <pack-class />
      </section>
    `
  })
);
