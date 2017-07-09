Object.assign(Array.prototype, {
    $deleteByItem (cb) {
        const tempArr = Array.from(this)
        const index = this.findIndex(cb)
        tempArr.splice(index, 1)
        return tempArr
    }
})