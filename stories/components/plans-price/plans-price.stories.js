import { storiesOf } from "@storybook/vue";
import PlansPrice from '../../../src/components/plans-price/plans-price';

storiesOf("plans-price", module)
  .add("default", () => ({
    components: { PlansPrice },
    template: `
      <section style="background-color: #DDD; width: 100%; height: 100%;">
        <plans-price />
      </section>
    `
  })
);
