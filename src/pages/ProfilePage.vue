<script setup lang="ts">
import { Comment, Phone, Plus } from "@primeicons/vue";
import { useUsersStore } from "@/store/users/users.store";

// TODO: Будто лишнее, но в тоже время дальше лаконичнее
const userStore = useUsersStore();
const { currentUser } = storeToRefs(userStore);
const { fetchUser } = userStore;

onMounted(async () => {
	await fetchUser(10);
}); //TODO: заменить значние на текущего пользователя

const handleClickChat = () => {};
const handleClickCall = () => {};
/*
Будет 2 варианта: профиль текущего пользователя и профиль любого другого
У каждого будет своя информация, т.е поля:
  Имя, аватарка, обложка, статус, необязательные поля(др и тд), друзья и подписки, посты
На странице текущего пользователя будет:
  Кнопка редактирования
На старнице других: кнопка добавить в друзья и "Написать"
*/
</script>

<template>
	<template v-if="currentUser">
		<div class="bg-neutral-800/60 rounded-2xl p-3">
			<div class="w-full flex gap-2">
				<img
					:src="currentUser.avatar"
					alt="avatar"
					class="aspect-square w-24 rounded-full overflow-hidden"
				/>
				<div class="flex flex-col gap-1 text-left">
					<span class="text-2xl">{{ currentUser.name }}</span>
					<span class="text-white/40 text-sm"> {{ currentUser.description }}</span>
				</div>
				<div class="ml-auto flex flex-col justify-center gap-2">
					<button
						class="text-center flex justify-center items-center gap-2 bg-blue-600 px-4 py-2 rounded-4xl hover:bg-white hover:text-black transition-all duration-300 hover:scale-102 active:scale-98"
					>
						<Plus size="18" /> Add to friends
					</button>
					<div class="flex gap-2">
						<button
							class="w-1/2 flex justify-center items-center bg-neutral-600/40 px-6 py-2 rounded-4xl hover:bg-white hover:text-black transition-colors duration-300"
							@click="handleClickChat"
						>
							<Comment />
						</button>
						<button
							class="w-1/2 flex justify-center items-center bg-neutral-600/40 px-6 py-2 rounded-4xl hover:bg-white hover:text-black transition-colors duration-300"
							@click="handleClickCall"
						>
							<Phone />
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="grid grid-cols-3 gap-1 mt-2">
			<div
				v-for="(item, index) in currentUser.additional"
				:key="index"
				class="bg-neutral-800/60 flex flex-col gap-1 rounded-2xl py-3 px-6 text-left"
			>
				<span class="text-white/40 text-sm">{{ item.label }}</span>
				<span>{{ item.value }}</span>
			</div>
		</div>
	</template>
</template>
