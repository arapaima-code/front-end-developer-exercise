export const state = {
  pricingOptions: [
    {
      name: 'Free',
      cost: 0,
      features: [
        '10 users included',
        '2 GB of storage',
        'Email support',
        'Help center access',
      ],
      cta: 'Sign up for free',
      paid: false,
    },
    {
      name: 'Pro',
      cost: 15,
      features: [
        '20 users included',
        '10 GB of storage',
        'Priority email support',
        'Help center access',
      ],
      cta: 'Get started',
      paid: true,
    },
    {
      name: 'Enterprise',
      cost: 29,
      features: [
        '30 users included',
        '15 GB of storage',
        'Phone and email support',
        'Help center access',
      ],
      cta: 'Contact us',
      paid: true,
    },
  ],
  chosenPlan: null,
  count: 10
};

export const getters = {
 /* pricingOptions(state) {
    return state.pricingOptions;
  }, */
  pricingOptions: price => {
    return state.pricingOptions;
  },
  chosenPlan(state) {
    return state.chosenPlan;
  }, 
  count(state){
    return state.count
  }
};

export const mutations = {
  increase(state) {
    state.count++;
  },

  planChange (state, plan) {
    state.count = plan
  }
};
