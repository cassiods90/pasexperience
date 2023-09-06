<template>
    <div class="particles-background"></div>
</template>

<script setup>
import { themeColor } from '@/stores/themeColor'
const colorSelected = themeColor()

onMounted(() => {
    colorSelected.ballsRandom()
})
</script>

<style></style>
