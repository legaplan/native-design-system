import { BaseTheme } from "../../constants/theme";

export type ForegroundScheme = {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  quinary: string;
  senary: string;
  white: string;
  disabled: string;
  brandPrimary: string;
  brandSecondary: string;
  errorPrimary: string;
  errorSecondary: string;
  warningPrimary: string;
  warningSecondary: string;
  successPrimary: string;
  successSecondary: string;
};

export const createLightForegroundScheme = (
  theme: BaseTheme
): ForegroundScheme => ({
  primary: theme.colors.primary.lightGray[900],
  secondary: theme.colors.primary.lightGray[700],
  tertiary: theme.colors.primary.lightGray[600],
  quaternary: theme.colors.primary.lightGray[500],
  quinary: theme.colors.primary.lightGray[400],
  senary: theme.colors.primary.lightGray[300],
  white: theme.colors.primary.base.white,
  disabled: theme.colors.primary.lightGray[400],
  brandPrimary: theme.colors.primary.brand[600],
  brandSecondary: theme.colors.primary.brand[500],
  errorPrimary: theme.colors.primary.error[600],
  errorSecondary: theme.colors.primary.error[500],
  warningPrimary: theme.colors.primary.warning[600],
  warningSecondary: theme.colors.primary.warning[500],
  successPrimary: theme.colors.primary.success[600],
  successSecondary: theme.colors.primary.success[500],
});

export const createDarkForegroundScheme = (
  theme: BaseTheme
): ForegroundScheme => ({
  primary: theme.colors.primary.base.white,
  secondary: theme.colors.primary.darkGray[300],
  tertiary: theme.colors.primary.darkGray[400],
  quaternary: theme.colors.primary.darkGray[400],
  quinary: theme.colors.primary.darkGray[500],
  senary: theme.colors.primary.darkGray[600],
  white: theme.colors.primary.base.white,
  disabled: theme.colors.primary.darkGray[500],
  brandPrimary: theme.colors.primary.brand[500],
  brandSecondary: theme.colors.primary.brand[500],
  errorPrimary: theme.colors.primary.error[500],
  errorSecondary: theme.colors.primary.error[400],
  warningPrimary: theme.colors.primary.warning[500],
  warningSecondary: theme.colors.primary.warning[400],
  successPrimary: theme.colors.primary.success[500],
  successSecondary: theme.colors.primary.success[400],
});