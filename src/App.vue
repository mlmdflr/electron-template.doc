
<script setup lang="ts">
import { NMessageProvider } from 'naive-ui';
</script>

<style lang="scss">
@import "highlight.js/scss/github-dark.scss";
</style>

<template>
  <n-message-provider placement="top" :max="3">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </n-message-provider>
</template>

  