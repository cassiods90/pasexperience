<template>
    <div>
        <div class="main-title">
            <span class="text bigtitle uppercase white">{{ $t('academics.AcademicsCertificates.title') }}</span>
        </div>

        <div class="certificates-items">
            <div class="row justify-content-between align-items-start">
                <div
                    class="col-12 col-md-6 col-xl-4"
                    v-for="myCertificate in myCertificates"
                    :key="`myCertificate-item-${myCertificate.certificateTitle}`"
                >
                    <AcademicsCertificateItem :value="myCertificate" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import certificate from '@/assets/certificates/certificate'

const { t, tm } = useI18n()

const myCertificatesLang = tm('academics.AcademicsCertificates.myCertificates')

const myCertificates = myCertificatesLang.map((certificate) => ({
    certificateTitle: certificate.certificateTitle.loc.source,
    certificateInstitute: certificate.certificateInstitute.loc.source,
    certificateHours: certificate.certificateHours.loc.source,
    certificateImage: getCertificateImagePath(certificate.certificateImage.loc.source),
    certificateLink: certificate.certificateLink.loc.source,
}))

function getCertificateImagePath(name) {
    return certificate[name]
}
</script>
