<template>
  <div class="container">
    <students-list
      title="Список студентів"
      :students-data-list="getListWithSelectedCategoryStudentAndScore"
    />
    <score-category title="Система оцінювання" />
    <student-category title="Категорія" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import StudentsList from "@/components/StudentsList.vue";
import ScoreCategory from "@/components/ScoreCategory.vue";
import StudentCategory from "@/components/StudentCategory.vue";
export default {
  name: "StudentsManager",
  components: {
    StudentsList,
    ScoreCategory,
    StudentCategory,
  },

  computed: {
    ...mapGetters([
      "getStudentsList",
      "getListWithSelectedCategoryStudentAndScore",
    ]),
  },
  methods: {
    ...mapActions(["loadStudentsList"]),
  },

  created() {
    this.loadStudentsList();
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
