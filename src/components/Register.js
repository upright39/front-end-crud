
import Navber from './Navber'
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';


function Register() {

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push('/addProduct')
        }
    })

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();

    const Add = async () => {

        let user = { name, email, password }

        let result = await fetch("http://localhost:8000/api/register", {
            method: 'POST',
            body: JSON.stringify(user),

            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }

        })

        result = await result.json();

        localStorage.setItem('user-info', JSON.stringify(result))

        history.push('/addProduct')

    }


    return (
        <>
            <Navber />
            <div className='form-background'>
                <section >
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-4 offset-sm-3'>
                                <h4>Registration page</h4><br />
                                <input type='test' value={name} placeholder="name" className='form-control' onChange={(e) => setName(e.target.value)} /> <br />
                                <input type='email' value={email} placeholder="email" className='form-control' onChange={(e) => setEmail(e.target.value)} /><br />
                                <input type='password' value={password} placeholder="password" className='form-control' onChange={(e) => setPassword(e.target.value)} /><br />
                                <button className='btn btn-primary' onClick={Add}>Rgister</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Register
