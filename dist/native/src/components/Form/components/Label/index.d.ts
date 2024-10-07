import React from "react";
export interface LabelProps {
    isRequired?: boolean;
    children: React.ReactNode;
}
declare const Label: ({ children, isRequired }: LabelProps) => import("react/jsx-runtime").JSX.Element;
export default Label;
