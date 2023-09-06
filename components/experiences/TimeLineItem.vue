<template>
    <div class="timeline-item d-flex flex-column flex-md-row justify-content-start align-items-start">
        <div class="timeline-item-date">
            <span class="text white">{{ value.jobDate }}</span>
        </div>
        <div class="card-item timeline-item-content">
            <h2 class="text title white">{{ value.jobFunction }}</h2>
            <span class="text subtitle white">{{ value.jobCompany }}</span>
            <span class="timeline-item-text text white">
                <SvgsIconQuoteLeft />
                {{ value.jobDescription }}
                <br />
                <br />
                Languages: {{ value.JobLanguages }}
                <SvgsIconQuoteRight />
            </span>
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
