import React from 'react';
import {useForm} from "react-hook-form";
import * as yup from "yup";

const SignupSchema = yup.object().shape({
    userName: yup.string().required(),
    userEmail: yup.string().email().required(),
    name: yup.string().required(),
    surname: yup.string().required(),
    password: yup.string().min(8, 'Пароль должен быть не менее 8 символов').required()
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

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Логин</label>
                <input type="text" name="userName" ref={register}/>
                {errors.userName && <p>{errors.userName.message}</p>}
            </div>
            <div style={{marginBottom: 10}}>
                <label>Email</label>
                <input type="text" name="userEmail" ref={register}/>
                {errors.userEmail && <p>{errors.userEmail.message}</p>}
            </div>
            <div>
                <label>Имя</label>
                <input type="text" name="name" ref={register}/>
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                <label>Фамилия</label>
                <input type="text" name="surname" ref={register}/>
                {errors.surname && <p>{errors.surname.message}</p>}
            </div>
            <div style={{marginBottom: 10}}>
                <label>Пароль</label>
                <input type="text" name="password" ref={register}/>
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <input type="submit"/>
        </form>
    );
}

