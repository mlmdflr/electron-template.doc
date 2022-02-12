<template>
  <n-message-provider placement="top" :max="3">
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'" mode="out-in">
        <keep-alive
          :include="keepAliveData.include"
          :exclude="keepAliveData.exclude"
          :max="keepAliveData.max"
          :key="route.meta['usePathKey'] ? route.path : undefined"
        >
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </n-message-provider>
</template>
<script setup lang="ts">
import { keepAliveData } from '@/store';
import { NMessageProvider } from 'naive-ui';
</script>
<style lang="scss">
</style>
  