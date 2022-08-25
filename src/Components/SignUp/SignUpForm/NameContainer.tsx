import { Input } from "antd";
import { Controller } from "react-hook-form";
import { IMemoisedComponentProps } from "../../../Types/SignUp"
import { ContainerWrapper } from "./style";

const NameContainer: React.FC<IMemoisedComponentProps> = ({
    control,
}) => {

    return (
        <ContainerWrapper>
            <div className="name-container">
                <span>Your Name</span>
                <Controller
                    control={control}
                    name="fullname"
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

export default NameContainer;