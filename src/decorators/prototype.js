
export const prototype = properties => Target => {
    Object.assign(Target.prototype, properties)
    return Target
}


