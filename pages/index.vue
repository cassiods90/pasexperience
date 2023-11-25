<template>
    <div class="pages home-page">
        <div class="container">
            <HomeInfos />
            <HomeTumbs />
        </div>
    </div>
</template>

<script setup>
const scrollToTop = () => {
    const element = document.getElementById('scroll-to-top')
    if (element) {
        element.scrollIntoView('instant')
    }
}

onMounted(() => {
    document.body.classList.add('home-page-active')
    setTimeout(() => {
        scrollToTop()
    }, 10)
})

onBeforeUnmount(() => {
    document.body.classList.remove('home-page-active')
})
</script>
