"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_svg_1 = __importStar(require("react-native-svg"));
const PaintBrush = ({ color }) => {
    return ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { height: "100%", width: "100%", viewBox: "0 0 24 24", fill: "none", children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fill: color, d: "M19.56 2.49a2.304 2.304 0 0 0-2.047 0c-.342.17-.638.466-.986.814L8.87 10.961c-.2.2-.3.3-.3.425 0 .124.1.224.3.424l3.32 3.32c.2.2.3.3.424.3s.224-.1.424-.3l7.657-7.657c.349-.348.646-.644.816-.986.319-.645.319-1.402 0-2.046-.17-.342-.542-.714-.89-1.061-.348-.349-.72-.72-1.062-.89ZM11.13 17.039c.2-.2.3-.3.3-.425 0-.124-.1-.224-.3-.424l-3.32-3.32c-.2-.2-.3-.3-.424-.3-.125 0-.225.1-.425.3l-.59.592c-.2.2-.3.3-.3.424s.1.224.3.424l3.319 3.32c.2.2.3.3.424.3s.224-.1.424-.3l.591-.591ZM9.019 19.149a.049.049 0 0 0 0-.069L4.92 14.981a.049.049 0 0 0-.069 0c-.882.882-1.448 1.447-1.804 2.159-.355.711-.468 1.503-.644 2.738l-.145 1.016a.75.75 0 0 0 .848.849l1.016-.146c1.235-.176 2.027-.289 2.738-.645.712-.355 1.277-.92 2.159-1.803Z" }) }));
};
exports.default = PaintBrush;
