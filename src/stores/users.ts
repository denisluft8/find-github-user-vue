import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [{}],
  }),
  getters: {
    getUsers(state) {
      return state.users;
    },
  },
  actions: {
    async fetchUsers(inputValue: string) {
      try {
        const data = await axios.get(
          `https://api.github.com/users/${inputValue}`
        );
        
        this.users = data.data;
        // console.log("users", (users));
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
