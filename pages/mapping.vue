<template>
    <div class="pages mapping-page">
        <MappingBanner />
        <div class="container">
            <MappingProblem />
            <MappingSolution />
            <MappingSolutionImage />
            <MappingUnderstandingUser />
            <MappingResearchFindings />
        </div>

        <MappingPotentialSolutions />

        <div class="container">
            <MappingUserPersona />
            <MappingUserPersonaCard />
            <MappingSitemap />
            <MappingSitemapImage />
            <MappingSketches />
            <MappingSketchesItems />
            <MappingLowFidelityPrototypes />
            <MappingLowFidelityPrototypesImage />
            <MappingUserTesting />
            <MappingUserTestingImage />
            <MappingHifiDesignPrototype />
            <MappingHifiDesignPrototypeImage />
            <MappingDevelopmentHandoff />
            <MappingFinalReflections />
            <MappingCarousel />
            <MappingThankYou />
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
    document.body.classList.add('mapping-page-active')
    setTimeout(() => {
        scrollToTop()
    }, 10)

    setTimeout(() => {
        document.body.classList.add('smooth')
    }, 1000)
})

onBeforeUnmount(() => {
    document.body.classList.remove('mapping-page-active')
    document.body.classList.remove('smooth')
})
</script>
