import { Input } from "antd";
import React from "react";
import { Controller } from "react-hook-form";
import { IMemoisedComponentProps } from "../../../Types/SignUp";
import { ContainerWrapper } from "./style";

const EmailContainer: React.FC<IMemoisedComponentProps> = ({
    methods,
}) => {

    const { control } = methods;

    return (
        <ContainerWrapper>
            <div className="container">
                <span>Email address (optional)</span>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            placeholder="First and last name"
                            className="input"
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    )}
                />
            </div>
        </ContainerWrapper>
    );
};

export default EmailContainer;