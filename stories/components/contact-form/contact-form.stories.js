import { storiesOf } from "@storybook/vue";
import ContactForm from '../../../src/components/contact-form/contact-form';

storiesOf("contact-form", module)
.add("default", () => ({
    components: { ContactForm },
    template: `
      <section style="background-color: #DDD; width: 100%; height: 100%;">
      <contact-form />
      </section>
    `
  })
);
