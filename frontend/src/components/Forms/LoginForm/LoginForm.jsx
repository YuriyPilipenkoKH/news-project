import React from "react";
import {
    ButtonSubmit,
    Form,
    Input,
    LabelForLogin,
    LinkToForm,
    Question,
    ShowPasswordButton,
    Title,
} from "../Forms.styled";

export default function LoginForm() {
    return (
        <Form>
            <form>
                <Title>Login</Title>
                <Input placeholder="Email" type="email"></Input>
                <LabelForLogin login>
                    <Input
                        inputInLabel
                        placeholder="Password"
                        type="password"
                    ></Input>
                    <ShowPasswordButton>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M9.76406 5.29519C10.4664 5.10724 11.2123 5 12 5C18.3636 5 22 12 22 12C22 12 21.171 13.5958 19.612 15.2635M4.34912 8.77822C2.8152 10.4307 2 12 2 12C2 12 5.63636 19 12 19C12.8021 19 13.5608 18.8888 14.2744 18.6944M11.5 14.9585C10.4158 14.7766 9.52883 14.0132 9.17071 13M12.5 9.04148C13.7563 9.25224 14.7478 10.2437 14.9585 11.5M3 3L21 21"
                                stroke="#54ADFF"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </ShowPasswordButton>
                </LabelForLogin>
                <ButtonSubmit loginButtom>Login</ButtonSubmit>
                <Question>
                    Don't have an account?
                    {<LinkToForm href="fwefew"> Register</LinkToForm>}
                </Question>
            </form>
        </Form>
    );
}
