export default async context => {
  const { user } = localStorage;
  context.store.commit("user/SET_USER", JSON.parse(user || null));
};
