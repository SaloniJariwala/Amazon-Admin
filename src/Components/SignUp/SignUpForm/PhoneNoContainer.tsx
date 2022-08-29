import { Input, Select } from "antd";
import React from "react";
import { IPhoneNoContainerProps } from "../../../Types/SignUp";
import { ContainerWrapper } from "./style";
import { ExclamationOutlined } from "@ant-design/icons";
import { Controller } from "react-hook-form";
import { ErrorMessage } from "../../Common/ErrorMessage";

const PhoneNoContainer: React.FC<IPhoneNoContainerProps> = ({
    methods,
    countryData = [],
    isLoading = false
}) => {

    const {
        control,
        formState: { errors }
    } = methods;
    const { Option } = Select;

    return (
        <ContainerWrapper>
            <div className="container">
                <span>Mobile number</span>
                <Input.Group compact style={{ display: 'flex' }}>
                    <Controller
                        control={control}
                        name="country"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Select
                                className="select"
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                                defaultValue={'select'}
                                loading={isLoading}
                            >
                                <Option key="select" value="select" disable>
                                    <div className="option">
                                        Select Country
                                    </div>
                                </Option>
                                {countryData?.map((item) => (
                                    <Option key={item._id} value={item._id} >
                                        <div className="option">
                                            {item.name} +{item.phoneCode}
                                        </div>
                                    </Option>
                                ))}
                            </Select>
                        )}
                    />
                    <div>
                        <Controller
                            control={control}
                            name="phoneNo"
                            rules={{
                                required: 'Enter your Mobile number',
                                maxLength: {
                                    value: 10,
                                    message: 'Enter valid number'
                                },
                                minLength: {
                                    value: 10,
                                    message: 'Enter valid number'
                                }
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    placeholder="Mobile number"
                                    className={`input ${errors.phoneNo ? 'error' : ''}`}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )}
                        />
                        {errors.phoneNo && errors.phoneNo.message && (
                            <ErrorMessage>
                                <ExclamationOutlined />
                                {errors.phoneNo.message}
                            </ErrorMessage>
                        )}
                    </div>
                </Input.Group>
            </div>
        </ContainerWrapper>
    );
};

export default PhoneNoContainer;