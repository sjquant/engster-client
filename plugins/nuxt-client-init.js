export default async (context) => {
    const { accessToken, refreshToken, user } = localStorage;
    context.store.commit("auth/SET_ACCESS_TOKEN", accessToken || null);
    context.store.commit("auth/SET_REFRESH_TOKEN", refreshToken || null);
    context.store.commit("auth/SET_USER", JSON.parse(user || null));
}