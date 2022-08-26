import { Input } from "antd";
import { Controller } from "react-hook-form";
import { ContainerWrapper } from "./style";
import { ExclamationOutlined } from "@ant-design/icons";
import { ErrorMessage } from "../../Common/ErrorMessage";
import { IMemoisedComponentProps } from "../../../Types/SignUp";

const NameContainer: React.FC<IMemoisedComponentProps> = ({ methods }) => {

    const {
        control,
        formState: { errors },
    } = methods;

    return (
        <ContainerWrapper>
            <div className="container">
                <span>Your Name</span>
                <Controller
                    control={control}
                    name="fullname"
                    rules={{ required: 'Enter your name' }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            placeholder="First and last name"
                            className={`input ${errors.fullname ? 'error' : ''}`}
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    )}
                />
                {errors.fullname && errors.fullname.message && (
                    <ErrorMessage>
                        <ExclamationOutlined />
                        {errors.fullname.message}
                    </ErrorMessage>
                )}
            </div>
        </ContainerWrapper>
    );
};

export default NameContainer;