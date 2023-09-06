<template>
    <div class="sidebar">
        <div class="sidebar-profile d-block d-lg-none" @click="menuToggle = !menuToggle">
            <SvgsIconProfile />
        </div>

        <div class="sidebar-desktop show d-none d-lg-block">
            <SidebarSideImage />
            <SidebarSideContact />
            <SidebarSideSocialNetworks />
            <SidebarSideLink />
        </div>

        <div class="sidebar-mobile d-block d-lg-none">
            <div class="sidebar-content" :class="{ show: menuToggle }">
                <SidebarSideImage />
                <SidebarSideContact />
                <SidebarSideSocialNetworks />
                <SidebarSideLink />
            </div>
        </div>
    </div>
</template>

<script setup>
const menuToggle = ref(false)
</script>
