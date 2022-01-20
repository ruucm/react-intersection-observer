var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/useIntersection.ts
import {
  useEffect,
  useRef,
  useState
} from "react";
function useIntersection(options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
  remainAfterPassed: false
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const target = ref.current;
    if (target)
      addInterectionObserver({
        target,
        options,
        onVisible: () => setVisible(true),
        onHide: () => setVisible(false)
      });
  }, [ref]);
  return [ref, visible];
}
function addInterectionObserver({
  target,
  options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
    remainAfterPassed: false
  },
  onVisible = (entry) => entry.target.style.background = "green",
  onHide = (entry) => entry.target.style.background = "yellow"
}) {
  const _a = options, { remainAfterPassed } = _a, intersctionOptions = __objRest(_a, ["remainAfterPassed"]);
  if (target) {
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          onVisible(entry);
        else if (remainAfterPassed && entry.boundingClientRect.y > 0)
          onHide(entry);
        else if (!remainAfterPassed)
          onHide(entry);
      });
    };
    const myObserver = new IntersectionObserver(callback, intersctionOptions);
    myObserver.observe(target);
  }
}
export {
  useIntersection
};
