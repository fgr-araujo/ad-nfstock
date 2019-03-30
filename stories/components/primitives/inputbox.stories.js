import { storiesOf } from "@storybook/vue";
import FullBanner from '../../../src/components/full-banner/full-banner';

storiesOf("Primitves/inputbox", module)
  .add("default", () => ({
    template: `
      <section style="background-color: #F9F9F9; width: 100%; height: 100%;">
        <fieldset style="width: 500px; height: 200px; padding: 3em;">
          <label class="input-label">
            <input
              class="input" type="text"
              value=""
              placeholder="Experiment Text"
              required>
            
            <span class="placeholder">Experiment Text</span>
          
            <div class="iconcontainer">
              <i class="icon fas fa-shield-alt"></i>
            </div>

            <div class="iconcontainer -warning">
              <i class="icon fas fa-exclamation-triangle"></i>
            </div>
          </label>
        </fieldset>
      </section>
    `
  }))
  .add("Warning", () => ({
    template: `
    <section style="background-color: #F9F9F9; width: 100%; height: 100%;">
        <fieldset style="width: 500px; height: 200px; padding: 3em;">
          <label class="input-label -warning">
            <input
              class="input" type="text"
              value=""
              placeholder="Experiment Text"
              required>
            
            <span class="placeholder">Experiment Text</span>
          
            <div class="iconcontainer">
              <i class="icon fas fa-shield-alt"></i>
            </div>

            <div class="iconcontainer -warning">
              <i class="icon fas fa-exclamation-triangle"></i>
            </div>
          </label>
        </fieldset>
      </section>
  `
  }))

  // < span class="label" > Nome da pessoa</span >
  //   <i class="icon fas fa-shield-alt"></i>
  //   <input class="input" type="text" value="Experiment Text">