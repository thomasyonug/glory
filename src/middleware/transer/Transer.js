import {propertiesCheck} from 'decorators'



window.Transer = 

    @propertiesCheck({
        unStaticProperties: {
            type: String,
            content: String
        }
    })
    class Transer {
        type    = null;
        content = null;

        constructor ({type, content}) {
            Object.assign(this, {
                type,
                content
            })
        }
    }