import { Input } from "antd";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { IMemoisedComponentProps, IUser } from "../../../Types/SignUp";
import { ErrorMessage } from "../../Common/ErrorMessage";
import { ContainerWrapper } from "./style";
import { ExclamationOutlined } from "@ant-design/icons";
import axios from "axios";
// import { USER_API } from "../../../Constants/SignUp";

const EmailContainer: React.FC<IMemoisedComponentProps> = ({
    methods,
}) => {

    const {
        control,
        formState: { errors },
        clearErrors
    } = methods;

    const isValidEmail = (email: string) => {
        debugger
        if (email === undefined) {
            debugger
            clearErrors("email");
            return false;
        } else {
            return /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
                .test(email);
        }
    }

    // const isEmailUsed = (email: string): any => {
    //     if (email) {
    //         axios.get(USER_API)
    //             .then((response) => {
    //                 const userEmail = response.data.find((item: IUser) => item.email === email);
    //                 if (userEmail) {
    //                     return true;
    //                 } else {
    //                     return false;
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             });
    //     }
    // }

    return (
        <ContainerWrapper>
            <div className="container">
                <span>Email address (optional)</span>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            className={`input`}
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    )}
                />
                {errors.email && errors.email.message && (
                    <ErrorMessage>
                        <ExclamationOutlined />
                        {errors.email.message}
                    </ErrorMessage>
                )}
            </div>
        </ContainerWrapper>
    );
};

export default EmailContainer;