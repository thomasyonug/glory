export function getElPosition (el) {
    const {
        top,
        bottom,
        left,
        right
    } = el.getBoundingClientRect()

    const {
        width,
        height
    } = window.getComputedStyle(el)

    return {
        x: left * 1,
        y: top * 1
    }
}