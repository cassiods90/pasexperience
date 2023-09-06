<template>
    <div class="sidebar-contact">
        <div class="sibebar-title">
            <span class="text subtitle white uppercase">{{ $t('sidebar.sideContact.title') }}</span>
        </div>

        <ul>
            <li class="d-flex justify-content-start align-items-center">
                <SvgsIconPerson />
                <span class="text white">{{ $t('sidebar.sideContact.name') }}</span>
            </li>

            <li class="d-flex justify-content-start align-items-center">
                <SvgsIconCitizenship />
                <span class="text white">{{ $t('sidebar.sideContact.citizenship') }}</span>
            </li>

            <li class="d-flex justify-content-start align-items-center">
                <SvgsIconLocal />
                <span class="text white">{{ $t('sidebar.sideContact.local') }}</span>
            </li>

            <li class="d-flex justify-content-start align-items-center">
                <SvgsIconMail />
                <span class="text white">cassiods90@hotmail.com</span>
            </li>

            <li class="d-flex justify-content-start align-items-center">
                <SvgsIconPhone />
                <span class="text white">{{ $t('sidebar.sideContact.phone') }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup></script>
