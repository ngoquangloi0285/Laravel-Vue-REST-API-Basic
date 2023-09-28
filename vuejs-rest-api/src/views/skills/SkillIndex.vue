<template>
  <div class="mt-12">
    <div class="flex justify-end my-2">
      <RouterLink
        class="text-white bg-indigo-600 hover:bg-indigo-800 font-bold rounded px-5 py-2.5"
        :to="{ name: 'SkillCreate' }"
        >Create</RouterLink
      >
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-all-search" class="sr-only"
                  >checkbox</label
                >
              </div>
            </th>
            <th scope="col" class="px-6 py-3">ID</th>
            <th scope="col" class="px-6 py-3">Name</th>
            <th scope="col" class="px-6 py-3">Slug</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="skill in skills"
            :key="skill.id"
            class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
          >
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-1" class="sr-only"
                  >checkbox</label
                >
              </div>
            </td>
            <td class="px-6 py-4">{{ skill.id }}</td>
            <td class="px-6 py-4">{{ skill.name }}</td>
            <td class="px-6 py-4">{{ skill.slug }}</td>
            <td class="px-6 py-4">
              <RouterLink
                :to="{ name: 'SkillEdit', params: { id: skill.id } }"
                class="px-4 mr-1 py-2 bg-green-500 hover:bg-green-700 text-white rounded"
                >Edit</RouterLink
              >
              <button
                @click="destroySkill(skill.id)"
                class="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import useSkills from "../../composables/skills";

const { skills, getSkills, destroySkill } = useSkills();

onMounted(() => getSkills());
</script>

<style scoped></style>
