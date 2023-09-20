<template>
    <div class="pages home-page">
        <div class="container">
            <HomeInfos />
            <HomeTumbs />
        </div>
    </div>
</template>

<script setup>
onMounted(() => {
    document.body.classList.add('home-page-activy')
})

onBeforeUnmount(() => {
    document.body.classList.remove('home-page-activy')
})
</script>
