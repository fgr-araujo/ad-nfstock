import { storiesOf } from "@storybook/vue";
import MainHeader from '../../../src/components/main-header/main-header';

storiesOf("main-header", module)
  .add("default", () => ({
    components: { MainHeader },
    template: `
      <section style="background-color: #DDD; width: 100%; height: 300px; padding: 20px;">
        <div style="display: flex; justify-content: flex-end; position: relative; width: 100%; height: 80px; background: #FFF">  
          <main-header />
        </div>
      </section>
    `
  })
);
