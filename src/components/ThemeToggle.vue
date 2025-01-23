<script setup lang="ts">
import { ref } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'

const isDark = ref(false)

const toggleTheme = () => {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}
</script>

<template>
    <button @click="toggleTheme" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        <Sun v-if="!isDark" class="w-5 h-5 text-yellow-500" />
        <Moon v-else class="w-5 h-5 text-blue-500" />
    </button>
</template>