<template>
  <section class="pack-class">
    <h2 class="title">Tecnologia</h2>
    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quis labore! Maxime voluptate aut impedit nisi delectus unde, ipsum doloribus odit aliquam consequatur sapiente harum id soluta quis amet eligendi.</p>

    <form action="">
    <fieldset>
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

    </form>
  </section>
</template>

<script>
export default {
  name: 'PackClass'
}
</script>