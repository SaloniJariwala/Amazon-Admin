import { Input } from "antd";
import React from "react";
import { Controller } from "react-hook-form";
import { IMemoisedComponentProps } from "../../../Types/SignUp";
import { ContainerWrapper } from "./style";
import { InfoCircleOutlined } from "@ant-design/icons";

const PasswordContainer: React.FC<IMemoisedComponentProps> = ({
    methods,
}) => {

    const { control } = methods;

    return (
        <ContainerWrapper>
            <div className="container">
                <span>Password</span>
                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            type="password"
                            placeholder="Atlease 6 characters"
                            className="input"
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    )}
                />
                <div style={{ fontWeight: 'unset', fontSize: '12px', display: 'flex', alignItems: 'center' }}>
                    <p><InfoCircleOutlined /></p>
                    <p style={{ marginLeft: 5 }}>Passwords must be at least 6 characters.</p>
                </div>
            </div>
        </ContainerWrapper>
    );
};

export default PasswordContainer;