<template>
    <div class="card-item certificates-item d-flex flex-column justify-content-center align-items-center">
        <div class="certificates-item-image">
            <picture>
                <img :src="value.certificateImage" :alt="value.academicTitle" />
            </picture>
        </div>

        <div class="certificates-item-content">
            <span class="text subtitle white certificates-title">{{ value.certificateTitle }}</span>
            <span class="text white certificates-institute">{{ value.certificateInstitute }}</span>
            <span class="text white certificates-hours">{{ value.certificateHours }}</span>
            <div class="custon-btn download-btn d-flex justify-content-center align-items-center">
                <a :href="value.certificateLink" target="_blank" class="text white d-flex justify-content-center align-items-center certificates-link"
                    >{{ $t('academics.AcademicsCertificates.lookCertificate') }}
                </a>
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
