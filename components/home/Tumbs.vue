<template>
    <div class="home-tumbs">
        <div class="tumbs-items d-flex flex-wrap justify-content-between align-items-center">
            <NuxtLink to="/agency" @click="setSubmenuTrue" class="tumb-item">
                <div class="tumb-item-content d-flex flex-column justify-content-center align-items-start">
                    <span class="text home-tumbstitle text-color01">Agency | Mobile</span>
                    <span class="text home-tumbsSubtitle text-color01">Match with <br />Creatives</span>
                    <span class="text home-tumbsText text-color03">Helping creatives foster successful relations</span>
                </div>
                <div class="tumb-item-image d-flex flex-column justify-content-center align-items-center">
                    <img src="@/assets/image/home/agency.png" alt="Agency" />
                </div>
            </NuxtLink>

            <NuxtLink to="/mapping" @click="setSubmenuTrue" class="tumb-item">
                <div class="tumb-item-content d-flex flex-column justify-content-center align-items-start">
                    <span class="text home-tumbstitle text-color01">Mapping | Desktop</span>
                    <span class="text home-tumbsSubtitle text-color01">Map your <br />Career</span>
                    <span class="text home-tumbsText text-color03"
                        >Ensuring alignment between today's knowledge supply & tomorrow's market demand</span
                    >
                </div>
                <div class="tumb-item-image d-flex flex-column justify-content-center align-items-center">
                    <img src="@/assets/image/home/mapping.png" alt="Mapping" />
                </div>
            </NuxtLink>

            <NuxtLink to="/youtube" @click="setSubmenuTrue" class="tumb-item">
                <div class="tumb-item-content d-flex flex-column justify-content-center align-items-start">
                    <span class="text home-tumbstitle text-color01">Youtube Premium</span>
                    <span class="text home-tumbsSubtitle text-color01">Subscriptions<br />& Ad-blockers</span>
                    <span class="text home-tumbsText text-color03">Onboarding Case Study </span>
                </div>
                <div class="tumb-item-image d-flex flex-column justify-content-center align-items-center">
                    <img src="@/assets/image/home/youtube.png" alt="Youtube" />
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { useSubmenuActive } from '@/stores/counter'

const submenu = useSubmenuActive()

function setSubmenuTrue() {
    console.log('true')
    submenu.setTrue()
}

function setSubmenuFalse() {
    console.log('false')
    submenu.setFalse()
}

function setSubmenuToggle() {
    submenu.setToggle()
}
</script>
