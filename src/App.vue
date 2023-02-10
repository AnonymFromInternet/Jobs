<template>
  <MainNav/>
</template>

<script>
  import MainNav from "@/Modules/MainNav/components/MainNav.vue"
  // Возможно это Options API
  export default {
    name: "App",
    components: {
      MainNav,
    },
  }
</script>