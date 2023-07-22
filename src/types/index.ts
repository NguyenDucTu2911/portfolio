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
    CreateAt: Date,
    Contacts?: string[]
}

export interface SearchFrameworkProps {
    selected: string,
    setSelected: (selected: string) => void;
}

export interface SearchSearchBarProps {
    setSearchFramework: (searchSearchFramework: string) => void;
    setSearchLanguage: (setSearchLanguage: string) => void;

}

export interface FrameworkProps {
    id: string,
    value: string,
    Framework?: string[]
}

interface imagesProps {
    id: string,
    image1: string,
    image2: string,
    image3: string,
    images: string[];
}

export interface UserProps {
    id: string,
    FirstName: string,
    LastName: string,
    description: string,
    YearsOld: number,
    yearsOfExperience: number,
    AboutDescription: string,
    MyWork: string
}

export interface ProjectProps {
    id?: string,
    framework?: string,
    language?: string,
    nameProject?: string,
    Source?: string,
    image?: string
    limit?: number,
    Project?: string[];
    images?: imagesProps[]
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
    isHidden: boolean;
    setLimit: (Limit: number) => void
}
