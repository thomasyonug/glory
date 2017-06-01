import wsConfig from './config'
import io from 'socket.io-client'


export const rootSocket = io(wsConfig.wsUrl)



