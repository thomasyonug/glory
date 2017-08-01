Object.assign(Object.prototype, {
    [Symbol.for('safeGet')] (paths, value) {
        return paths.reduce((xs, x) => (xs && xs[x]) ? xs[x] : value || null, this)
    }
})