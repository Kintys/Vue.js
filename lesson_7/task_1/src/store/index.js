import { createStore } from "vuex";
import { v4 as uuidv4 } from "uuid";
import student from "../data/student.json";
import { getNewListWith5Score, getScoreIn5 } from "@/data/helpers.js";

export default createStore({
  state: {
    studentsList: "",
    categoryValue: null,
    scoreCategory: null,
  },
  getters: {
    getStudentsList: ({ studentsList }) => studentsList,

    getStudentsListWithScoreCat(state) {
      if (state.scoreCategory === "5")
        // getNewListWith5Score повертає масив з оцінками в 5 системі
        return getNewListWith5Score(state.studentsList);
      else return state.studentsList;
    },

    getListWithSelectedCategoryStudentAndScore(state, getters) {
      // Якщо система оцінювання 12 і вибрана каттегорія
      if (state.categoryValue && state.scoreCategory > 5) {
        // getScoreIn5 повертає оцінки по 5 бальній системі (helpers.js)
        return state.studentsList.filter(
          (student) => getScoreIn5(student.mark) == state.categoryValue
        );
      }
      // Якщо система оцінювання 5 і вибрана каттегорія
      else if (state.categoryValue && state.scoreCategory <= 5) {
        // getScoreIn5 повертає оцінки по 5 бальній системі (helpers.js)
        const filteredArr = state.studentsList.filter(
          (student) => getScoreIn5(student.mark) == state.categoryValue
        );
        // getNewListWith5Score повертає масив з оцінками в 5 системі
        return getNewListWith5Score(filteredArr);
      } else return getters.getStudentsListWithScoreCat;
    },
  },

  mutations: {
    addStudentsList(state, student) {
      const copyArr = JSON.parse(JSON.stringify(student));
      copyArr.forEach((element) => {
        element.id = uuidv4();
      });
      state.studentsList = copyArr;
    },
    addStudentCat(state, category) {
      state.categoryValue = category;
    },
    addScoreCategory(state, store) {
      state.scoreCategory = store;
    },
  },
  actions: {
    loadStudentsList({ commit }) {
      commit("addStudentsList", student);
    },
    selectedStudentCategory({ commit }, category) {
      commit("addStudentCat", category);
    },
    chooseScoreCat(context, scoreCat) {
      context.commit("addScoreCategory", scoreCat);
    },
  },
  modules: {},
});
