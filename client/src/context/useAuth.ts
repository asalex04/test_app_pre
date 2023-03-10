import { useContext } from 'react'
import { AuthContext } from './authContext'

interface authResult {
    isAuth?: boolean
    setAuth: (isAuth: boolean) => void
}

export function useAuth (): authResult{
    const { isAuth, setIsAuth } = useContext(AuthContext)

    const setAuth = (val: boolean) => {
        if (setIsAuth) {
            setIsAuth(val)
        }
    }
    return { isAuth, setAuth }
}
