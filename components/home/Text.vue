<template>
    <div class="home-content d-flex flex-column justify-content-center align-items-center">
        <div class="home-content-text">
            <h1 class="text homeTitle uppercase white d-flex flex-column flex-xl-row justify-content-center align-items-center">
                {{ $t('home.mainText') }}<span class="text homeTitle uppercase white">cássio spessatto</span>
            </h1>
        </div>
        <vueTyperNext
            class="text homeSubTitle white"
            :data="vueTyper"
            :handlerNum="500"
            :typeSpeed="90"
            :typeSpeedLine="100"
            :back="true"
            :backSpeed="60"
            :cursorChar="'|'"
        />
    </div>
</template>

<script setup>
import { vueTyperNext } from 'vue-typer-next'
import 'vue-typer-next/dist/style.css'

const { t, tm } = useI18n()

const homeVueTyper = tm('home.vueTyper')
const vueTyper = homeVueTyper.map((item) => item.loc.source)

// const replace = [
//     "I'm a software engineer with an MBA in project management ...",
//     "I'm a front end developer ...",
//     "I'm always studying and improving my knowledge ...",
//     "And i'm husband and dad !!!",
// ]
</script>
