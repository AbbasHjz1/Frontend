import { useState, useEffect } from 'react'
import { FaSignOutAlt } from "react-icons/fa"

function Login() {
    const [fromData, setFormData] = useState({
        email: '',
        password: ''
    })

    const onChange = (e) => {
        setFormData((prevState) =>( {
            ...prevState, 
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    const {  email, password} = fromData
    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignOutAlt /> Register
                </h1>
                <p>Login to access yout Goal</p>
            </section>
            <section className="from">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="text"
                            className="from-control"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="password"
                            className="from-control"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={onChange} />
                    </div>
                    <div className="from-group">
                        <button type="submit" className='btn btn-block'>
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login