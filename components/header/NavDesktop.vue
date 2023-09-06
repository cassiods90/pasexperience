<template>
    <div class="header-desktop d-none d-lg-block">
        <div class="nav-menu d-flex flex-column flex-md-row justify-content-center align-items-center">
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
const localPath = useLocalePath()
</script>
