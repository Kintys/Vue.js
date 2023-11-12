<template>
  <div class="container">
    <div>
      <h2>{{ title }}</h2>
      <div>
        <div class="title-category">
          <div>ПІБ</div>
          <div>Середній бал</div>
        </div>
        <ol>
          <li
            class="students-list"
            v-for="student in studentsDataList"
            :key="student.id"
          >
            <span>{{ student.name }}</span
            ><span>{{ student.mark }}</span>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentsList",
  props: {
    studentsDataList: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 10px;
  width: 300px;

  .title-category {
    display: flex;
    width: 260px;
    justify-content: space-between;
    padding-left: 40px;
  }
  .students-list {
    display: flex;
    justify-content: space-between;
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
}
</style>
