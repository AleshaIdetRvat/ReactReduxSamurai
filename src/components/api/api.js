import axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "d184a441-2b4e-4887-89a3-478bc0bebff2",
    },
});

export const requestUsersData = (currentPage = 1, pageSize = 6) => {
    return axiosInstance
        .get(`users?page=${currentPage}&count=${pageSize}`)
        .then((response) => response.data);
};

export const requstMyData = () => {
    return new Promise((resolve, reject) => {
        axiosInstance.get(`auth/me`).then((response) => {
            console.log(response);
            //debugger;
            if (!response.data.resultCode) {
                resolve(response.data.data);
            } else {
                reject("My_Error");
            }
        });
    });
};

export const requestFollow = (userId) => {
    return new Promise((resolve, reject) => {
        axiosInstance.post(`follow/${userId}`, {}).then((response) => {
            console.log(response);
            debugger;
            if (!response.data.resultCode) {
                resolve(response.data.data);
            } else {
                reject("My_Error");
            }
        });
    });
};

export const requestUnfollow = (userId) => {
    return new Promise((resolve, reject) => {
        axiosInstance.delete(`follow/${userId}`).then((response) => {
            console.log(response);
            debugger;
            if (!response.data.resultCode) {
                resolve(response.data.data);
            } else {
                reject("My_Error");
            }
        });
    });
};
