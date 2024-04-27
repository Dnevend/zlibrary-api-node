import axios from "axios";

export const API = {
    login: `/epi/user/login`,

    profile: `/eapi/user/profile`,

    info: `/eapi/info`,

    recommend: `/eapi/user/book/recommended`,

    domains: '/eapi/info/domains',

    recently: `/eapi/book/recently`,

    extensions: `/eapi/info/extensions`,

    bookInfo: (bookId, hashId) => `/epi/book/${bookId}/${hashId}`,

    search: `/eapi/book/search`
}

export const DOMAIN = {
    Zlib: "https://singlelogin.re/",
    Login: "https://singlelogin.re/rpc.php"
}

let cookies = null;

export const request = axios.create({
    baseURL: DOMAIN.Zlib,
    timeout: 10 * 1000,
    withCredentials: true,
});

request.interceptors.request.use((config) => {
    config.headers = {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
        cookie: cookies,
        ...config.headers,
    }

    return config;
});

request.interceptors.response.use((response) => {
    if (response.headers.get('set-cookie')) {
        cookies = response.headers.get('set-cookie').join('; ')
    }

    return response
})
