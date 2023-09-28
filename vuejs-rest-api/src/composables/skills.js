import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

export default function useSkills() {
  const skills = ref([]);
  const skill = ref([]);
  const errors = ref({});
  const router = useRouter();

  const getSkills = async () => {
    const response = await axios.get("skills");
    skills.value = response.data.data;
  };

  const getSkill = async (id) => {
    const response = await axios.get("skills/" + id);
    skill.value = response.data.data;
  };

  const storeSkill = async (data) => {
    try {
      const response = await axios.post("skills", data);
      if (response.status === 200) {
        await router.push({ name: "SkillIndexs" });
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        errors.value = error.response.data.errors;
      } else {
        console.error("Lỗi:", error);
      }
    }
  };

  const updateSkill = async (id) => {
    try {
      const response = await axios.put("skills/" + id, skill.value);
      if (response.status === 200) {
        await router.push({ name: "SkillIndexs" });
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        errors.value = error.response.data.errors;
      } else {
        console.error("Lỗi:", error);
      }
    }
  };

  const destroySkill = async (id) => {
    if (!window.confirm("Are you sure you want to destroy this skill?")) {
      return;
    }
    await axios.delete("skills/" + id);
    await getSkills();
  };

  return {
    skill,
    skills,
    getSkill,
    getSkills,
    storeSkill,
    updateSkill,
    destroySkill,
    errors,
  };
}
