<script setup lang="ts">
import { ref, defineAsyncComponent, defineComponent, watch, shallowRef, render } from "vue"
import { NMenu, NLayout, NLayoutSider, NAffix, useMessage } from "naive-ui"
import { menuOption } from "@/cfg"
import { useRoute } from "vue-router";

const route = useRoute()

const mds: string[] = []

for (const muo of menuOption) muo.children.forEach(x => mds.push(x.key))

// 菜单栏key
let menuKey = ref(mds[0])

// all md modules
const modules = import.meta.glob('/src/assets/md/**.md')

// md文件
let Md = shallowRef()

// nmessage
let nmessage = useMessage()

watch(route, (nr, or) => {
    mdChange(nr.params.key as string)
});

let mdChange = (pkey: string) => {
    try {
        const keys = Object.keys(modules)
        if (!pkey) throw new Error('md config error')
        if (!mds.includes(pkey) || mds.length === 0)throw new Error('md not found')
        if (!keys.includes(`/src/assets/md/${pkey}.md`)) throw new Error('md not found')
        else {
            Md.value = defineAsyncComponent(modules[`/src/assets/md/${pkey}.md`])
            menuKey.value = pkey
        }
    } catch (error: any) {
        nmessage.error(error.message)
        Md.value = defineComponent({
            render: () => { }
        })
        menuKey.value = '';
    }
}

mdChange(route.params.key as string)

let menuUpdate = (key: string) => {
    menuKey.value = key
    mdChange(key)
}

</script>
<style lang="scss">
</style>
<template>
    <div>
        <n-layout has-sider>
            <n-layout-sider content-style="padding: 24px;">
                <n-affix :trigger-top="10">
                    <h1>electron-template</h1>
                    <n-menu
                        dropdown-placement="right-start"
                        :default-expand-all="true"
                        :options="menuOption"
                        :value="menuKey"
                        @update-value="menuUpdate"
                    />
                </n-affix>
            </n-layout-sider>
            <n-layout>
                <div style="margin-left: 20%;">
                    <md></md>
                </div>
            </n-layout>
        </n-layout>
        <div></div>
    </div>
</template>