import React from 'react';
import {RegisterForm} from "../components/RegisterForm/RegisterForm";
import {LoginForm} from "../components/LoginForm/LoginForm";

export const SignInUpPage = () => {
    return (
        <div className="container">
            <div className="d-flex">
                <div className="col50">
                    <h2>Форма входа</h2>
                    <LoginForm/>
                </div>
                <div className="col50">
                    <h2>Форма регистрации</h2>
                    <RegisterForm />
                </div>
            </div>

        </div>
    );
}

