import { storiesOf } from "@storybook/vue";
import FullBanner from '../../../src/components/full-banner/full-banner';

storiesOf("full-banner", module)
  .add("default", () => ({
    components: { FullBanner },
    template: `
      <section style="background-color: #DDD; width: 100%; height: 100%;">
        <full-banner />
      </section>
    `
  })
);
