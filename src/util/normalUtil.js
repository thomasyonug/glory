

export function deepSerialize (target) {
    let result
    
    if (Object.keys(target).find(k => k === 'toString')) {
        result = target.toString()
    } else if (Array.isArray(target)) {
        result = []
        for (let i=0; i<target.length; i++) {
            result[i] = deepSerialize(target[i])
        }
    } else if (typeof target === 'object') {
        result = {}
        for (let [key, value] of Object.entries(target)) {
            if (typeof value === 'object') {
                result[key] = deepSerialize(value)
            } else {
                result[key] = value
            }
        }
    } else {
        result = target
    }

    return result
}








export const syncRandom = seed => {
    function* core(seed){
        let next = seed
        while(1) {
            next = next * 1103515245 + 12345 
            next = (next /65536) % 32768
            yield next
        }
    }

    const generator = core(seed) 
    return () => generator.next().value
}