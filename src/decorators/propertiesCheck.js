

export const propertiesCheck = ({staticProperties = {}, unStaticProperties = {}}) => Target => {
    if (process.env.NODE_ENV === 'development') {
        return class extends Target {
            constructor(...args) {
                super(...args)

                setTimeout(() => {

                    Object.keys(unStaticProperties).forEach(key => {
                        if (!assertType(this[key], unStaticProperties[key])) { throw new Error(`${this.constructor.name}  property ${key} type error `) }
                    }) 

                    Object.keys(staticProperties).forEach(key => {
                        if (!assertType(this.constructor[key], staticProperties[key])) { throw new Error(`${this.constructor.name}  property ${key} type error `) }
                    })
                }, 0)
            }
        }
    } else {
        return Target
    }
}



function assertType (value, type) {
  let valid
  let expectedType
  if (type === String) {
    expectedType = 'string'
    valid = typeof value === expectedType
  } else if (type === Number) {
    expectedType = 'number'
    valid = typeof value === expectedType
  } else if (type === Boolean) {
    expectedType = 'boolean'
    valid = typeof value === expectedType
  } else if (type === Function) {
    expectedType = 'function'
    valid = typeof value === expectedType
  } else if (type === Object) {
    expectedType = 'object'
    valid = typeof value === expectedType
  } else if (type === Array) {
    expectedType = 'array'
    valid = Array.isArray(value)
  } else {
    valid = value instanceof type
  }
  return valid
}