<script setup lang="ts">
import { ref, defineComponent, Ref, onMounted } from "vue"
import { NMenu, NLayout, NLayoutSider, NLayoutHeader } from "naive-ui"
import { menuOption } from "@/cfg"
import md from "./md/README.md"


onMounted(async () => {
    console.log(md);


})

</script>
<style lang="scss">
</style>
<template>
    <n-layout>
        <n-layout-header bordered>
            <div style="height: 100%; display: flex;justify-content: center;">
                <h1>xps-electron-vue-template</h1>
            </div>
        </n-layout-header>
        <n-layout has-sider>
            <n-layout-sider bordered :native-scrollbar="false">
                <n-menu :default-expand-all="true" :options="menuOption" />
            </n-layout-sider>
            <n-layout>
                <div style="height: 100%; display: flex;justify-content: center;">
                    <md></md>
                </div>
            </n-layout>
        </n-layout>
    </n-layout>
</template>