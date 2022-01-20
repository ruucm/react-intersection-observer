var __defProp = Object.defineProperty;
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

// src/IntersectionObserver.tsx
import {
  Children,
  cloneElement,
  createElement,
  isValidElement
} from "react";
import {
  Frame
} from "framer";
import { useIntersection } from "./useIntersection.js";
import { PlaceholderState } from "./PlaceholderState.js";
function IntersectionObserver({
  children,
  visibleVaraint,
  invisibleVaraint,
  threshold,
  remainAfterPassed,
  customObserver,
  guide,
  size,
  x,
  y,
  offsetX,
  offsetY
}) {
  const [ref, visible] = useIntersection({
    threshold: threshold === 1 ? 0.99 : threshold,
    remainAfterPassed
  });
  const customObserverProps = customObserver ? {
    top: `calc(${y}% + ${offsetY}px)`,
    left: `calc(${x}% + ${offsetX}px)`,
    x: `-${x}%`,
    y: `-${y}%`,
    size
  } : {
    size: "100%"
  };
  if (Children.count(children) <= 0)
    return createElement(PlaceholderState, {
      title: "No Smart Component",
      label: "Connect to a Smart Component"
    });
  return /* @__PURE__ */ createElement(Frame, {
    size: "100%",
    background: ""
  }, Children.map(children, (child, id) => cloneElement(isValidElement(child.props.children) ? child.props.children : child, {
    key: id,
    variant: visible ? visibleVaraint : invisibleVaraint
  })), /* @__PURE__ */ createElement(Frame, __spreadValues({
    ref,
    background: guide ? visible ? "hsla(24, 70%, 63%, 0.5)" : "hsla(247, 70%, 63%, 0.5)" : ""
  }, customObserverProps)));
}
export {
  IntersectionObserver
};
