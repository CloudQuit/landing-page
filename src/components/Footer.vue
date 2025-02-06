<template>
    <footer class="border-t mt-10 border-gray-200 dark:border-gray-700" id="contact">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12 md:py-16">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                <!-- Brand Section -->
                <div class="col-span-1 sm:col-span-2 xl:col-span-2">
                    <a href="/" class="flex items-center group">
                        <Link class="bg-emerald-500 rounded-xl w-10 sm:w-12 h-10 sm:h-12 p-2 mr-3 text-white transition-transform group-hover:scale-110"/>
                        <h3 class="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                            {{ proxy.app_name }}
                        </h3>
                    </a>
                    <p class="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-sm">
                        {{ proxy.app_hero_description }}
                    </p>
                </div>

                <!-- Contact Section -->
                <div class="flex flex-col gap-4">
                    <h3 class="font-bold text-base sm:text-lg text-gray-900 dark:text-white">Connect</h3>
                    <div class="flex flex-col space-y-3">
                        <a
                            href="https://www.linkedin.com/company/cloudquit/"
                            target="_blank"
                            class="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors flex items-center"
                        >
                            <Linkedin class="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            LinkedIn
                        </a>
                        <a
                            href="https://x.com/cloudquitcom"
                            target="_blank"
                            class="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors flex items-center"
                        >
                            <Twitter class="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            Twitter
                        </a>
                    </div>
                </div>

                <!-- Help Section -->
                <div class="flex flex-col gap-4">
                    <h3 class="font-bold text-base sm:text-lg text-gray-900 dark:text-white">Support</h3>
                    <div class="flex flex-col space-y-3">
                        <a
                            href="mailto:support@xxx.com"
                            class="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors flex items-center"
                        >
                            <Mail class="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            Contact Us
                        </a>
                        <a
                            href="/#faq" 
                            class="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors flex items-center"
                        >
                            <HelpCircle class="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            FAQ
                        </a>
                    </div>
                </div>
            </div>

            <!-- Bottom Section -->
            <div class="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-700">
                <div class="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    <p>
                        © 2025 powered by 
                        <a
                            href="https://cloudquit.com"
                            target="_blank"
                            class="text-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        >
                            CloudQuit
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { Link, Linkedin, Twitter, Mail, HelpCircle } from "lucide-vue-next"
import { ref, getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance()
</script>
