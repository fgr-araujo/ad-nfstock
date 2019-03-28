import { storiesOf } from "@storybook/vue";
import { linkTo } from "@storybook/addon-links";
import HelloWorld from '../../src/components/HelloWorld';

storiesOf("HelloWorld", module).add("to Storybook", () => ({
  components: { HelloWorld },
  template: '<hello-world />',
  methods: { action: linkTo("Button") }
}));
