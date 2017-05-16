/**
 * @param {String} username
 * @param {String} password
 * @param {object} errcode
 */
export const login = {
  url: '/api/login',
  data: {
    errcode: 0
  },
  method: 'post'
}