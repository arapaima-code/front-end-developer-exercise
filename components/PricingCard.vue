<template>

 <b-row>
   <b-col class="col-lg-4 col-12 mb-5" v-for="plan in plans" :key="plan.name">
    <b-card v-bind:class="{ 'border-primary header-bg-primary': plan.name == chosen }">
      <template #header>
        <h6 class="mb-0">{{plan.name}}</h6>
      </template>
      <b-card-text>
        <h4 class="card-title">${{plan.cost}}/mo</h4>
        <ul class="list-unstyled">
          <li v-for="feature in plan.features" :key="feature">{{feature}}</li>
        </ul>
        </b-card-text>
      <b-button :id="plan.name"  v-b-modal.modal-1 href="#" v-bind:class="{ 'btn-primary text-white': plan.paid }" variant="outline-primary" v-on:click="changePlan(plan.name)">{{plan.cta}}</b-button>
    </b-card>
    </b-col>
 </b-row>
</template>

<script>

export default {
  name: 'PricingCard',
  props: {},
  computed: {
      plans(){ 
        return this.$store.getters.pricingOptions
        },
      chosen(){ 
        return this.$store.getters.chosenPlan
        },
  },
  methods: {
      changePlan(newPlan) {
      this.$store.commit('planChange', newPlan )  
    },
  },
};
</script>

<style lang="scss" scoped>
.header-bg-primary {
  .card-header {
      background-color:$primary;
      color: $white;
  }
}
</style>
