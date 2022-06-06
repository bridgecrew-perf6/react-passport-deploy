import React from 'react'
import styles from './LoginPage.module.css'
import googleImage from '../../assets/googleImage.png'

const LoginPage = () => {
    const googleLogin = () => {
        window.open("https://passport-deploy.herokuapp.com/auth/google", "_self");
    }


    return (
        <div className={styles.loginPage}>
            <div className={styles.loginForm}>
                <h1>Login</h1>
                <div className={styles.googleContainer} onClick={googleLogin}>
                    <img src={googleImage} alt="Google Icon" />
                    <p>Login With Google</p>
                </div>

            </div>

        </div>
    )
}

export default LoginPage