import Vuex from "vuex";
import search from "./modules/search";

const store = () =>
  new Vuex.Store({
    modules: {
      search
    }
  });

export default store;
