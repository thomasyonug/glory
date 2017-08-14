### <img src='https://github.com/thomasyonug/glory/blob/master/doc/img/readMeLogo.png' height='120'>
*** 

### Monster Hook

| hook timing   | status | hook name    | param                 | where |        
| ------------- |:------:|:------------:| :--------------------:| :----:|
| attackBefore  | done   | prophet      | (store, next, action) | card  |
| attackAfter   | done   | aftershock   | (store, action)       | card  |     
| deathBefore   | done   | struggle     | (store, next, action) | card  |      
| deathAfter    | done   | deathwhisper | (store, action)       | card  |      
| changeBefore  | X      |              |                       |       |
| changeAfter   | X      |              |                       |       |
| summonBefore  | done   | momentum     | (store, next, action) | card  |      
| summonAfter   | done   | appearance   | (store, action)       | card  |      


### Magic Hook

| hook timing   | status | hook name |   
| ------------- |:------:| :--------:|
| spellBefore   | X      |           |
| spellAfter    | X      |           |
| spell         | done   | card      |


### Trap Hook

| hook timing     | status        
| ------------- |:-------------:|
| triggerBefore | X |
| triggerAfter  | X |



### middleware stream

![image](https://github.com/thomasyonug/glory/blob/master/doc/img/03585E73-4525-49F1-9F10-A4DA7AE49E18.png)

