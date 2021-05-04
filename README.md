# My Learning Frontend Clean Architecture

💀 フロントエンドでClean Architectureを実践できないかと格闘したコード。

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

