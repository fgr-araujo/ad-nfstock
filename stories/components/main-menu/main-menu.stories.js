import { storiesOf } from "@storybook/vue";
import { linkTo } from "@storybook/addon-links";
import MainMenu from '../../../src/components/main-menu/main-menu';
import '../../../src/styles/main.scss';

storiesOf("MainMenu", module)
  .add("default", () => ({
    components: { MainMenu },
    template: '<main-menu />'
  })
);
