<template>
    <header class="w-full text-sm">
        <div class="fixed top-0 left-0 w-full h-16 bg-white">
          <div class="flex flex-nowrap h-full border-b border-solid border-brand-main-background-color-1 px-8 mx-auto">
            <a href="/" class="flex h-full items-center text-xl">{{ companyName }}</a>
          </div>
        </div>
    </header>
</template>

<script>
// Options API
export default {
  name: "MainNav",
  data() {
   return {
     companyName: "Career Agency",
   }
  },
  methods() {
    return {

    }
  },
}
</script>

<style scoped>

</style>