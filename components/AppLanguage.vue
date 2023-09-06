<template>
    <div class="lang-menu" :class="{ showHide: isDropdownOpen }">
        <button class="lang-menu-button" type="button" @click.stop="isDropdownOpen = !isDropdownOpen">
            <img :src="lang[currentLocale]" alt="" />
            <SvgsIconDown v-if="!isDropdownOpen" />
            <SvgsIconUp v-else="isDropdownOpen" />
        </button>
        <ul class="lang-menu-dropdown" v-if="isDropdownOpen">
            <a
                v-for="locale in availableLocales"
                :key="locale"
                :class="['dropdown-item', { active: locale === currentLocale }]"
                @click="changeLanguage(locale)"
            >
                <img :src="lang[locale]" alt="" />
            </a>
        </ul>
    </div>
</template>

<script setup>
import lang from '@/assets/images/langs/lang'
import { useI18n } from 'vue-i18n'

const { locale, setLocale, availableLocales } = useI18n()

const isDropdownOpen = ref(false)
const currentLocale = ref(locale.value)

const changeLanguage = (locale) => {
    currentLocale.value = locale
    setLocale(locale)
}

function clickOutside(event) {
    if (isDropdownOpen.value) {
        const dropdown = document.querySelector('.lang-menu-dropdown')
        const target = event.target

        if (!dropdown.contains(target) && target !== dropdown && target.parentNode !== dropdown.parentNode) {
            isDropdownOpen.value = false
        }
    }
}

onMounted(() => {
    document.addEventListener('click', clickOutside)
    // currentLocale.value = import.meta.env.VITE_DEFAULT_LOCALE || 'en'
})
</script>
