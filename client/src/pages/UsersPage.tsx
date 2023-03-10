import React, {FC, useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {AppRoutes} from '../route/routes';
import {fetchAllUsers} from "../api/userApi";
import {IUser} from "../types";

const { USERS_ROUTE } = AppRoutes

const UsersPage: FC = () => {
    let navigate = useNavigate()
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetchAllUsers().then(
            res => setUsers(res.data)
        )
    }, [])
    return (
        <div>
            <Table className="table table-bordered">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>email</th>
                    <th>name</th>
                </tr>
                </thead>
                <tbody>
                {users && users.map(user => (
                    <tr key={user.id} onClick={() => navigate(`${USERS_ROUTE}/${user.id}`)}>
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                        <td>{user.name}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
};

export default UsersPage;
