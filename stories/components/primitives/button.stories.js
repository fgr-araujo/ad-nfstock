import { storiesOf } from "@storybook/vue";
import FullBanner from '../../../src/components/full-banner/full-banner';

storiesOf("Primitves/button", module)
  .add("Success", () => ({
    template: `
      <section style="background-color: #F9F9F9; width: 100%; height: 100%;">
        <fieldset style="width: 400px; padding: 3em;">
        <legend>Normal</legend>
          <button
            class="button -success">
            Success Button
          </button>
        </fieldset>

        <fieldset style="width: 400px; padding: 3em;">
          <button
            class="button -success -busy">
            Success Button
          </button>
        </fieldset>

        <fieldset style="width: 400px; padding: 3em;">
          <button
            class="button -success -busy"
            disabled>
            Success Button
          </button>
        </fieldset>
      </section>
    `
  }))
  .add("Danger", () => ({
    components: { FullBanner },
    template: `
    <section style="background-color: #F9F9F9; width: 100%; height: 100%;">
        <fieldset style="width: 400px; padding: 3em;">
        <legend>Normal</legend>
          <button
            class="button -danger">
            Success Button
          </button>
        </fieldset>

        <fieldset style="width: 400px; padding: 3em;">
          <button
            class="button -danger -busy">
            Success Button
          </button>
        </fieldset>

        <fieldset style="width: 400px; padding: 3em;">
          <button
            class="button -danger -busy"
            disabled>
            Success Button
          </button>
        </fieldset>
      </section>
  `
  }))
  .add("Primary", () => ({
    components: { FullBanner },
    template: `
    <section style="background-color: #F9F9F9; width: 100%; height: 100%;">
        <fieldset style="width: 400px; padding: 3em;">
        <legend>Normal</legend>
          <button
            class="button -primary">
            Success Button
          </button>
        </fieldset>

        <fieldset style="width: 400px; padding: 3em;">
          <button
            class="button -primary -busy">
            Success Button
          </button>
        </fieldset>

        <fieldset style="width: 400px; padding: 3em;">
          <button
            class="button -primary -busy"
            disabled>
            Success Button
          </button>
        </fieldset>
      </section>
  `
  }))
  .add("Warning", () => ({
    components: { FullBanner },
    template: `
    <section style="background-color: #F9F9F9; width: 100%; height: 100%;">
        <fieldset style="width: 400px; padding: 3em;">
        <legend>Normal</legend>
          <button
            class="button -warning">
            Success Button
          </button>
        </fieldset>

        <fieldset style="width: 400px; padding: 3em;">
          <button
            class="button -warning -busy">
            Success Button
          </button>
        </fieldset>

        <fieldset style="width: 400px; padding: 3em;">
          <button
            class="button -warning -busy"
            disabled>
            Success Button
          </button>
        </fieldset>
      </section>
  `
  }))
  .add("Ghost", () => ({
    components: { FullBanner },
    template: `
    <section style="background-color: #333; width: 100%; height: 100%;">
        <fieldset style="width: 400px; padding: 3em;">
        <legend>Normal</legend>
          <button
            class="button -ghost">
            Success Button
          </button>
        </fieldset>

        <fieldset style="width: 400px; padding: 3em;">
          <button
            class="button -ghost -busy">
            Success Button
          </button>
        </fieldset>

        <fieldset style="width: 400px; padding: 3em;">
          <button
            class="button -ghost -busy"
            disabled>
            Success Button
          </button>
        </fieldset>
      </section>
  `
  }))

  // < i class="fas fa-hourglass-half" ></i >
