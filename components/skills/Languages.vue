<template>
    <div>
        <div class="container-fluid">
            <div class="hexagon-cards d-flex justify-content-center align-items-center flex-wrap">
                <div class="col-6 col-md-4 col-lg-3 hexagon-cards-item" v-for="mySkill in mySkills" :key="`mySkill-item-${mySkill.id}`">
                    <SkillsLanguageItem :value="mySkill" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import skill from '@/assets/images/skills/skill'

const { t, tm } = useI18n()

const mySkillsLang = tm('skills.languages')

const mySkills = mySkillsLang.map((skill) => ({
    skillTitle: skill.skillTitle.loc.source,
    skillImage: getCertificateImagePath(skill.skillImage.loc.source),
    skillKnowledge: skill.skillKnowledge.loc.source,
}))

function getCertificateImagePath(name) {
    return skill[name]
}
</script>
