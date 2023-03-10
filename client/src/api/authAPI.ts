import jwtDecode from "jwt-decode";
import {$host} from "./index";

export const registration = async (email: string, password: string, name: string) => {
        const {data} = await $host.post('/auth/registration', {email, password, name})
        localStorage.setItem('token', data.token)
        return jwtDecode(data.token)

}

export const login = async (email: string, password: string) => {
    try {
        const {data} = await $host.post('/auth/login', {email, password})
        localStorage.setItem('token', data.token)
        return jwtDecode(data.token)
    } catch (e) {
        console.log(e)
    }

}

