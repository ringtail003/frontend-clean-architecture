# My Learning Frontend Clean Architecture

ð ãã­ã³ãã¨ã³ãã§Clean Architectureãå®è·µã§ããªããã¨æ ¼éããã³ã¼ãã

![sample](https://user-images.githubusercontent.com/15980747/117543743-0e188d00-b059-11eb-83dc-04f2fa08b597.gif)

## Installation 

```bash 
  # clone
  git clone {THIS_REPOSITORY}
  cd {THIS_REPOSITORY}

  # install
  nvm use
  npm ci
  npm start

  # start
  npm run ng serve -- --open
  > (open browser http://localhost:4200)
```
    
## Directory structure

### Ajax request

- repositories `Framework & Driver`
- api-interfaces `Interface adaptor`
- api-presenters `Interface adaptor`

### UI

- components `Framework & Driver`
  - container
  - child
- directives `Framework & Driver`
- ui-presenters `Interface adaptor`
- view-models `Interface adaptor`

### Business rules

- entities `Entity`
- use-cases `UseCase`

### Other

- exceptions

## Appendix

ð [Miro](https://miro.com/app/board/o9J_kopDdiw=/)
ã¬ã¤ã¤ã¼ãããããã®ãµã¼ãã¹ã¯ã©ã¹ã®é¢é£æ§ãªã©ãå°ããªè³ã¿ãã§èããã¾ã¨ãããã®ã

