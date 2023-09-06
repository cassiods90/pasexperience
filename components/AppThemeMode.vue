<template>
    <div class="theme-mode">
        <div class="theme-mode-menu d-block d-lg-none" @click="menuToggle = !menuToggle">
            <SvgsIconTheme />
        </div>
        <div class="theme-colors" :class="{ show: menuToggle }">
            <div class="theme-colors-title d-flex justify-content-center align-items-center">
                <span class="text bold white">{{ $t('themeColor') }}</span>
            </div>
            <ul class="d-flex justify-content-center align-items-center">
                <li class="blue" @click="themeMode('blue')"></li>
                <li class="pink" @click="themeMode('pink')"></li>
                <li class="green" @click="themeMode('green')"></li>
                <li class="yellow" @click="themeMode('yellow')"></li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { themeColor } from '@/stores/themeColor'
const colorSelected = themeColor()

const menuToggle = ref(false)

function themeMode(value) {
    var body = document.querySelector('body')

    body.classList.remove('blue-theme', 'pink-theme', 'green-theme', 'yellow-theme')
    body.classList.add(`${value}-theme`)

    colorSelected.changeColor(value)
    const homePageElement = document.querySelector('.home-page')
    if (homePageElement) {
        colorSelected.ballsRandom()
    }
}

onMounted(() => {
    document.querySelector('body').classList.add('blue-theme')

    const homePageElement = document.querySelector('.home-page')
    if (homePageElement) {
        colorSelected.ballsRandom()
    }
})
</script>
