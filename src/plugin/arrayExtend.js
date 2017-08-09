


Object.assign(Array.prototype, {
    $delete (arg) {
        let index
        const tempArr = Array.from(this)

        switch (typeof arg) {
            case 'function':
                index = this.findIndex(arg)
                if (index === -1) { return tempArr }
            break;
            case 'number':
                index = arg
            break;
            case 'object':
                index = this.findIndex(item => arg === item)
                if (index === -1) { return tempArr }
            break;
            default:
            return tempArr 
        }

        tempArr.splice(index, 1)
        return tempArr
    },

    $setItem (arg, value) {
        let index
        const tempArr = Array.from(this)

        switch (typeof arg) {
            case 'function':
                index = this.findIndex(arg)
                if (index === -1) { return tempArr }
            break;
            case 'number':
                index = arg
            break;
            case 'object':
                index = this.findIndex(item => arg === item)
                if (index === -1) { return tempArr }
            break;
            default:
            return tempArr 
        }

        tempArr[index] = value
        return tempArr

    },

    $random () {
        const arr = [...this]

        arr.sort(() => 0.5 - Math.random())

        return arr
    },

    $lastOne () {
        const index = this.length - 1

        return this[index]
    },

    $firstOne () {
        return this[0]
    }
})