import { StaticImageData } from "next/image";

export interface Link {
    lable: string;
    icon: React.ReactNode;
    link: string;
}

export interface BannerTypeProps {
    src: string | StaticImageData;
    alt?: string;
    title: string;
    subTitle: string | TrustedHTML;
    description: string;
    listItems: {
        number: string;
        description: string;
    }[];
    bgimg?: {
        src: string | StaticImageData;
        alt: string;
    }
}

export interface TwoColCardprops {
    title: string;
    description: string | TrustedHTML;
    description2?: string;
    listItems?: {
        icon: React.ReactNode;
        description: string;
    }[];
    image: {
        src: string | StaticImageData;
        alt?: string;
    };
    href: string;
    linkText: string;
}

export interface DataTypeProps {
    title: string;
    description: string | TrustedHTML;
    link?: {
        href: string;
        linkText: string;
    }
    items: {
        data?: {
            title?: string;
            description?: string;
        }
        image?: {
            src: string;
            alt: string;
        };
        icon?: React.ReactNode [] | React.ReactNode;
        centerTitle?: string;
    }[];
}

export interface CardProps {
    data?: {
        title?: string;
        description?: string;
    }
    image?: {
        src: string;
        alt: string;
    };
    icon?: React.ReactNode;
    center?: boolean;
    border?: boolean;
    centerTitle?: string;
    aspect?: number;
}

export interface ContactUsProps {
    label: string;
    href?: string;
    icon?: React.ReactNode;
    traget?: boolean;
}