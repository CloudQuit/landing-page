<template>
    <h2 :class="[
            'py-3 md:py-5 text-3xl md:text-6xl text-emerald-400 text-center mb-4 tracking-wider text-shadow',
            customClass
        ]">
    <slot />
</h2>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "FeatureHeading",
    props: {
        customClass: {
            type: String,
            default: "",
        },
    },
});
</script>

<style scoped>
</style>