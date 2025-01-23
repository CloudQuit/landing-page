
<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
import { Link, Sun, Moon, AlignJustify, X } from "lucide-vue-next"
import { Dialog, DialogPanel } from '@headlessui/vue'
import ThemeToggle from './ThemeToggle.vue'


const { proxy } = getCurrentInstance()

const isDark = ref(true)

const toggleTheme = () => {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

const initTheme = () => {
    if (localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        isDark.value = true
        document.documentElement.classList.add('dark')
    }
}
initTheme()

const mobileMenuOpen = ref(false)

const isDropdownOpen = ref(false)

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value
}

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#Features' },
    { name: 'Pricing', href: '/#Pricing' },
    { name: 'Contact', href: '/#Contact' },
    { name: 'FAQs', href: '/#FAQs' },
]</script>

<template>
    <header class="top-0 z-50 border-b dark:border-slate-500 dark:bg-neutral-900">
        <nav class="mx-auto flex md:w-full lg:max-w-7xl items-center justify-between" aria-label="Global">
            <div class="flex lg:flex-1 justify-between">
                <router-link to="/" class="m-1.5 p-1.5 flex items-center gap-2">
                    <Link class="bg-primary rounded-lg w-12 h-12 p-2 text-gray-100" />
                    <span class="text-2xl font-semibold dark:text-gray-100 ml-2">{{ proxy.app_name }}</span>
                </router-link>
            </div>
            <div class="hidden lg:flex lg:gap-x-12 mr-10">
                <a
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                    class="text-md font-semibold leading-6 text-gray-900 dark:text-slate-50 hover:text-emerald-500 transition-colors duration-200"
                >
                    {{ item.name }}
                </a>
            </div>

            <ThemeToggle />

            <div class="lg:hidden pr-2">
                <button
                    class="rounded-md p-2 inline-flex items-center justify-center text-gray-700 hover:bg-gray-100 focus:outline-none"
                    @click="mobileMenuOpen = true"  
                >
                    <span class="sr-only">Open menu</span>
                    <AlignJustify class="dark:text-gray-100" aria-hidden="true" />
                </button>
            </div>
        </nav>
        
        <!-- Mobile menu panel -->
        <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-50" />
            <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <router-link to="/" class="-m-1.5 p-1.5 flex items-center justify-between">
                        <Link class="bg-primary rounded-lg w-12 h-12 p-2 text-gray-100" />
                        <span class="ml-2 font-bold text-xl">{{ proxy.app_name  }}</span>
                    </router-link>
                    <div class="flex items-center gap-4">
                        <button
                            type="button"
                            class="rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                            @click="mobileMenuOpen = false"
                        >
                            <X class="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <a
                                v-for="item in navigation"
                                :key="item.name"
                                :href="item.href"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                                @click="mobileMenuOpen = false"
                            >
                                {{ item.name }}
                            </a>
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </header>
</template>
