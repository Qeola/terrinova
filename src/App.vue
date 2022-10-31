<template>
  <RouterView/>
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router';
</script>

<script lang="ts">

  export default {
    name: 'App',
    metaInfo: {
      title: 'Terrinova Group',
      titleTemplate: '%s | Terrinova has figured out a way to create enterprise from solving one of Africa’s most pressing food problems.',
      htmlAttrs: {
        lang: 'en',
        amp: true
      }
    },
  }
</script>

<style lang="scss">
@import "./src/sass/main.scss";

</style>
