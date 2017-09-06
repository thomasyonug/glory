### <img src='https://github.com/thomasyonug/glory/blob/master/doc/img/readMeLogo.png' height='120'>
*** 

### card Trigger
| type   |  param   |    
| ------------- |:------:|
| setMagicTrigger |  ((arg, store) => void) => void |   
| setTrapTrigger  |  ((arg, store) => void) => void |   
| setAttackTrigger  |  ((arg, store) => void) => void |   
| setEffectTrigger  |  ((arg, store) => void) => void |   
| deleteMagicTrigger  |  ((arg, store) => void) => void |   
| deleteTrapTrigger  |  ((arg, store) => void) => void |   
| deleteAttackTrigger  |  ((arg, store) => void) => void |   
| deleteEffectTrigger  |  ((arg, store) => void) => void |   



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

| hook timing   | status | hook name | type       | param            |
| ------------- |:------:|:---------:|:----------:|:----------------:|
| spellBefore   | X      |           |            |                  |
| spellAfter    | X      |           |            |                  |
| effect        | done   | card      | function   | (actions, store) |
| animate_name  | done   | card      | string     | x                |
| isEffectTarget| done   | card      | function   | (actions, store, target) |



### Trap Hook

| hook timing     | status      | hook name | type   |  param            |
| --------------- |:-------------:| :--------:| :----: |:----------------: |
| coverAfter      | done          | setTrigger| function | (store, action) |



### middleware stream

![image](https://github.com/thomasyonug/glory/blob/master/doc/img/03585E73-4525-49F1-9F10-A4DA7AE49E18.png)

