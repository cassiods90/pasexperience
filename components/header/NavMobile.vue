<template>
    <div class="header-mobile d-block d-lg-none">
        <div class="header-menu d-flex d-lg-none justify-content-center align-items-center" @click="menuToggle = !menuToggle">
            <SvgsIconMenu />
        </div>
        <div
            class="nav-menu mobile d-flex flex-column justify-content-center align-items-center"
            :class="{ show: menuToggle }"
            @click="menuToggle = !menuToggle"
        >
            <NuxtLink class="header-menu-item text header-title white uppercase" :to="localPath('/')">{{ $t('navbar.home') }}</NuxtLink>
            <NuxtLink class="header-menu-item text header-title white uppercase" :to="localPath('/about')">{{ $t('navbar.about') }}</NuxtLink>
            <NuxtLink class="header-menu-item text header-title white uppercase" :to="localPath('/experiences')">{{
                $t('navbar.experiences')
            }}</NuxtLink>
            <NuxtLink class="header-menu-item text header-title white uppercase" :to="localPath('/academics')">{{ $t('navbar.academics') }}</NuxtLink>
            <NuxtLink class="header-menu-item text header-title white uppercase" :to="localPath('/skills')">{{ $t('navbar.skills') }}</NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
const menuToggle = ref(false)
const localPath = useLocalePath()
</script>
