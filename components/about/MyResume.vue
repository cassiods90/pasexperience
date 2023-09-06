<template>
    <div class="card-item about-card">
        <div class="about-card-content d-flex justify-content-center align-items-center">
            <div class="about-resume-content d-flex flex-column justify-content-start align-items-start">
                <span class="about-resume-text text white">
                    <SvgsIconQuoteLeft />

                    {{ $t('about.myResume.textTop') }}

                    <br /><br />

                    {{ $t('about.myResume.textBottom') }}

                    <SvgsIconQuoteRight />
                </span>
            </div>
        </div>
    </div>
</template>

<script Setup></script>
