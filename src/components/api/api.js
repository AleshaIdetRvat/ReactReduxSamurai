import axios from "axios"

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "cebb09d0-fe2a-4f47-8835-31a231006854",
    },
})

export const securAPI = {
    getCaptcha: async () => {
        try {
            const res = await axiosInstance.get("security/get-captcha-url")
            return res.data.url
        } catch (error) {
            throw new Error(error.message)
        }
    },
}

export const authAPI = {
    requstMyData: () => {
        return new Promise((resolve, reject) => {
            axiosInstance
                .get(`auth/me`)
                .then((response) => {
                    if (!response.data.resultCode) {
                        resolve(response.data.data)
                    } else {
                        reject(response.data.messages[0])
                    }
                })
                .catch((reason) => reject(reason))
        })
    },

    login: (email, password, rememberMe, captcha = null) => {
        return new Promise((resolve, reject) => {
            axiosInstance
                .post(`auth/login`, { email, password, rememberMe, captcha })
                .then((response) => {
                    if (response.data.resultCode === 0) {
                        resolve(response.data.data)
                    } else {
                        reject([
                            response.data.resultCode,
                            response.data.messages[0],
                        ])
                    }
                })
                .catch((reason) => reject(reason))
        })
    },
    logout: () => {
        return new Promise((resolve, reject) => {
            axiosInstance
                .delete(`auth/login`)
                .then((response) => {
                    if (!response.data.resultCode) {
                        resolve(response.data.data)
                    } else {
                        reject(response.data.messages[0])
                    }
                })
                .catch((reason) => reject(reason))
        })
    },
}

export const profileAPI = {
    uploadAvatar: async (photo) => {
        const formData = new FormData()

        formData.append("image", photo)

        try {
            const response = await axiosInstance.put(
                `profile/photo`,
                formData,
                {
                    "Content-Type": "multipart/form-data",
                }
            )

            if (response.data.resultCode === 0) {
                return response.data.data.photos
            } else {
                throw new Error(response.data.resultCode)
            }
        } catch (error) {}
    },

    requestProfileData: async (userId) => {
        const response = await axiosInstance.get(`profile/${userId || 2}`)
        return response.data
    },

    requestProfileStatus: async (userId) => {
        const response = await axiosInstance.get(
            `profile/status/${userId || 2}`
        )
        return response.data
    },

    updateProfInfo: async (profInfo) => {
        try {
            const response = await axiosInstance.put("profile", profInfo)
            if (response.data.resultCode !== 0) {
                throw new Error("some error occured")
            }
        } catch (error) {
            throw error
        }
    },

    updateProfileStatus: (status) => {
        return new Promise((resolve, reject) => {
            //debugger;
            axiosInstance
                .put(`profile/status`, { status })
                .then((response) => {
                    if (!response.data.resultCode) {
                        resolve(response.data.data)
                    }
                })
                .catch((reason) => reject(reason))
        })
    },
}

export const usersAPI = {
    //
    requestUsersData: async (currentPage = 1, pageSize = 6) => {
        const response = await axiosInstance.get(
            `users?page=${currentPage}&count=${pageSize}`
        )
        return response.data
    },

    requestFollow: (userId) => {
        return new Promise((resolve, reject) => {
            //debugger;
            axiosInstance
                .post(`follow/${userId}`, {})
                .then((response) => {
                    //debugger;
                    if (!response.data.resultCode) {
                        resolve(response.data.data)
                    }
                })
                .catch((reason) => reject(reason))
        })
    },

    requestUnfollow: (userId) => {
        return new Promise((resolve, reject) => {
            axiosInstance.delete(`follow/${userId}`).then((response) => {
                if (response.data.resultCode !== 0) {
                    resolve(response.data.data)
                } else {
                    reject("My_Error")
                }
            })
        })
    },
}

// export const
