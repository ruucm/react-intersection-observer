var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/PlaceholderState.tsx
import {
  createElement
} from "react";
import { Stack, Color } from "framer";
var textStyles = {
  maxWidth: "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  textAlign: "center",
  wordWrap: "normal",
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
  Arial, sans-serif`
};
var colors = {
  error: "#FF3333",
  placeholder: "#0099FF",
  placeholderLight: "rgba(0, 153, 255, 0.25)"
};
var stripedStyles = {
  backgroundImage: `linear-gradient(135deg, ${colors.placeholderLight} 5.56%, transparent 5.56%, transparent 50%, ${colors.placeholderLight} 50%, ${colors.placeholderLight} 55.56%, transparent 55.56%, transparent 100%)`,
  backgroundSize: `12.73px 12.73px`
};
function PlaceholderState({
  title,
  label,
  error,
  striped = false
}) {
  const color = Color(error ? colors.error : colors.placeholder);
  return /* @__PURE__ */ createElement(Stack, {
    direction: "vertical",
    alignment: "center",
    distribution: "center",
    size: "100%",
    gap: 4,
    padding: 12,
    radius: "calc(4px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1))",
    border: `calc(1px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)) dashed ${Color.alpha(color, 0.32).toValue()}`,
    background: Color.alpha(color, 0.12),
    style: striped ? stripedStyles : {}
  }, title && /* @__PURE__ */ createElement("h5", {
    style: __spreadProps(__spreadValues({}, textStyles), {
      color: color.toValue(),
      fontSize: "calc(13px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1))",
      fontWeight: 500,
      marginBottom: label && "calc(6px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1))"
    })
  }, title), label && /* @__PURE__ */ createElement("p", {
    style: __spreadProps(__spreadValues({}, textStyles), {
      color: color.toValue(),
      fontSize: "calc(12px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1))"
    })
  }, label));
}
export {
  PlaceholderState
};
