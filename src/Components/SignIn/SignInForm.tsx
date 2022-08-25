import React, { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routepaths } from "../../Route/RoutePaths";
import { ContentWrapper, FormWrapper, TitleWrapper } from "./style";
import { CaretDownOutlined, CloseOutlined } from "@ant-design/icons";
import { Divider, Popover } from "antd";

const SignInForm: React.FC = () => {

    const navigate = useNavigate();
    const [visible, setVisible] = useState<boolean>(false);

    const onForgotPassword = (): void => {
        navigate(Routepaths.forgotPassword);
    }

    const hide = () => {
        setVisible(false);
    }

    const handleVisibleChange = (newVisible: boolean) => {
        setVisible(newVisible);
    };

    const handleCreateAccount = () => {
        navigate(Routepaths.signup);
    }

    const content: ReactElement = (
        <ContentWrapper>
            <p>
                Choosing "Keep me signed in" reduces the number of times you're asked to Sign-In on this device.
            </p>
            <p>
                To keep your account secure, use this option only on your personal devices
            </p>
        </ContentWrapper>
    );

    const title: ReactElement = (
        <TitleWrapper>
            <span>"Keep In Signed In" Checkbox</span>
            <CloseOutlined onClick={hide} style={{ cursor: "pointer" }} />
        </TitleWrapper>
    )

    return (
        <FormWrapper>
            <h1>Sign-In</h1>
            <div style={{ marginBottom: 14 }}>
                <div>
                    <label
                        htmlFor="email"
                        className="form-label"
                    >
                        Email or mobile phone number
                    </label>
                </div>
                <div>
                    <input
                        type="email"
                        maxLength={128}
                        id="email"
                        name="email"
                        tabIndex={1}
                        className="form-input"
                        required
                    />
                </div>
            </div>
            <div style={{ marginBottom: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <label
                        htmlFor="password"
                        className="form-label"
                    >
                        Password
                    </label>
                    <a href="" onClick={onForgotPassword} tabIndex={2}>
                        Forgot your password?
                    </a>
                </div>
                <div>
                    <input
                        type="password"
                        maxLength={15}
                        id="password"
                        name="password"
                        tabIndex={3}
                        className="form-input"
                        required
                    />
                </div>
            </div>
            <div style={{ marginBottom: 26 }}>
                <div>
                    <input
                        id="signInSubmit"
                        tabIndex={4}
                        className="form-button"
                        type="submit"
                        value="Sign In"
                    />
                </div>
                <div className="rememberMe">
                    <input
                        id="rememberMe"
                        tabIndex={5}
                        type="checkbox"
                        value="true"
                    />
                    <label htmlFor="rememberMe" className="rememberLabel">
                        Keep me signed in.&nbsp;
                    </label>
                    <div>
                        <Popover
                            content={content}
                            title={title}
                            trigger="click"
                            className="popover"
                            visible={visible}
                            onVisibleChange={handleVisibleChange}
                        >
                            <a href="" className="details-link">
                                <span>Details</span>{' '}
                                <CaretDownOutlined />
                            </a>
                        </Popover>
                    </div>
                </div>
            </div>
            <Divider plain>New to Amazon?</Divider>
            <input
                type="submit"
                value="Create your Amazon account"
                className="create-button"
                onClick={handleCreateAccount}
            />
        </FormWrapper>
    );
};

export default SignInForm;