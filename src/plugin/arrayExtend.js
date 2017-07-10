Object.assign(Array.prototype, {
    $delete (arg) {
        let index
        const tempArr = Array.from(this)

        switch (typeof arg) {
            case 'function':
                index = this.findIndex(arg)
            break;
            case 'number':
                index = arg
            break;
            case 'object':
                index = this.findIndex(item => arg === item)
            break;
            default:
            return tempArr 
        }
        tempArr.splice(index, 1)
        return tempArr
    }
})