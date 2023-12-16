# npm starter kit

`vite`와 `js`를 사용하여 `ES Module` 패키지를 만들기 위한 기본적인 개발환경을 제공합니다.

# requirements

```sh
$ node -v
# v16.16.0

$ npm -v
# 8.11.0
```

# Getting Started

`src/npm-starter-kit/`에 소스 코드를 작성하세요.

코드를 작성했다면 빌드를 해야합니다.

```sh
$ npm run publish:prepare
```

`publish:prepare`를 실행하면 src 폴더를 빌드하여 dist 폴더를 생성합니다.
그리고 `package.json`을 생성합니다.

`dist/npm-starter-kit`에서 빌드 결과물을 확인하였다면 npm에 배포하세요.

아래 명령어를 실행하기 전에 `npm`에 로그인되어 있는지 확인하세요.

```sh
$ npm run publish:full
```

---

`d.ts` 타입 파일을 생성하고 싶지 않다면 아래의 스크립트를 수정하세요.

```
// with d.ts
"build": "npm run init-dist && npm run copy-src && npm run generate-types"

// without d.ts
"build": "npm run init-dist && npm run copy-src"
```

# example

개발 과정에서 소스 코드를 테스트해볼 수 있습니다.

```sh
$ npm run dev
```

`http://localhost:5173/example/01/index.html`로 이동하세요.
