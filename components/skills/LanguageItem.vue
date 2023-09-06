<template>
    <div class="hexagon-filter">
        <div class="hexagon-cell d-flex flex-wrap justify-content-center align-items-center">
            <div class="show-cell">
                <img :src="value.skillImage" class="" alt="" />
            </div>
            <div class="hover-cell d-flex flex-column justify-content-center align-items-center">
                <span class="text title white academic-title">{{ value.skillTitle }}</span>
                <span class="text white academic-date">{{ value.skillKnowledge }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    value: {
        type: Object,
        required: true,
    },
})

onMounted(() => {
    var element = document.querySelectorAll('.hexagon-cell')

    element.forEach(function (element) {
        var elementHeight = element.offsetWidth
        element.style.height = `${elementHeight}px`
    })
})
</script>
