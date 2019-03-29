<template>
  <section class="plans-price">
    <div class="plan -basic">
      <h5 class="title">BÁSICO</h5>
      <div class="price">
        <div class="currency">R$</div>
        <div class="value">14,50</div>
        <div class="period">MÊS</div>
      </div>
      <button class="button">Contratar Plano</button>
      <ul class="feature">
        <li class="description">Até <strong>5.000</strong> impressões/mês</li>
        <li class="description">Para empresas que precisam imprimir pequenos volumes</li>
      </ul>
    </div>
    
    <div class="plan -ideal">
      <h5 class="title">RECOMENDADO</h5>
      <div class="price">
        <div class="currency">R$</div>
        <div class="value">14,50</div>
        <div class="period">MÊS</div>
      </div>
      <button class="button">Contratar Plano</button>
      <ul class="feature">
        <li class="description">Até <strong>5.000</strong> impressões/mês</li>
        <li class="description">Plano recomendado para a maioria das empresas</li>
      </ul>
    </div>

    <div class="plan -unlimited">
      <h5 class="title">ÍLIMITADO</h5>
      <div class="price">
        <div class="currency">R$</div>
        <div class="value">14,50</div>
        <div class="period">MÊS</div>
      </div>
      <button class="button">Contratar Plano</button>
      <ul class="feature">
        <li class="description">Até <strong>5.000</strong> impressões/mês</li>
        <li class="description">Para empresas que não querem se preocupar com o volume de notas.</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PlansPrice'
}
</script>