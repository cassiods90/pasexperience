<template>
    <div class="home-tumbs">
        <div class="tumbs-items d-flex justify-content-between align-items-center">
            <NuxtLink to="/agency" @click="setSubmenuTrue" class="tumb-item d-flex flex-column justify-content-center align-items-start">
                <span class="text home-tumbstitle white">Mobile | Agency (app)</span>
                <span class="text home-bigtitle white">Match with/ <br />Creatives</span>
                <span class="text home-text white">Helping creatives foster successful relations</span>
            </NuxtLink>

            <NuxtLink to="/mapping" @click="setSubmenuTrue" class="tumb-item d-flex flex-column justify-content-center align-items-start">
                <span class="text home-tumbstitle white">Desktop | Mapping (feat.)</span>
                <span class="text home-bigtitle white">Map your <br />Career</span>
                <span class="text home-text white">Ensuring alignment between today's human resources and tomorrow's market demand</span>
            </NuxtLink>

            <NuxtLink to="/575inc" @click="setSubmenuTrue" class="tumb-item d-flex flex-column justify-content-center align-items-start">
                <span class="text home-tumbstitle white">Visual Design | 575inc</span>
                <span class="text home-bigtitle white">Brand ID +<br />D. System</span>
                <span class="text home-text white">575inc branding op.</span>
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
