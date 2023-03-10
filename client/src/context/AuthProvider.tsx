import {FC, PropsWithChildren, useMemo, useState} from "react";
import {AuthContext} from "./authContext";

interface AuthProviderProps extends PropsWithChildren {
    initialAuth?: boolean
}

const AuthProvider: FC<AuthProviderProps> = (props) => {
    const {children, initialAuth} = props
    const [isAuth, setAuth] = useState(false)

    const defaultProps = useMemo(() => ({
        isAuth,
        setAuth
    }), [isAuth])

    return (
        <AuthContext.Provider value={defaultProps}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider