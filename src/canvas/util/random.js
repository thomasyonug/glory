export default function random(min, max) {
    if (arguments.length < 2) {
        max = min;
        min = 0;
    }

    if (min > max) {
        [max, min] = [min, max]
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}