import { storiesOf } from "@storybook/vue";
import MainMenu from '../../../src/components/main-menu/main-menu';

storiesOf("MainMenu", module)
  .add("default", () => ({
    components: { MainMenu },
    template: '<main-menu />'
  })
);
