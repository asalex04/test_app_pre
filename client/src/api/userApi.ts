import {$authHost} from "./index";
import {IUser} from "../types";


export const fetchAllUsers = async (): Promise<{data: IUser[] }> => {
    const res = await $authHost.get(`/users`)
    return res
}


