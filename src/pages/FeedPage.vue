<script setup lang="ts">
import PublicationCard from "@/components/ui/PublicationCard.vue";
import { userPublicationsStore } from "@/store/publications";
import { Paperclip } from "@primeicons/vue";

const publicationStore = userPublicationsStore();
const { publications } = storeToRefs(publicationStore);
const { fetchPublications, createPublication } = publicationStore;

onMounted(async () => {
	await fetchPublications();
}); //TODO: заменить значние на текущего пользователя

const description = ref<string>("");

const handleCreatePublication = () => {
	createPublication({ author_id: 10, description: description.value });
	description.value = "";
};

//@ts-ignore
const handleAddFile = (e: Event) => {
	//TODO:
};

/*
Сверху будет кнопка или область для создания публикаций
Ниже будет лента публикаиций
Справа в блоке будет фильтр: публикации подписок, рекоммендации и чтото ещё
*/
</script>

<template>
	<div class="flex gap-2 pb-3 border-b border-white/8">
		<textarea
			class="w-full border border-white/8 rounded-2xl focus:outline-0 px-2"
			v-model="description"
			placeholder="Enter your story"
			rows="4"
			maxlength="200"
		></textarea>
		<div class="flex flex-col gap-2 justify-center">
			<button
				class="text-nowrap text-black bg-white px-6 py-2 rounded-4xl hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-102 active:scale-98"
				@click="handleCreatePublication"
			>
				Create publication
			</button>
			<input
				type="file"
				@change="handleAddFile"
			/>
			<button
				class="text-nowrap flex items-center gap-2 text-black bg-white px-6 py-2 rounded-4xl hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-102 active:scale-98"
				@click=""
			>
				<Paperclip />
				Attach files
			</button>
		</div>
	</div>
	<div
		v-if="publications.length"
		class="flex flex-col gap-2"
	>
		<PublicationCard
			v-for="publication in publications"
			:publication="publication"
			:key="publication.id"
		/>
	</div>
	<div v-else>empty publications</div>
</template>
