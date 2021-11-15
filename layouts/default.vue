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
  </b-container>
</template>

<script>
export default {
  name: 'Default',
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
