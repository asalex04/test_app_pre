import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {AppRoutes} from "../route/routes";
import {useNavigate, NavLink} from 'react-router-dom'

const {USERS_ROUTE, LOGIN_ROUTE} = AppRoutes

const NavBar = () => {
    let navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('token')
        navigate(LOGIN_ROUTE)
    }
    const token = localStorage.getItem('token')
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                {token ?
                    <>
                        <NavLink style={{color: 'white'}} to={USERS_ROUTE}>Пользователи</NavLink>
                        <Nav className="ms-auto" style={{color: 'white'}}>
                            <Button
                                onClick={() => logout()}
                                variant={'outline-light'}
                                className="ms-2"
                            >
                                Выйти
                            </Button>
                        </Nav>
                    </>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={'outline-light'}
                            onClick={() => navigate(LOGIN_ROUTE)}
                        >
                            Авторизация
                        </Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
};

export default NavBar;
