<template>
    <div class="go-back mapping component-spaces">
        <div class="go-back-inner d-flex flex-column justify-content-start align-items-start">
            <div class="go-back-title title-spaces">
                <div class="line"></div>
                <span class="text title text-color01">Thank you for reading</span>
            </div>

            <div class="go-back-sides d-flex justify-content-between align-items-start">
                <div class="go-back-left">
                    <NuxtLink to="/agency" class="go-back-card d-flex justify-content-start align-items-center">
                        <div class="go-back-card-image d-flex flex-column justify-content-center align-items-center">
                            <img src="@/assets/image/home/agency.png" alt="Agency" />
                        </div>

                        <div class="go-back-card-content d-flex flex-column justify-content-center align-items-start">
                            <span class="text home-tumbstitle semibold text-color01">Match with<br />Creatives</span>
                            <span class="line"></span>
                            <span class="text subtitle regular text-color01">Agency<br />Mobile</span>
                        </div>
                    </NuxtLink>
                </div>
                <div class="go-back-right">
                    <NuxtLink to="/youtube" class="go-back-card d-flex justify-content-start align-items-center">
                        <div class="go-back-card-image d-flex flex-column justify-content-center align-items-center">
                            <img src="@/assets/image/home/youtube.png" alt="youtube" />
                        </div>

                        <div target="_blank" class="go-back-card-content d-flex flex-column justify-content-center align-items-start">
                            <span class="text home-tumbstitle semibold text-color01">Youtube<br />Premium</span>
                            <span class="line"></span>
                            <span class="text subtitle regular text-color01">Subs & Ad-blockers<br />Onboarding</span>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>
