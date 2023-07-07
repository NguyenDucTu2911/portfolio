import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string,
    containerStyles?: string,
    btnType?: "button" | "submit"
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean
}

export interface fadeInProps {
    direction: 'up' | 'down' | 'left' | 'right';
    delay: number;
}

export interface ContactProps {
    Name: string,
    Message: string,
    Email: string,
}
