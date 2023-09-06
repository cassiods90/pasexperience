<template>
    <div>
        <div class="main-title">
            <span class="text bigtitle uppercase white">{{ $t('academics.AcademicsDegrees.title') }}</span>
        </div>

        <div class="academics-items">
            <div class="row justify-content-between align-items-start">
                <div class="col-12 col-lg-12 col-xl-4" v-for="myAcademic in myAcademics" :key="`myAcademic-item-${myAcademic.academicTitle}`">
                    <AcademicsDegreeItem :value="myAcademic" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import certificate from '@/assets/certificates/certificate'

const { t, tm } = useI18n()

const myAcademicsLang = tm('academics.AcademicsDegrees.myAcademics')

const myAcademics = myAcademicsLang.map((academic) => ({
    academicTitle: academic.academicTitle.loc.source,
    academicUniversity: academic.academicUniversity.loc.source,
    academicDate: academic.academicDate.loc.source,
    academicImage: getCertificateImagePath(academic.academicImage.loc.source),
    academicLink: academic.academicLink.loc.source,
}))

function getCertificateImagePath(name) {
    return certificate[name]
}
</script>
