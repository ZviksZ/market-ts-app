import React from 'react';
import {useForm} from "react-hook-form";
import * as yup from "yup";
import s from './RegisterForm.module.scss'
import {authAPI} from '../../api/api';

const SignupSchema = yup.object().shape({
    userName: yup.string().required('Обязательное поле'),
    userEmail: yup.string().required('Обязательное поле').email('Введите корректный email'),
    name: yup.string().required('Обязательное поле'),
    surname: yup.string().required('Обязательное поле'),
    password: yup.string().required('Обязательное поле').min(8, 'Пароль должен быть не менее 8 символов')
});

interface RegisterFormProps {
    userName?: string;
    userEmail?: string;
    name?: string;
    surname?: string;
    password?: string;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
                                                              userName = "",
                                                              userEmail = "",
                                                              name = "",
                                                              surname = "",
                                                              password = ""
                                                          }) => {
    const {register, handleSubmit, errors} = useForm({
        validationSchema: SignupSchema,
        defaultValues: {
            userName: userName,
            userEmail: userEmail,
            name: name,
            surname: surname,
            password: password,
        }
    });

    const onSubmit = async (data: any) => {
        const {userName,name,surname, userEmail,password} = data;

        await authAPI.register(userName,name,surname, userEmail,password, '', 'User' )
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Логин</label>
                <input type="text" name="userName" ref={register}/>
                {errors.userName && <p className={s.error}>{errors.userName.message}</p>}
            </div>
            <div style={{marginBottom: 10}}>
                <label>Email</label>
                <input type="text" name="userEmail" ref={register}/>
                {errors.userEmail && <p className={s.error}>{errors.userEmail.message}</p>}
            </div>
            <div>
                <label>Имя</label>
                <input type="text" name="name" ref={register}/>
                {errors.name && <p className={s.error}>{errors.name.message}</p>}
            </div>
            <div>
                <label>Фамилия</label>
                <input type="text" name="surname" ref={register}/>
                {errors.surname && <p className={s.error}>{errors.surname.message}</p>}
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

