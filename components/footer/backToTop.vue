<template>
    <div class="back-to-top d-flex flex-column justify-content-center align-items-center">
        <a @click="scrollToTop()" class="top-button d-flex justify-content-center align-items-center">
            <SvgsIconUp />
        </a>
        <!-- <span class="text">Back To Top</span> -->
    </div>
</template>

<script setup>
const scrollToTop = () => {
    const element = document.getElementById('scroll-to-top')
    if (element) {
        element.scrollIntoView('smooth')
    }
}
</script>
