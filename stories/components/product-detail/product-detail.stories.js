import { storiesOf } from "@storybook/vue";
import ProductDetail from '../../../src/components/product-detail/product-detail';

storiesOf("product-detail", module)
  .add("default", () => ({
    components: { ProductDetail },
    template: `
      <section style="background-color: #DDD; width: 100%; height: 100%;">
        <product-detail />
      </section>
    `
  })
);
