class ApiService {
    // ajax(url) {
    //     return new Promise((resolve, reject) => {
    //         fetch(url).then((data) => {
    //             resolve(data.json())
    //         }).catch((error) => {
    //             reject(error);
    //         });
    //     });
    // }
    async ajax(url) {
        try {
            const data = await fetch(url);
            return Promise.resolve(data.json());
        } catch(error) {
            return Promise.reject(error);
        }
    }
}

const API = new ApiService();
export default API;