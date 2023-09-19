<template>
    <div class="header">
        <div class="nav-menu d-flex justify-content-center align-items-center">
            <NuxtLink class="header-menu-item text text-color03 uppercase" to="/" @click="setSubmenuFalse">Home</NuxtLink>
            <div class="">
                <span
                    class="header-menu-item text text-color03 uppercase"
                    :class="{ 'router-link-active router-link-exact-active': submenu.getToggleSubmenu }"
                    >UX / UI Work</span
                >
                <div class="submenu d-flex flex-column justify-content-start align-items-start">
                    <NuxtLink class="header-menu-item text text-color03 uppercase" to="/agency" @click="setSubmenuTrue">Agency</NuxtLink>
                    <NuxtLink class="header-menu-item text text-color03 uppercase" to="/mapping" @click="setSubmenuTrue">Mapping</NuxtLink>
                    <NuxtLink class="header-menu-item text text-color03 uppercase" to="/575inc" @click="setSubmenuTrue">575inc</NuxtLink>
                </div>
            </div>

            <NuxtLink class="header-menu-item text text-color03 uppercase" to="/about" @click="setSubmenuFalse">About</NuxtLink>
        </div>
    </div>
</template>

<script setup>
// const submenuActive = ref(false)

import { useSubmenuActive } from '@/stores/counter'

const submenu = useSubmenuActive()

function setSubmenuTrue() {
    submenu.setTrue()
}

function setSubmenuFalse() {
    submenu.setFalse()
}

function setSubmenuToggle() {
    submenu.setToggle()
}
</script>
