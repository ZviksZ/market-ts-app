import React from 'react';
import s from "../RegisterForm/RegisterForm.module.scss";
import {useForm} from "react-hook-form";
import {login} from "../../redux/authReducer";
import * as yup from "yup";
import {useDispatch} from "react-redux";

const SignupSchema = yup.object().shape({
    userEmail: yup.string().required('Обязательное поле').email('Введите корректный email'),
    password: yup.string().required('Обязательное поле')
});

export const LoginForm = () => {
    const dispatch = useDispatch()


    const {register, handleSubmit, errors} = useForm({
        validationSchema: SignupSchema,
        defaultValues: {
            userEmail: '',
            password: ''
        }
    });

    const onSubmit = async (data: any) => {
        const {userEmail,password} = data;


        dispatch(login(userEmail,password))
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Email</label>
                <input type="text" name="userEmail" ref={register}/>
                {errors.userEmail && <p className={s.error}>{errors.userEmail.message}</p>}
            </div>
            <div style={{marginBottom: 10}}>
                <label>Пароль</label>
                <input type="text" name="password" ref={register}/>
                {errors.password && <p className={s.error}>{errors.password.message}</p>}
            </div>
            <input type="submit" placeholder="Регистрация"/>

        </form>
    );
}

