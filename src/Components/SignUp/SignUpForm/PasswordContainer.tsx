import { Input } from "antd";
import React from "react";
import { Controller } from "react-hook-form";
import { IMemoisedComponentProps } from "../../../Types/SignUp";
import { ContainerWrapper } from "./style";
import { InfoCircleOutlined, ExclamationOutlined } from "@ant-design/icons";
import { ErrorMessage } from "../../Common/ErrorMessage";

const PasswordContainer: React.FC<IMemoisedComponentProps> = ({
    methods,
}) => {

    const {
        control,
        formState: { errors },
    } = methods;

    return (
        <ContainerWrapper>
            <div className="container">
                <span>Password</span>
                <Controller
                    control={control}
                    name="password"
                    rules={{ required: 'Enter your password' }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            type="password"
                            placeholder="Atlease 6 characters"
                            className={`input ${errors.fullname ? 'error' : ''}`}
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    )}
                />
                {errors.password && errors.password.message ?
                    (
                        <ErrorMessage>
                            <ExclamationOutlined />
                            {errors.password.message}
                        </ErrorMessage>
                    ) :
                    (
                        <div style={{ fontWeight: 'unset', fontSize: '12px', display: 'flex', alignItems: 'center' }}>
                            <p><InfoCircleOutlined /></p>
                            <p style={{ marginLeft: 5 }}>Passwords must be at least 6 characters.</p>
                        </div>
                    )
                }
            </div>
        </ContainerWrapper>
    );
};

export default PasswordContainer;