<script setup lang="ts">
import { ref, getCurrentInstance, onMounted } from "vue";
import { Check, X } from "lucide-vue-next"
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import HomeTitle from "../components/HomeTitle.vue";
import LucideIcon from '../components/LucideIcon.vue'
import yaml from 'js-yaml';

const activeIndex = ref<number | null>(null);

const {proxy} = getCurrentInstance()

function toggleAccordion(index: number) {
    activeIndex.value = activeIndex.value === index ? null : index;
}

const faqs = ref([]);
const features = ref([]);

onMounted(async () => {
    const response = await fetch('/src/config.yaml');
    const yamlText = await response.text();
    const config = yaml.load(yamlText);
    features.value = config.features;
    faqs.value = config.faqs;
});
</script>

<template>
    <Header />
    <div class="m-auto md:w-full lg:max-w-7xl min-h-screen flex flex-col">
        <section class="w-full">
            <div class="lg:max-w-screen-2xl mt-6 md:mt-12">
                <div class="text-center space-y-6 md:space-y-8">
                    <span class="text-sm inline-block">
                        <span class="mr-2 px-4 py-2 rounded-full bg-purple-600 text-white">{{ proxy.app_badge }}</span>
                    </span>

                    <div class="max-w-screen-md mx-auto text-center text-xl md:text-6xl font-bold px-4">
                        <h1>
                            <span class="text-transparent px-2 bg-gradient-to-r from-[#66f00a] to-[#d29df3] bg-clip-text">
                                {{ proxy.app_hero_title }}
                            </span>
                        </h1>
                    </div>

                    <p class="text-gray-700 dark:text-slate-100 text-xl">
                        {{ proxy.app_hero_description }}
                    </p>

                    <div class="py-4 md:py-6">
                        <button class="w-48 md:w-60 py-3 text-white font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-purple-500 hover:to-purple-200 rounded-lg shadow-lg group">
                            Get Started
                            <span class="size-5 ml-2 inline-block transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <!-- Features section -->
        <section id="features" class="mt-6 md:mt-12 px-4">
            <div class="container mx-auto">
                <HomeTitle>{{ features.title }}</HomeTitle>
                <h3 class="text-xl md:text-3xl text-center mb-3 md:mb-4 text-gray-700 dark:text-gray-200">
                    {{ features.subtitle }}
                </h3>
                <p class="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 md:mb-16 text-sm md:text-base">
                    {{ features.description }}
                </p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mt-6 md:mt-10">
                    <div v-for="feature in features.items" :key="feature.title" 
                        class="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                        <div class="absolute -top-6 left-8">
                            <div :class="['bg-gradient-to-br', feature.gradient, 'p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300']">
                                <LucideIcon :name="feature.icon" class="w-6 h-6 text-white"/>
                            </div>
                        </div>
                        <div class="mt-8">
                            <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">{{ feature.title }}</h3>
                            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {{ feature.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="pricing" class="mt-6 md:mt-12 px-4">
            <div class="container mx-auto">
                <HomeTitle>Choose Your Plan</HomeTitle>
                <p class="text-gray-600 dark:text-gray-300 text-center mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
                    Select the perfect plan for your needs
                </p>
                <div class="max-w-6xl mx-auto">
                    <div class="flex justify-center items-center mb-10">
                            <button 
                            class="px-6 py-3 rounded-full font-medium transition-all duration-200 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            Monthly Subscription
                        </button>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="relative bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform duration-300">
                            <div class="absolute -top-4 right-4">
                                <span class="bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 px-4 py-1 rounded-full text-sm font-medium">
                                    Free
                                </span>
                            </div>
                            <div class="mt-4 text-primary">
                                <h3 class="text-2xl font-bold mb-4">Starter</h3>
                                <div class="mb-8">
                                    <span class="text-4xl font-bold">$0</span>
                                    <span class="text-gray-500 dark:text-gray-400">/month</span>
                                </div>
                                <ul class="space-y-4 mb-8">
                                    <li class="flex items-center">
                                        <Check class="w-5 h-5 text-emerald-500 mr-2" />
                                        3 links with 1k clicks
                                    </li>
                                    <li class="flex items-center">
                                        <X class="w-5 h-5 mr-2"/>
                                        Visual statistics
                                    </li>
                                </ul>
                                <button class="w-full py-3 px-6 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors duration-200">
                                    Get Started
                                </button>
                            </div>
                        </div>

                        <!-- Pro Plan -->
                        <div class="relative bg-gradient-to-br from-emerald-400 to-teal-400 dark:bg-gradient-to-br dark:from-emerald-600 dark:to-teal-600 rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
                            <div class="absolute -top-4 right-4">
                                <span class="bg-white text-emerald-600 px-4 py-1 rounded-full text-sm font-medium">
                                    Most Popular
                                </span>
                            </div>
                            <div class="mt-4">
                                <h3 class="text-2xl font-bold text-white mb-4">Pro</h3>
                                <div class="mb-8">
                                    <span class="text-4xl font-bold text-white">$39</span>
                                    <span class="text-emerald-100">/month</span>
                                </div>
                                <ul class="space-y-4 mb-8 text-white">
                                    <li class="flex items-center">
                                        <Check class="w-5 h-5 mr-2" />
                                        100 links with 10k clicks
                                    </li>
                                    <li class="flex items-center">
                                        <X class="w-5 h-5 mr-2"/>
                                        Visual statistics
                                    </li>
                                </ul>
                                <button class="w-full py-3 px-6 rounded-lg bg-white text-emerald-600 font-medium hover:bg-emerald-50 transition-colors duration-200">
                                    Get Started
                                </button>
                            </div>
                        </div>

                        <div class="relative bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform duration-300">
                            <div class="absolute -top-4 right-4">
                                <span class="bg-white text-emerald-600 px-4 py-1 rounded-full text-sm font-medium dark:bg-emerald-900">
                                    Most Powerful
                                </span>
                            </div>
                            <div class="mt-4 text-primary">
                                <h3 class="text-2xl font-bold mb-4">Plus</h3>
                                <div class="mb-8">
                                    <span class="text-4xl font-bold">$99</span>
                                    <span class="text-gray-500 dark:text-gray-400">/month</span>
                                </div>
                                <ul class="space-y-4 mb-8">
                                    <li class="flex items-center">
                                        <Check class="w-5 h-5 text-emerald-500 mr-2" />
                                        1k links with unlimited clicks
                                    </li>
                                    <li class="flex items-center">
                                        <Check class="w-5 h-5 text-emerald-500 mr-2" />
                                        Visual statistics
                                    </li>
                                </ul>
                                <button class="w-full py-3 px-6 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors duration-200">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section id="faq" class="mt-6 md:mt-12 px-4">
            <div class="container mx-auto">
                <HomeTitle>FAQs</HomeTitle>
                <div class="mx-auto mt-6 md:mt-8">
                    <div
                        v-for="(faq, index) in faqs"
                        :key="faq.question"
                        class="border-t border-default py-2 px-4"
                    >
                        <button
                            @click="toggleAccordion(index)"
                            class="w-full flex justify-between text-default items-center py-4 text-left text-lg 
                                font-semibold focus:outline-none"
                        >
                            <span :class="activeIndex === index ? 'text-emerald-400': ''">{{ faq.question }}</span>
                            <span>
                                <svg
                                    :class="{ 'rotate-180': activeIndex === index }"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6 transform transition-transform duration-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </span>
                        </button>
                        <div
                            v-show="activeIndex === index"
                            class="text-default pb-4 transition-all duration-300"
                        >
                            {{ faq.answer }}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
    </div>  
</template>