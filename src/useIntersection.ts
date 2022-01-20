import * as React from "react"

export function useIntersection(
    options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
        remainAfterPassed: false,
    }
) {
    const ref = React.useRef(null)
    const [visible, setVisible] = React.useState(false)

    React.useEffect(() => {
        const target = ref.current
        if (target)
            addInterectionObserver({
                target,
                options,
                // @ts-ignore
                onVisible: () => setVisible(true),
                // @ts-ignore
                onHide: () => setVisible(false),
            })
    }, [ref])

    return [ref, visible]
}

function addInterectionObserver({
    target,
    options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
        remainAfterPassed: false,
    },
    onVisible = (entry: any) => (entry.target.style.background = "green"),
    onHide = (entry: any) => (entry.target.style.background = "yellow"),
}: any) {
    const { remainAfterPassed, ...intersctionOptions } = options
    if (target) {
        const callback = (entries: any, observer: any) => {
            entries.forEach((entry: any) => {
                if (entry.isIntersecting) onVisible(entry)
                else if (remainAfterPassed && entry.boundingClientRect.y > 0)
                    onHide(entry)
                else if (!remainAfterPassed) onHide(entry)
            })
        }

        const myObserver = new IntersectionObserver(
            callback,
            intersctionOptions
        )
        myObserver.observe(target)
    }
}

