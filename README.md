# 성결대학교 2019 졸업작품 프로젝트 [사다드림]😀

## 프로젝트 소개

>해외직구 대행 서비스인 '사다 드림'은 여행자 또는 현지 거주자들이 직접 해외 상품을 구매대행 해주는 서비스이다. 여행자들이 1:1 개인 구매요청 건들을 사다 줌으로써 여행비 혹은 수익금을 벌 수 있고, 구매자는 사다드림을 통해 쉽고 저렴하게 해외 신/인기 상품을 구매할 수 있다. 특히, 기존 해외 직구로는 구할 수 없는 신상품이나 해외 오프라인으로만 유통되는 상품들을 구매할 수 있다. 

## 프로젝트 설치 및 시작

```bash
# Clone the repository
git clone https://github.com/dongwooklee96/sada-dream.git

# Install dependencies (server)
npm i (or yarn install)

# Install dependencies (client)
yarn (or npm install)

# Start development server and client
yarn dev (or npm run dev)

# Start server
yarn server (or npm start)

# Start client
yarn client 

# Start test (jest)
yarn test

```

## 프로젝트를 클론하고 해야할 일

```
# 프로젝트 루트 폴더에서
npm i 

# clinet 폴더에서 
npm i

#
mkdir config
cd mkdir && touch config.json

{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

# .env 파일 생성
touch .env

# upload 파일 생성
mdkir upload

```


## 도큐먼트

### 커밋 메세지 작성 가이드

```
- feat: 새로운 기능을 추가할 경우 

- fix: 버그를 고친 경우 

- docs: 문서 수정한 경우 

- style: 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 

- refactor: 프로덕션 코드 리팩터링 

- test: 테스트 추가, 테스트 리팩터링 (프로덕션 코드 변경 없음) 

- chore: 빌드 테스크 업데이트, 패키지 매니저 설정할 경우 (프로덕션 코드 변경 없음) 
```

### 기여 방법

1. (<https://github.com/dongwooklee96/sada-dream.git>)을 포크합니다.
2. (`git checkout -b [example]/f`) 명령어로 새 브랜치를 만드세요.
3. (`git commit -am 'Add some fooBar'`) 명령어로 커밋하세요.
4. (`git push origin feature/fooBar`) 명령어로 브랜치에 푸시하세요. 
5. 풀리퀘스트를 보내주세요.
