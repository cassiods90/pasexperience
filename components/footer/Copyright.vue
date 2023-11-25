<template>
    <div class="copyright d-flex flex-column justify-content-center align-items-start">
        <NuxtLink to="/" class="text small-text text-color02"> pasexperience &copy; {{ currentYear }} </NuxtLink>
    </div>
</template>

<script setup>
const currentYear = new Date().getUTCFullYear()
</script>
