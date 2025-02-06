<script setup lang="ts">
import * as icons from 'lucide-vue-next'
import { computed } from 'vue'

const props = defineProps<{
    name: string
    size?: string | number
    color?: string
    class?: string
}>()

const Icon = computed(() => icons[props.name as keyof typeof icons])
</script>

<template>
    <component 
        :is="Icon" 
        :size="size" 
        :color="color"
        :class="class"
    />
</template>
