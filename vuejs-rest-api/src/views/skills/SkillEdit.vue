<template>
  <div class="mt-12">
    <h3 class="text-center mb-4 font-bold text-2xl uppercase">Skill Edit</h3>
    <form
      @submit.prevent="updateSkill($route.params.id)"
      action=""
      class="max-w-md mx-auto p-4 bg-white shadow rounded-md"
    >
      <div class="space-y-6">
        <div class="mb-6">
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Name</label
          >
          <input
            type="text"
            id="name"
            v-model="skill.name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <div v-if="errors.name">
            <span class="text-sm text-red-400">{{ errors.name[0] }}</span>
          </div>
        </div>
        <div class="mb-6">
          <label
            for="slug"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Slug</label
          >
          <input
            type="text"
            id="slug"
            v-model="skill.slug"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <div v-if="errors.slug">
            <span class="text-sm text-red-400">{{ errors.slug[0] }}</span>
          </div>
        </div>
        <div class="mt-4">
          <button
            type="submit"
            class="px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 text-white rounded"
          >
            Update
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import useSkills from "../../composables/skills";

const { skill, getSkill, updateSkill, errors } = useSkills();

const props = defineProps({
  id: {
    required: true,
    type: String,
  },
});

onMounted(() => getSkill(props.id));

</script>

<style scoped></style>
