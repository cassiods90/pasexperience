<template>
    <div class="pages about-page">
        <div class="container">
            <AboutFindMe />
        </div>

        <AboutBanner />

        <div class="container container-less-about">
            <AboutMyInfos />
        </div>

        <div class="container">
            <AboutGoBackCaseStudies />
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
    document.body.classList.add('about-page-active')
    setTimeout(() => {
        scrollToTop()
    }, 10)

    setTimeout(() => {
        document.body.classList.add('smooth')
    }, 1000)
})

onBeforeUnmount(() => {
    document.body.classList.remove('about-page-active')
    document.body.classList.remove('smooth')
})
</script>
