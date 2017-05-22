# API ( proxy: articleyoung.cn:8888 )


## prefix: /public

### 1. user

url

> /login

param

| field          | comment          | require  |
| ------------- |:-------------:| -------:|
|username| username | true |
|password| password | true |

return

| field          | comment          | 
| ------------- |:-------------:|
|errcode| success：0, false: 999, return cookie|


test

    curl -H "Content-Type: application/json" -X POST  --data '{"username": "admin", "password": "123456"}'  articleyoung.cn:8888/public/login

