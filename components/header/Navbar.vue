<template>
    <div class="header">
        <div class="nav-menu d-flex justify-content-center align-items-center">
            <NuxtLink class="header-menu-item text text-color03 uppercase" to="/" @click="setSubmenuFalse">Home</NuxtLink>
            <div class="">
                <span
                    class="header-menu-item text text-color03 uppercase"
                    :class="{ 'router-link-active router-link-exact-active': submenu.getToggleSubmenu }"
                    >UX / UI Work</span
                >
                <div class="submenu d-flex justify-content-center align-items-start">
                    <NuxtLink class="header-menu-item text text-color03 uppercase" to="/agency" @click="setSubmenuTrue">
                        <div class="header-menu-item-inner d-flex justify-content-start align-items-center">
                            <div class="header-menu-item-image d-flex flex-column justify-content-center align-items-center">
                                <img src="@/assets/image/home/agency.png" alt="Agency" />
                            </div>

                            <div class="header-menu-item-content d-flex flex-column justify-content-center align-items-start">
                                <span class="text header-tumbsSubtitle text-color01">Match with <br />Creatives</span>
                                <span class="line"></span>
                                <span class="text header-tumbstitle text-color01"
                                    >Agency <br />
                                    Mobile</span
                                >
                            </div>
                        </div>
                    </NuxtLink>

                    <NuxtLink class="header-menu-item text text-color03 uppercase" to="/mapping" @click="setSubmenuTrue">
                        <div class="header-menu-item-inner d-flex justify-content-start align-items-center">
                            <div class="header-menu-item-image d-flex flex-column justify-content-center align-items-center">
                                <img src="@/assets/image/home/mapping.png" alt="Mapping" />
                            </div>

                            <div class="header-menu-item-content d-flex flex-column justify-content-center align-items-start">
                                <span class="text header-tumbsSubtitle text-color01">Map your <br />Career</span>
                                <span class="line"></span>
                                <span class="text header-tumbstitle text-color01"
                                    >Mapping <br />
                                    (LinkedIn feature)</span
                                >
                            </div>
                        </div>
                    </NuxtLink>

                    <NuxtLink class="header-menu-item text text-color03 uppercase" to="/youtube" @click="setSubmenuTrue">
                        <div class="header-menu-item-inner d-flex justify-content-start align-items-center">
                            <div class="header-menu-item-image d-flex flex-column justify-content-center align-items-center">
                                <img src="@/assets/image/home/youtube.png" alt="Youtube" />
                            </div>

                            <div class="header-menu-item-content d-flex flex-column justify-content-center align-items-start">
                                <span class="text header-tumbsSubtitle text-color01">Youtube<br />Premium</span>
                                <span class="line"></span>
                                <span class="text header-tumbstitle text-color01">Subs & Ad-blockers <br />Onboarding</span>
                            </div>
                        </div>
                    </NuxtLink>
                </div>
            </div>

            <NuxtLink class="header-menu-item text text-color03 uppercase" to="/about" @click="setSubmenuFalse">About</NuxtLink>
        </div>
    </div>
</template>

<script setup>
// const submenuActive = ref(false)

import { useSubmenuActive } from '@/stores/counter'

const submenu = useSubmenuActive()

function setSubmenuTrue() {
    submenu.setTrue()
}

function setSubmenuFalse() {
    submenu.setFalse()
}

function setSubmenuToggle() {
    submenu.setToggle()
}
</script>
