import { storiesOf } from "@storybook/vue";
import MainMenu from '../../../src/components/main-menu/main-menu';

storiesOf("main-menu", module)
  .add("default", () => ({
    components: { MainMenu },
    template: `
      <section style="background-color: #DDD; width: 100%; height: 300px; padding: 20px;">
        <div style="display: flex; justify-content: flex-end; position: relative; width: 100%; height: 80px; background: #FFF">  
          <main-menu />
        </div>
      </section>
    `
  })
);
