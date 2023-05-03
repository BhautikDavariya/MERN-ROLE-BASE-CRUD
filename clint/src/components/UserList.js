import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button"
import UserFrom from './UserFrom';
import { useDispatch, useSelector } from 'react-redux';
import { deletehUser, fetchUsers } from '../store/actions/userAction';
import {
   faTrash, faPenToSquare, 
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { errorOptions} from '../helper/reactTost';
import { toast } from 'react-toastify';
import { baseUrlOne } from '../helper/actionHelper';

const UserList = () => {
    const [modalShow, setModalShow] = useState(false);
    const dispatch = useDispatch();
    const {users} = useSelector(state => state)
    const [allUsers, setAllUsers] = useState([])
    const [getUser, setGetUser] = useState({})
    const [userId, setUserId] = useState(null)
    const [isEdit, setIsEdit] = useState(false)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    useEffect(() => {
        setAllUsers(users)
    }, [users])



    const onDelete = (e, id) => {
        e.preventDefault();
        const defaultUser = JSON.parse(localStorage.getItem('userInfo'))
        if(defaultUser.roles.includes('admin')){
            if(id === defaultUser._id){
                toast("You Have Not Permission Access Delete!", errorOptions)
            } else {
                const data = {
                    id : id
                }
                dispatch(deletehUser(data))
            }
        } else {
            toast("You Have Not Permission Access Delete!", errorOptions)
        }
    }


    const onEdit = (e, user, id) => {
        e.preventDefault()
        const defaultUser = JSON.parse(localStorage.getItem('userInfo'))
        if(defaultUser.roles.includes('admin')){
            setModalShow(true)
            setIsEdit(true)
            setGetUser(user)
            setUserId(id)
        } else {
            if(defaultUser._id === id){
                setModalShow(true)
                setIsEdit(true)
                setGetUser(user)
                setUserId(id)
            } else {
                toast("You Have Not Permission Access Delete!", errorOptions)
            }

        }
    }


    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem("userInfo");
        window.location.href = baseUrlOne + 'login';
    }

    return (
        <div className='container'>
            <Card>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <h5 className='m-0'>Users</h5>
                    <div>
                    <Button variant="primary" onClick={() => setModalShow(true)}>Add User</Button>
                    <Button variant="danger" className='ms-2' onClick={() => logout()}>LogOut</Button>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUsers.map((items, index) => {
                                return(
                                    <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{items.frist_name}</td>
                                    <td>{items.last_name}</td>
                                    <td>{items.email}</td>
                                    <td>
                                        <span className='me-3'><FontAwesomeIcon className='text-danger' onClick={(e) => onDelete(e, items._id)} icon={faTrash} /></span>
                                        <span><FontAwesomeIcon className='text-primary'onClick={(e) => onEdit(e, items, items._id)}  icon={faPenToSquare} /></span>
                                    </td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            <UserFrom
            getUser={getUser}
            id={userId}
            isEdit={isEdit}
        show={modalShow}
        onHide={() => {
            setModalShow(false)
            setIsEdit(false)
        }}
      />
        </div>
    )
}

export default UserList