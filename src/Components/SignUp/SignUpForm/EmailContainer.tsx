import { Input } from "antd";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { IMemoisedComponentProps, IUser } from "../../../Types/SignUp";
import { ErrorMessage } from "../../Common/ErrorMessage";
import { ContainerWrapper } from "./style";
import { ExclamationOutlined } from "@ant-design/icons";

const EmailContainer: React.FC<IMemoisedComponentProps> = ({
    methods,
}) => {

    const {
        control,
        formState: { errors },
    } = methods;

    const isValidEmail = (email: string) => {
        return /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
            .test(email);
    }

    return (
        <ContainerWrapper>
            <div className="container">
                <span>Email address</span>
                <Controller
                    control={control}
                    name="email"
                    rules={{
                        required: 'Enter your email address',
                        validate: (value: string) => isValidEmail(value)
                    }}
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