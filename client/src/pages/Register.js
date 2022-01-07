import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const initialValues = {userName:'',email:'',password: ''};

    let navigate = useNavigate();

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/user/create", data).then((response) => {
        console.log("Registered successfully");
        navigate("/");  
      });
    };

    const validationSchema = Yup.object().shape({
        userName: Yup.string().required("*required"),
        email: Yup.string().email("Invalid email").required("*required"),
        password: Yup.string().min(8,"minimum 8 characters required").required("*required")
    });

    return (
        <div className="RegisterPage">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                {({ values }) => (
                    <Form style={{margin:"20px auto", height:"auto"}}>
                        <div>
                            <label>User Name</label>
                            <ErrorMessage name='userName' component="span"/>
                                <Field name="userName" placeholder="Enter user name" type="text" autoComplete="off" /><br/>
                        </div>
                        <div>
                            <label>Email ID</label>
                            <ErrorMessage name='email' component="span"/>
                                <Field name="email" placeholder="Enter email ID" type="text" autoComplete="off" /><br/>
                        </div>
                        <div>
                            <label>Password</label>
                            <ErrorMessage name='password' component="span"/>
                                <Field name="password" placeholder="Enter pwd" type="password" autoComplete="off" /><br/>
                        </div>
                        <button type='submit' style={{display : 'block'}}> REGISTER </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Register
