import React, { useState } from 'react'

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    return (
        <div>

            <form>

                <input type="email"
                    name='email'
                    placeholder='Enter Email'
                    value={user.email}
                    onChange={handleInput}

                />
                <input type="password"
                    name='password'
                    placeholder='Enter Password'
                    value={user.password}
                    onChange={handleInput}
                />
            </form>


        </div>
    )
}

export default Login