<template>
    <div class="sidebar-social">
        <div class="sibebar-title">
            <span class="text subtitle white uppercase">{{ $t('sidebar.sideSocialNetworks') }}</span>
        </div>

        <ul class="d-flex justify-content-start align-items-center">
            <li>
                <a href="https://api.whatsapp.com/send?phone=351912421142" target="_blank">
                    <SvgsIconWhats />
                </a>
            </li>

            <li>
                <a href="https://github.com/cassiods90" target="_blank">
                    <SvgsIconGithub />
                </a>
            </li>

            <li>
                <a href="https://www.linkedin.com/in/cassiopossamaispessatto" target="_blank">
                    <SvgsIconLinkedin />
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup></script>
