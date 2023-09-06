<template>
    <div class="card-item academic-item d-flex flex-column justify-content-center align-items-center">
        <div class="academic-item-image">
            <picture>
                <img :src="value.academicImage" :alt="value.academicTitle" />
            </picture>
        </div>
        <div class="academic-item-content">
            <span class="text subtitle white academic-title">{{ value.academicTitle }}</span>
            <span class="text white academic-university">{{ value.academicUniversity }}</span>
            <span class="text white academic-date">{{ value.academicDate }}</span>
            <div class="custon-btn download-btn d-flex justify-content-center align-items-center">
                <a :href="value.academicLink" target="_blank" class="text white d-flex justify-content-center align-items-center academic-link">{{
                    $t('academics.AcademicsDegrees.lookCertificate')
                }}</a>
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
</script>
