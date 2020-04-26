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

<<<<<<< HEAD
# Start test (jest)
=======
# Test start
>>>>>>> 7c36672d881c8190c8c2d3350565bfe4eb2a50fa
yarn test

```

## 도큐먼트

### 프로젝트 구조

```
├─public
|   └─favicon.ico
|   └─index.html
|
└─src
|   ├─client
|   └─server
```

모든 소스 코드는 src 폴더 안에 있습니다. src 폴더 안에는 `client` 폴더와 `server` 폴더가 있습니다. 모든 프론트엔드 코드와 에셋들은 `client` 폴더안에 위치하고 백 엔드 코드들은 `server` 폴더에 있습니다.

### Babel

바벨은 최신의 자바 스크립트 코드를 작성하는데 도움을 줍니다. 최신의 자바스크립트 언어를 지원하는 않는 환경에서, 바벨은 최신의 자바스크립트 버전을 컴파일하여 낮은 버전의 자바스크립트로 변환시킵니다. 또한 바벨은 JSX를 자바스크립트로 변환시키는데 사용됩니다.

[.babelrc file](https://babeljs.io/docs/usage/babelrc/)은 바벨에 필요한 설정을 정의하는데 사용됩니다. 밑에 있는 코드는 이 프로젝트에서 사용됩니다.

```javascript
{
    "presets": ["env", "react"]
}
```

바벨은 변환을 위해서 플러그인을 필요로 하며 프리셋 설정은 바벨이 정의한 플러그인들의 집합입니다. 프리셋 "presets": ["```env```", "react"]는 `babel-preset-es2015`과 `babel-preset-es2016`, `babel-preset-es2017`을 사용할 수 있으며 이들은 es5로 변환됩니다. "presets": ["env", "```react```"]는 JSX를 자바스크립트로 변환시킵니다.

### 커밋 메세지 작성 요령

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
2. (`git checkout -b feature/fooBar`) 명령어로 새 브랜치를 만드세요.
3. (`git commit -am 'Add some fooBar'`) 명령어로 커밋하세요.
4. (`git push origin feature/fooBar`) 명령어로 브랜치에 푸시하세요. 
5. 풀리퀘스트를 보내주세요.
