import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addUser, updateUser } from '../store/actions/userAction';


const UserFrom = (props) => {
    const { show, onHide, getUser, id, isEdit } = props
    const dispatch = useDispatch();
    const [registerData, setRagisterData] = useState({
        frist_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: ''
    })

    useEffect(() => {
        setRagisterData({
            id: id ? id : null,
            frist_name: getUser.frist_name,
            last_name: getUser.last_name,
            email: getUser.email,
            password: getUser.password,
            confirm_password: getUser.confirm_password,
        })
    }, [getUser])

    const onChnageInput = (e) => {
        e.preventDefault();
        const { name, value } = e.target
        setRagisterData(inputs => ({ ...inputs, [name]: value }))
    }

    const onSave = (e) => {
        e.preventDefault();
        if(isEdit){
            dispatch(updateUser(registerData))
            setRagisterData({
                frist_name: '',
                last_name: '',
                email: '',
                password: '',
                confirm_password: ''
            })
            onHide()
        } else {
            dispatch(addUser(registerData))
            setRagisterData({
                frist_name: '',
                last_name: '',
                email: '',
                password: '',
                confirm_password: ''
            })
            onHide()
        }
        
    }



    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create User
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="content">
                        <div className='input-field'>
                            <Form.Label htmlFor="text">Frist Name</Form.Label>
                            <Form.Control
                                type="text"
                                id="text"
                                value={registerData.frist_name}
                                placeholder="Frist Name" name='frist_name' onChange={(e) => onChnageInput(e)}
                            />
                        </div>
                        <div className='input-field'>
                            <Form.Label htmlFor="text1">Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                id="text1"
                                value={registerData.last_name}
                                placeholder="Last Name" name='last_name' onChange={(e) => onChnageInput(e)}
                            />
                        </div>
                        <div className='input-field'>
                            <Form.Label htmlFor="Email">Email</Form.Label>
                            <Form.Control
                                type="Email"
                                id="Email"
                                value={registerData.email}
                                placeholder="Email" name='email' onChange={(e) => onChnageInput(e)} 
                            />
                        </div>
                        <div className='input-field'>
                            <Form.Label htmlFor="password">Password</Form.Label>
                            <Form.Control
                                type="password"
                                id="password"
                                disabled={isEdit}
                                value={registerData.password}
                                placeholder="Password" name='password' onChange={(e) => onChnageInput(e)}
                            />
                        </div>
                        <div className='input-field'>
                            <Form.Label htmlFor="confirm_password">Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                id="confirm_password"
                                disabled={isEdit}
                                value={registerData.confirm_password}
                                placeholder="Confirm Password" name='confirm_password' onChange={(e) => onChnageInput(e)} 
                            />
                        </div>
                        {/* <a href="#" className="link">Forgot Your Password?</a> */}
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
                <Button variant="primary" onClick={(e) => onSave(e)}>Save</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default UserFrom