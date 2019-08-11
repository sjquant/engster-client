import axios from "@/plugins/axios";

const Unauthorized = 401;
const Unprocessable = 422;

const requireLogin = () => {
    router.push(`/sign-in?returnPath=${encodeURIComponent(location.pathname)}`);
};

export const setAuthInHeader = token => {
    axios.defaults.headers.common["Authorization"] = token
        ? `Bearer ${token}`
        : null;
};

export const request = {
    get(path, options = {}) {
        return axios.get(`${path}`, options).catch(({ response }) => {
            const { status } = response;
            if (status === Unauthorized || status === Unprocessable)
                return requireLogin();
            throw Error(response);
        });
    },
    post(path, data, options = {}) {
        return axios.post(`${path}`, data, options).catch(({ response }) => {
            const { status } = response;
            if (status === Unauthorized || status === Unprocessable)
                return requireLogin();
            throw Error(response);
        });
    },
    delete(path, data = {}, options = {}) {
        return axios.delete(`${path}`, data, options).catch(({ response }) => {
            const { status } = response;
            if (status === Unauthorized || status === Unprocessable)
                return requireLogin();
            throw Error(response);
        });
    },
    put(path, data, options = {}) {
        return axios.put(`${path}`, data, options).catch(({ response }) => {
            const { status } = response;
            if (status === Unauthorized || status === Unprocessable)
                return requireLogin();
            throw Error(response);
        });
    }
};