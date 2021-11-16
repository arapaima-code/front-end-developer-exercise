<template>
<div>
  Chosen
  
  <p>{{this.$store.getters.chosenPlan}}</p>
  <p>Counter {{this.$store.getters.count}}</p>
  <b-card-group deck>
    <b-card  header-tag="header" footer-tag="footer" v-for="plan in plans" :key="plan.name">
      <template #header>
        <h6 class="mb-0">{{plan.name}}</h6>
      </template>
      <b-card-text>
        <h4 class="card-title">${{plan.cost}}/mo</h4>
        <ul class="list-unstyled">
          <li v-for="feature in plan.features">{{feature}}</li>
        </ul>
        </b-card-text>
      <b-button v-b-modal.modal-1 href="#" variant="primary" v-bind:title="plan.name" v-on:click="changePlan(plan.name)">{{plan.cta}}</b-button>
    </b-card>
  </b-card-group>
</div>
</template>

<script>
export default {
  name: 'PricingCard',
  props: {},
  computed: {
      plans(){ 
        return this.$store.getters.pricingOptions
        }
  },
  methods: {
      changePlan(newPlan) {
      this.$store.commit('planChange', newPlan )
    }
  },
};

</script>
