<template>
    <div class="pages inc-page">
        <IncBanner />
        <div class="inc-image-banner">
            <img src="@/assets/image/uiux/incbanner.png" alt="incbanner" />
        </div>

        <div class="inc-modal d-flex justify-content-center align-items-center" @click="closeModal()">
            <div class="inc-modal-inner">
                <div class="icon-close">
                    <SvgsClose />
                </div>

                <div class="inc-modal-content d-flex flex-column justify-content-center align-items-center">
                    <span class="text modalops">Oops</span>
                    <span class="text modaltitle">This project is still under construction</span>
                    <span class="text modaloption">Would you like to return home or keep going?</span>
                    <div class="inc-modal-buttons d-flex justify-content-center align-items-center">
                        <NuxtLink to="/" class="text home d-flex justify-content-center align-items-center">Home</NuxtLink>
                        <NuxtLink to="/About" class="text about d-flex justify-content-center align-items-center">Keep going</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
function closeModal() {
    const element = document.querySelector('.inc-modal')

    element.classList.add('showHide')
}
onMounted(() => {
    document.body.classList.add('inc-page-activy')
})

onBeforeUnmount(() => {
    document.body.classList.remove('inc-page-activy')
})
</script>
