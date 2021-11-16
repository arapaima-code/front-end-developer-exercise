<template>
  <b-container>
    <b-row class="my-5">
      <b-col>
        <h1>Company Inc.</h1>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="pricing">Pricing</NuxtLink>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <Nuxt />
      </b-col>
    </b-row>
        <b-modal id="modal-1" title="New Plan Selected">
      <p v-if="planChoice">You have chosen: <span class="font-weight-bold">{{planChoice}}</span></p>
      <p v-else>No plan selected</p>
  </b-modal>
  </b-container>

</template>

<script>
export default {
  name: 'Default',
   props: {},
  computed: {
      planChoice(){ return this.$store.getters.chosenPlan
      }
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
// link styling
a{
  &.nuxt-link-exact-active {
    font-weight:bold;
  }
}
</style>
