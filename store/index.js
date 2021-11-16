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
};

export const getters = {
  pricingOptions: price => {
    return state.pricingOptions;
  },
  chosenPlan(state) {
    return state.chosenPlan;
  },
};

export const mutations = {
  planChange (state, plan) {
    state.chosenPlan = plan
  },
};
