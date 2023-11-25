<template>
    <div class="pages youtube-page">
        <YoutubeBanner />

        <div class="youtube-modal d-flex justify-content-center align-items-center">
            <div class="youtube-modal-inner">
                <div class="icon-close" @click="closeModal()">
                    <SvgsClose />
                </div>

                <div class="youtube-modal-content d-flex flex-column justify-content-center align-items-center">
                    <span class="text title">Coming Soon</span>
                    <span class="text">
                        Thank you for your interest! This page is still under construction. Stay tuned for updates. In the meantime, explore our other
                        content.
                    </span>
                    <div class="youtube-modal-buttons d-flex justify-content-center align-items-center">
                        <NuxtLink to="/" class="text home d-flex justify-content-center align-items-center">Home</NuxtLink>
                        <NuxtLink to="/About" class="text about d-flex justify-content-center align-items-center">About</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
function closeModal() {
    const element = document.querySelector('.youtube-modal')

    element.classList.add('showHide')
}
onMounted(() => {
    document.body.classList.add('youtube-page-active')
})

onBeforeUnmount(() => {
    document.body.classList.remove('youtube-page-active')
})
</script>
