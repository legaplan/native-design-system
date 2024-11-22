import { ComponentScheme } from "../../theme/schemes/createComponentsScheme";
import { FontSizeKeys } from "../../constants/theme";
import { TouchableOpacityProps } from "react-native";
export interface ButtonChildrenProps {
    textSize: FontSizeKeys;
    textColor: string;
}
export type ButtonVariant = keyof ComponentScheme["button"];
export type ButtonSize = 1 | 2 | 3;
export interface ButtonProps extends TouchableOpacityProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    onPress: () => void;
    children: React.ReactNode;
}
export declare const Button: {
    ({ variant, size, children, disabled, onPress, }: ButtonProps): import("react/jsx-runtime").JSX.Element;
    Icon: ({ name, color, size }: import("..").IconProps) => import("react/jsx-runtime").JSX.Element;
    Text: ({ children }: {
        children: React.ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
};
