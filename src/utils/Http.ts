import axios, {type AxiosRequestConfig} from "axios"
axios.defaults.baseURL = localStorage.getItem("BASE_URL")?.toString()
axios.defaults.timeout = 6 * 1000
axios.defaults.withCredentials = true

//添加请求拦截器
axios.interceptors.request.use((config: AxiosRequestConfig | any)=>{
    config.params = {
        ...config.params,
        t: Date.now()
    }
    return config;
},function (error) {
    return Promise.reject(error)
});

//添加响应拦截器
axios.interceptors.response.use(
    response=>{
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
)

interface ResType<T> {
    code: number
    data: T
    message: string
    error?: string
}

interface Http {
    get<T>(url: string, params?: unknown): Promise<T>
    post<T>(url: string, params?:unknown): Promise<T>
}

const http: Http= {
    get(url, params){
        return new Promise((resolve, reject) => {
            axios.get(url, {params})
                .then(res=>{
                    resolve(res.data)
                })
                .catch(err=>{
                    reject(err.data)
                })
        })
    },

    post(url, params) {
        return new Promise((resolve, reject) => {
            axios.post(url, JSON.stringify(params))
                .then(res=>{
                    resolve(res.data)
                })
                .catch(err=>{
                    reject(err.data)
                })
        })
    }
}