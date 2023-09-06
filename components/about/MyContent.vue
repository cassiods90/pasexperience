<template>
    <div class="card-item about-card">
        <div class="about-card-content d-flex flex-column justify-content-between align-items-start">
            <div class="about-me-content d-flex flex-column justify-content-start align-items-start">
                <h1 class="text title white d-flex flex-wrap justify-content-center align-items-center">
                    {{ $t('about.myContent.title') }} <span class="text title white">Cássio Spessatto</span>
                </h1>
                <span class="about-me-text text white">{{ $t('about.myContent.text') }}</span>
            </div>
            <div class="about-me-facts">
                <span class="text subtitle white">{{ $t('about.myContent.moreFactsTitle') }}</span>
                <div class="d-flex justify-content-start align-items-center" v-for="(fact, index) in facts" :key="`fact-item-${index}`">
                    <SvgsIconRightArrow />
                    <span class="text white">{{ fact }}</span>
                </div>
            </div>
            <div class="custon-btn download-btn d-flex justify-content-center align-items-center">
                <a href="/cvcassiospessatto.pdf" target="_blank" class="text white d-flex justify-content-center align-items-center">{{
                    $t('about.myContent.download')
                }}</a>
            </div>
        </div>
    </div>
</template>

<script setup>
const { t, tm } = useI18n()

const factsLang = tm('about.myContent.facts')
const facts = factsLang.map((item) => item.loc.source)
</script>
