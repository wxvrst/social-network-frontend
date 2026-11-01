<script setup lang="ts">
import Github from "@primeicons/vue/github";
import Telegram from "@primeicons/vue/telegram";
import Code from "@primeicons/vue/code";
import type { Link } from "@/shared/types/types";

const stack: Link[] = [
	{
		label: "Vue 3",
		href: "https://vuejs.org/",
	},
	{
		label: "Hono",
		href: "https://hono.dev/",
	},
	{
		label: "Vite",
		href: "https://vite.dev/",
	},
	{
		label: "TypeScript",
		href: "https://www.typescriptlang.org/",
	},
	{
		label: "TailwindCSS",
		href: "https://tailwindcss.com/",
	},
	{
		label: "Pinia",
		href: "https://pinia.vuejs.org/",
	},
	{
		label: "Zod",
		href: "https://zod.dev/",
	},
];

const links: Link[] = [
	{
		label: "GitHub",
		href: "https://github.com/wxvrst",
		icon: Github,
	},
	{
		label: "Telegram",
		href: "https://t.me/wxvrst",
		icon: Telegram,
	},
	{
		label: "Frontend source code",
		href: "https://github.com/wxvrst/social-network-frontend",
		icon: Code,
	},
	{
		label: "Backend source code",
		href: "https://github.com/wxvrst/social-network-backend",
		icon: Code,
	},
];
</script>

<template>
	<div class="px-3 py-6 flex flex-col gap-6 items-center">
		<div class="flex flex-col gap-4 py-3">
			<span class="text-5xl font-serif text-white/80 tracking-widest">
				Welcome to my social network
			</span>
			<span class="text-white/40 text-lg font-serif"> A learning project · Vue + Hono </span>
		</div>
		<div class="flex flex-col gap-4 max-w-2xl leading-relaxed font-mono">
			<p class="text-white/40">
				Hello! My name is
				<router-link
					to="/admin"
					class="text-blue-500 underline decoration-transparent transition-colors duration-200 hover:decoration-blue-600"
				>
					Ivan</router-link
				>, and this is my learning social network- a project I'm building to get hands-on
				with modern frontend and backend practice the architecture of real-world apps.
			</p>
			<p class="text-white/40">
				You can sign up, publish posts, follow other users and chat. Everything is built
				from scratch- from the UI down to the API layer. The project is still in active
				development, so expect rough edges- and feel free to poke around and test it out.
			</p>
		</div>
		<div class="flex gap-3 flex-wrap justify-center">
			<a
				v-for="(link, index) in stack"
				:href="link.href"
				:key="index"
				class="bg-white rounded-full text-black/80 px-3 py-1 hover:bg-blue-500 hover:text-white transition-color duration-200"
			>
				{{ link.label }}
			</a>
		</div>
		<div class="flex gap-3 flex-wrap justify-center">
			<a
				v-for="(link, index) in links"
				:href="link.href"
				:key="index"
				class="flex gap-1 items-center border rounded-lg py-2 px-4 hover:text-blue-500 transition duration-200 hover:scale-101"
			>
				<component
					:is="link.icon"
					v-if="link.icon"
					:size="24"
				/>
				{{ link.label }} ↗
			</a>
		</div>
		<span class="text-xs text-white/60 my-3">
			Still in development- feedback and bug reports are welcome
		</span>
	</div>
</template>
