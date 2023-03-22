export interface UserProfile {

    /**
     * 用户id
     */
    userId: number

    /**
     * 用户名
     */
    username: string | null

    /**
     * 手机号
     */
    phone ?: string
}