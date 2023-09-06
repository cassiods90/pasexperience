<template>
    <div class="experiences-timeline">
        <ExperiencesTimeLineItem v-for="myJob in myJobs" :key="`myJob-item-${myJob.id}`" :value="myJob" />
    </div>
</template>

<script setup>
const { t, tm } = useI18n()

const myJobsLang = tm('experience.xpTimeLine.myJobs')

const myJobs = myJobsLang.map((job) => ({
    jobDate: job.jobDate.loc.source,
    jobFunction: job.jobFunction.loc.source,
    jobCompany: job.jobCompany.loc.source,
    jobDescription: job.jobDescription.loc.source,
    JobLanguages: job.jobLanguages.loc.source,
}))
</script>
