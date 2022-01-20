import * as React from "react"
import {
    Frame,
    addPropertyControls,
    ControlType,
} from "framer"
import { useIntersection } from "./useIntersection"
import { PlaceholderState } from "./PlaceholderState"

/**
 * IntersectionObserver
 *
 * @framerIntrinsicWidth 90
 * @framerIntrinsicHeight 50
 */
export function IntersectionObserver({
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
    offsetY,
}: any) {
    const [ref, visible] = useIntersection(
        // @ts-ignore
        {
            threshold: threshold === 1 ? 0.99 : threshold, // threshold: 1 option have bugs on Chrome
            remainAfterPassed,
        }
    )

    const customObserverProps = customObserver
        ? {
              // [0%, 50%, 100%] - relative to parent width, height
              top: `calc(${y}% + ${offsetY}px)`,
              left: `calc(${x}% + ${offsetX}px)`,
              // [-0%, -50%, -100%] - relative it's own width, height
              // customObserver should be inside of the parent layer.
              x: `-${x}%`,
              y: `-${y}%`,
              size,
          }
        : {
              size: "100%",
          }

    if (React.Children.count(children) <= 0)
        return React.createElement(PlaceholderState, {
            title: "No Smart Component",
            label: "Connect to a Smart Component",
        })

    return (
        <Frame size="100%" background="">
            {React.Children.map(children, (child, id) =>
                React.cloneElement(
                    React.isValidElement(child.props.children)
                        ? child.props.children
                        : child,
                    {
                        key: id,
                        variant: visible ? visibleVaraint : invisibleVaraint,
                    }
                )
            )}
            <Frame
                // @ts-ignore
                ref={ref}
                background={
                    // TODO: add more acceptable visible highlights like 🙈🐵
                    guide
                        ? visible
                            ? "hsla(24, 70%, 63%, 0.5)"
                            : "hsla(247, 70%, 63%, 0.5)"
                        : ""
                }
                {...customObserverProps}
            />
        </Frame>
    )
}
