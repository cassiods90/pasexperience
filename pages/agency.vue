<template>
    <div class="pages agency-page">
        <AgencyBanner />
        <div class="container">
            <AgencyProblem />
            <AgencySolution />
            <AgencySolutionImage />
            <AgencyUnderstandingUser />
            <AgencyResearchFindings />
            <AgencyKeyInsights />
        </div>

        <AgencyPotentialSolutions />

        <div class="container">
            <AgencyCompetitorResearch />
            <AgencyImpactEffortMatrix />
            <AgencyUserPersona />
            <AgencyUserPersonaCard />
            <AgencySketches />
            <AgencySketchesImage />
            <AgencyLowFidelityPrototypes />
            <AgencyLowFidelityPrototypesImage />
            <AgencyUserTesting />
            <AgencyUserTestingImage />
            <AgencyHifiDesignPrototype />
            <AgencyHifiDesignPrototypeImage />
            <AgencyDevelopmentHandoff />
            <AgencyFinalReflections />
            <AgencyCarousel />
            <AgencyThankYou />
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
    document.body.classList.add('agency-page-active')
    setTimeout(() => {
        scrollToTop()
    }, 10)

    setTimeout(() => {
        document.body.classList.add('smooth')
    }, 1000)
})

onBeforeUnmount(() => {
    document.body.classList.remove('agency-page-active')
    document.body.classList.remove('smooth')
})
</script>
