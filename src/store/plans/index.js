import Firebase from 'firebase/app'

const state = {
  userPlan: {
    hiredPlan: null
  },
  plans: [
    {
      planName: 'BÁSICO',
      planStyle: '-basic',
      planValue: '24,99',
      planDescriptions: [
        'Para empresas que precisam imprimir pequenos volumes',
        '<i class="icon -success fas fa-check"></i>Até <strong>15.000</strong> impressões/mês',
        '<i class="icon -danger fas fa-times"></i><strong>Assistência</strong> total 24/7',
        '<i class="icon -danger fas fa-times"></i><strong>Integração</strong> com outros sistemas'
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
        'Plano recomendado para a maioria das empresas',
        '<i class="icon -success fas fa-check"></i>Até <strong>45.000</strong> impressões/mês',
        '<i class="icon -success fas fa-check"></i><strong>Assistência</strong> total 24/7',
        '<i class="icon -danger fas fa-times"></i><strong>Integração</strong> com outros sistemas'
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
        'Para empresas que não querem se preocupar com o volume de notas.',
        '<i class="icon -success fas fa-check"></i>Quantidade <strong>Ilimitada</strong> de notas por mês',
        '<i class="icon -success fas fa-check"></i><strong>Assistência</strong> total 24/7',
        '<i class="icon -success fas fa-check"></i><strong>Integração</strong> com outros sistemas'
      ],
      shortDescription: 'Plano ilimitado por R$69,99',
      countNotes: 'ILIMITADO',
      price: 6999
    }
  ]
}

const starCountRef = null
const actions = {
  saveHiredPlan: ({ rootState }, { planId }) => {
    const userId = rootState.Login.userInformations.uid
    Firebase.database().ref(`users/${userId}`).set({
      planId
    })
  },
  trackUserPlan: ({ commit, rootState }) => {
    const userId = rootState.Login.userInformations.uid
    const starCountRef = Firebase.database().ref(`users/${userId}`);

    starCountRef.on('value', function (snapshot) {
      const userData = snapshot.val()
      if (userData) {
        const { planId } = userData
        commit('hiredPlan', Number(planId))
      }
    });
  },
  untrackUserPlan: ({ commit }) => {
    commit('hiredPlan', null)
    if (starCountRef) {
      starCountRef.off()
    }
  }
}

const mutations = {
  hiredPlan: (state, planId) => state.userPlan.hiredPlan = planId,
}

const getters = {
  getAllPlans: state => state.plans,
  getPlanById: state => id => state.plans[id],
  getHiredPlan: state => state.userPlan.hiredPlan
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}