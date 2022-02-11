<script setup lang="ts">
import { ref, defineComponent, Ref, onMounted } from "vue"
import { NMenu, NLayout, NLayoutSider, NAffix } from "naive-ui"
import { menuOption } from "@/cfg"
import introduce from "@/assets/md/introduce.md"


let md = ref(introduce)

onMounted(async () => {
    console.log(introduce);
})

</script>
<style lang="scss">
</style>
<template>
    <div>
        <n-layout has-sider>
            <n-layout-sider content-style="padding: 24px;">
                <n-affix :trigger-top="10">
                    <h1>xps-electron-vue-template</h1>
                    <n-menu
                        dropdown-placement="right-start"
                        :default-expand-all="true"
                        :options="menuOption"
                    />
                </n-affix>
            </n-layout-sider>
            <n-layout>
                <div style="display: flex;justify-content: center;">
                    <md></md>
                </div>
            </n-layout>
        </n-layout>
        <div></div>
    </div>
</template>