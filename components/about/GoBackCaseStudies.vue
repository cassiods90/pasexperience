<template>
    <div class="go-back component-spaces">
        <div class="go-back-inner d-flex flex-column justify-content-start align-items-start">
            <div class="go-back-title title-spaces">
                <div class="line"></div>
                <span class="text title regular text-color01">Go back to Case Studies</span>
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
                    <NuxtLink to="/mapping" class="go-back-card d-flex justify-content-start align-items-center">
                        <div class="go-back-card-image d-flex flex-column justify-content-center align-items-center">
                            <img src="@/assets/image/home/mapping.png" alt="Mapping" />
                        </div>

                        <div target="_blank" class="go-back-card-content d-flex flex-column justify-content-center align-items-start">
                            <span class="text home-tumbstitle semibold text-color01">Map your<br />Career</span>
                            <span class="line"></span>
                            <span class="text subtitle regular text-color01">Mapping<br />(LinkedIn feature)</span>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>
