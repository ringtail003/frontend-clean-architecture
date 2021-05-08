# My Learning Frontend Clean Architecture

💀 フロントエンドでClean Architectureを実践できないかと格闘したコード。

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

💀 [Miro](https://miro.com/app/board/o9J_kopDdiw=/)
レイヤーやそれぞれのサービスクラスの関連性など、小さな脳みそで考えをまとめたもの。

