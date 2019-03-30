
const state = {
  plans: [
    {
      planName: 'BÁSICO',
      planStyle: '-basic',
      planValue: '24,99',
      planDescriptions: [
        'Até <strong>15.000</strong> impressões/mês',
        'Para empresas que precisam imprimir pequenos volumes'
      ],
      shortDescription: 'Plano 15 mil notas por R$24,99',
      countNotes: 15000,
      price: 2499
    },
    {
      planName: 'RECOMENDADO',
      planStyle: '-ideal',
      planValue: '40,99',
      planDescriptions: [
        'Até <strong>45.000</strong> impressões/mês',
        'Plano recomendado para a maioria das empresas'
      ],
      shortDescription: 'Plano 45 mil notas por R$40,99',
      countNotes: 45000,
      price: 4099
    },
    {
      planName: 'ILIMITADO',
      planStyle: '-unlimited',
      planValue: '69,99',
      planDescriptions: [
        'Quantidade <strong>Ilimitada</strong> de notas por mês',
        'Para empresas que não querem se preocupar com o volume de notas.'
      ],
      shortDescription: 'Plano ilimitado por R$69,99',
      countNotes: 'ILIMITADO',
      price: 6999
    }
  ]
}

const mutations = {}
const actions = {}

const getters = {
  getAllPlans: state => state.plans,
  getPlanById: state => id => state.plans[id]
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}