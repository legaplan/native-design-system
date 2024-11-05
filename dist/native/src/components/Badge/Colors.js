"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBadgeColors = void 0;
const getBorderColor = (theme, color, isOutline) => isOutline
    ? theme.colors.utility[color][600]
    : theme.colors.utility[color][200];
const getIconColor = (theme, color, isOutline) => isOutline
    ? theme.colors.utility[color][600]
    : theme.colors.utility[color][500];
const COLORS = {
    gray: (theme, isOutline) => ({
        text: theme.colors.utility.gray[700],
        icon: getIconColor(theme, "gray", isOutline),
        border: getBorderColor(theme, "gray", isOutline),
        background: theme.colors.utility.gray[50],
    }),
    brand: (theme, isOutline) => ({
        text: theme.colors.utility.brand[700],
        icon: getIconColor(theme, "brand", isOutline),
        border: getBorderColor(theme, "brand", isOutline),
        background: theme.colors.utility.brand[50],
    }),
    error: (theme, isOutline) => ({
        text: theme.colors.utility.error[700],
        icon: getIconColor(theme, "error", isOutline),
        border: getBorderColor(theme, "error", isOutline),
        background: theme.colors.utility.error[50],
    }),
    warning: (theme, isOutline) => ({
        text: theme.colors.utility.warning[700],
        icon: getIconColor(theme, "warning", isOutline),
        border: getBorderColor(theme, "warning", isOutline),
        background: theme.colors.utility.warning[50],
    }),
    success: (theme, isOutline) => ({
        text: theme.colors.utility.success[700],
        icon: getIconColor(theme, "success", isOutline),
        border: getBorderColor(theme, "success", isOutline),
        background: theme.colors.utility.success[50],
    }),
    grayBlue: (theme, isOutline) => ({
        text: theme.colors.utility.grayBlue[700],
        icon: getIconColor(theme, "grayBlue", isOutline),
        border: getBorderColor(theme, "grayBlue", isOutline),
        background: theme.colors.utility.grayBlue[50],
    }),
    blueLight: (theme, isOutline) => ({
        text: theme.colors.utility.blueLight[700],
        icon: getIconColor(theme, "blueLight", isOutline),
        border: getBorderColor(theme, "blueLight", isOutline),
        background: theme.colors.utility.blueLight[50],
    }),
    blue: (theme, isOutline) => ({
        text: theme.colors.utility.blue[700],
        icon: theme.colors.utility.blue[500],
        border: getBorderColor(theme, "blue", isOutline),
        background: theme.colors.utility.blue[50],
    }),
    indigo: (theme, isOutline) => ({
        text: theme.colors.utility.indigo[700],
        icon: theme.colors.utility.indigo[500],
        border: getBorderColor(theme, "indigo", isOutline),
        background: theme.colors.utility.indigo[50],
    }),
    purple: (theme, isOutline) => ({
        text: theme.colors.utility.purple[700],
        icon: theme.colors.utility.purple[500],
        border: getBorderColor(theme, "purple", isOutline),
        background: theme.colors.utility.purple[50],
    }),
    pink: (theme, isOutline) => ({
        text: theme.colors.utility.pink[700],
        icon: theme.colors.utility.pink[500],
        border: getBorderColor(theme, "pink", isOutline),
        background: theme.colors.utility.pink[50],
    }),
    orange: (theme, isOutline) => ({
        text: theme.colors.utility.orange[700],
        icon: theme.colors.utility.orange[500],
        border: getBorderColor(theme, "orange", isOutline),
        background: theme.colors.utility.orange[50],
    }),
};
const getBadgeColors = (color, theme, isOutline) => {
    return COLORS[color](theme, isOutline);
};
exports.getBadgeColors = getBadgeColors;
