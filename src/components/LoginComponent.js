import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { loginUser } from '../redux';

function LoginComponent({ userData, loginUser }) {
    useEffect(() => {
        loginUser()
    }, [])
    // return (
    //     // <div>{JSON.stringify(userData)}</div>
    // )
    return userData.loding ? (
        <div>
            <h2>Loding..</h2>
        </div>
    ) : userData.error ? (
        <div>
            <h2>{userData.error}</h2>
        </div>
    ) : (
                <div>
                    <h2>Login Page</h2>

                    


                </div>
            )
}

const mapStateToProps = (state) => {
    return {
        userData: state.login
    }
}


const mapDispatchToProps = dispatch => {
    return {
        loginUser: () => dispatch(loginUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);