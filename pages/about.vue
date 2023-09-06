<template>
    <div class="pages about-page">
        <div class="main-title">
            <span class="text bigtitle uppercase white">{{ $t('about.aboutMe') }}</span>
        </div>
        <div class="about-cards">
            <div class="row justify-content-around">
                <div class="col-12 col-xl-5">
                    <AboutMyContent />
                </div>
                <div class="col-12 col-xl-5">
                    <AboutMyResume />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>
