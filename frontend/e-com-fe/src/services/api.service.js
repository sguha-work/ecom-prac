import {ajax} from "rxjs/ajax";
import { pipe, map, catchError } from "rxjs";

import Subject_Collection$ from "../subjects/collection.subject";
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
    async ajax(url, method) {
        
        // try {
        //     const data = await fetch(url);
        //     return Promise.resolve(data.json());
        // } catch(error) {
        //     return Promise.reject(error);
        // }
        const observable =  ajax({
            url,
            method,
            contentType: "application/json"
        });
        // observable.subscribe((data)=>{
        //     Subject_Collection$.next(data.response);
        // },(error)=>{
        //     console.error(error);
        // })
        observable.pipe(map((data)=>{
            return data;
        }),catchError((error)=>{
            return error;
        }));

        observable.subscribe({
            next:(data)=>{
                Subject_Collection$.next(data.response);
            },
            error:(error)=>{
                console.error(error);
            }
        })
    }
}

const API = new ApiService();
export default API;