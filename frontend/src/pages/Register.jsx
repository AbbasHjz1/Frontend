import { useState, useEffect } from 'react'
import { FaUser } from "react-icons/fa"

function Register() {
    const [fromData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
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

    const { name, email, password, password2 } = fromData
    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Please create an account</p>
            </section>
            <section className="from">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="text"
                            className="from-control"
                            id="name"
                            name="name"
                            value={name}
                            placeholder="Enter your name"
                            onChange={onChange} />
                    </div>
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
                    <div className="form-group">
                        <input type="password"
                            className="from-control"
                            id="password2"
                            name="password2"
                            value={password2}
                            placeholder="Confirm password"
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

export default Register