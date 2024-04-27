import { API, DOMAIN, request } from "./request.js"
import qs from 'qs'

export class ZLibrary {

    #email = null
    #password = null

    constructor(options = {}) {
        const { email, password } = options

        this.#email = email
        this.#password = password
    }

    async login(email = this.#email, password = this.#password) {
        const params = {
            "isModal": true,
            "email": email,
            "password": password,
            "site_mode": "books",
            "action": "login",
            "isSingleLogin": 1,
            "redirectUrl": "",
            "gg_json_mode": 1
        }

        try {
            await request.post(null, qs.stringify(params), { baseURL: DOMAIN.Login })
            return true
        } catch {
            return false
        }
    }

    /**
     * Get recommend books
     * 获取推荐书籍
     * @returns 
     */
    async recommend() {
        const { data } = await request.get(API.recommend)
        return data
    }

    /**
     * Get system info
     * 获取系统信息
     * @returns 
     */
    async info() {
        const { data } = await request.get(API.info)
        return data
    }

    /**
     * Get accessible domains
     * 获取可访问域名
     * @returns 
     */
    async domains() {
        const { data } = await request.get(API.domains)
        return data
    }

    /**
     * Get book detail info
     * 获取书籍详情信息
     * @param {number} bookId 
     * @param {string} hashId 
     * @returns 
     */
    async bookInfo(bookId, hashId) {
        const { data } = await request.get(API.bookInfo(bookId, hashId))
        return data
    }

    /**
     * 
     * @param {*} params 
     * message: str = None,
     * yearFrom: int = None,
     * yearTo: int = None,
     * languages: str = None,
     * extensions: str = None,
     * order: str = None,
     * page: int = None,
     * limit: int = None,
     * @returns 
     */
    async search(params) {
        const { data } = await request.post(API.search, params)
        return data
    }

    /**
     * Get user profile
     * 获取当前用户信息
     */
    async profile() {
        const { data } = await request.get(API.profile)
        return data
    }

}
