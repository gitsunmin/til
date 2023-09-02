# Learning Next js

## install nextjs

```bash
npx create-next-app@latest
```

## Routing(App Router)

next의 App Router는 pages 디렉토리에 있는 파일들을 기반으로 자동으로 라우팅을 해줍니다.

```shell
├── README.md
├── next-env.d.ts
├── next.config.js
├── node_modules
├── package-lock.json
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── public
├── src
    └── app
        ├── favicon.ico # favicon
        ├── globals.css # 글로벌 css
        ├── loading.tsx # 로딩 화면
        ├── error.tsx # 에러 화면
        ├── global-error.tsx # 글로벌 에러 화면
        ├── template.tsx # 템플릿 파일
        ├── not-found.tsx # 404 화면
        ├── layout.tsx # UI의 레이아웃을 담당하는 파일
        └── page.tsx # 페이지를 담당하는 파일
├── tailwind.config.ts
└── tsconfig.json
```

app 폴더의 안에 app폴더를 만들었습니다. 이 app폴더는 위에서 이야기한대로, 폴더에 있는 파일들을 기반으로 자동으로 라우팅을 해주는 역할을 합니다. 그리고 app폴더 안에는 favicon, 글로벌 css, 로딩 화면, 에러 화면, 글로벌 에러 화면, 템플릿 파일, 404 화면, UI의 레이아웃을 담당하는 파일, 페이지를 담당하는 파일이 있습니다.

`loading.tsx`파일은 페이지가 로딩될 때 보여지는 화면을 담당합니다. 특이한 점은 app 하위 페이지 또는 모든 곳에 사용이 가능하며 각각 다른 loading 화면을 보여줄 수 있습니다. 그리고, 이는 우선순위에 따라서 호출과 하이드레이션을 나누어 진행하여 사용자에게 더 나은 경험을 제공할 수 있습니다.

`error.tsx`, `global-error.tsx`는 error boundary를 제공하여 사용자에게 오류에 대한 메시지를 진해 또는 회복할 수 있는 방법을 제공합니다.

### Dynamic Routes

또 다른 path를 만들기 위해서는 app폴더 안에 새로운 폴더를 만들어 주면 됩니다. 예를 들면

```shell
└── app
    ├── blog
        ├── ...
        ├── layout.tsx # UI의 레이아웃을 담당하는 파일
        └── page.tsx # 페이지를 담당하는 파일
    ├── dashboard
        ├── ...
        ├── layout.tsx # UI의 레이아웃을 담당하는 파일
        └── page.tsx # 페이지를 담당하는 파일
    ├── ...
    ├── layout.tsx # UI의 레이아웃을 담당하는 파일
    └── page.tsx # 페이지를 담당하는 파일
```

이런식으로 만들어 주면 됩니다.

또 특별한 형식을 이용해서 root path에 다른 경로를 만들 수도 있습니다.

```shell
└── app
    ├── [...slug]
        ├── ...
        ├── layout.tsx # UI의 레이아웃을 담당하는 파일
        └── page.tsx # 페이지를 담당하는 파일
    ├── ...
    ├── layout.tsx # UI의 레이아웃을 담당하는 파일
    └── page.tsx # 페이지를 담당하는 파일
```

이렇게 만들어진 페이지는 다음과 같이 접근할 수 있습니다.

```shell
http://localhost:3000/1
http://localhost:3000/2
http://localhost:3000/3
```

또, 단순히 폴더를 분리하기 위해서는 다음과 같이 만들어 줄 수 있습니다.

```shell
└── app
    ├── (blog)
        ├── [...slug]
            ├── ...
            ├── layout.tsx # UI의 레이아웃을 담당하는 파일
            └── page.tsx # 페이지를 담당하는 파일
    ├── ...
    ├── layout.tsx # UI의 레이아웃을 담당하는 파일
    └── page.tsx # 페이지를 담당하는 파일
```

이렇게 구성하면 blog라는 폴더는 라우팅이 되지 않습니다.
이 구조 또한 위와 같이

```shell
http://localhost:3000/1
http://localhost:3000/2
http://localhost:3000/3
```

의 접근이 가능합니다.

### Parallel Routes

nextjs은 같은 path에 두 개의 페이지를 랜더링 할 수 있습니다. 이는 다음과 같이 구성할 수 있습니다.

```shell
└── app
├── @dashboard
        ├── ...
        ├── layout.tsx # UI의 레이아웃을 담당하는 파일
        └── page.tsx # 페이지를 담당하는 파일
├── @blog
        ├── ...
        ├── layout.tsx # UI의 레이아웃을 담당하는 파일
        └── page.tsx # 페이지를 담당하는 파일
    ├── ...
    ├── layout.tsx # UI의 레이아웃을 담당하는 파일
    └── page.tsx # 페이지를 담당하는 파일
```

이렇게 구성 후에 root Layout에서 아래와 같이 사용할 수 있습니다.

```tsx
export default function Layout(props: {
  children: React.ReactNode;
  dashboard: React.ReactNode;
  blog: React.ReactNode;
}) {
  return (
    <>
      {props.children}
      {props.dashboard}
      {props.blog}
    </>
  );
}
```

### Intercepting Routes

이름처럼 이 Intercepting Routes는 사용자가 접근한 경로를 가로채서, 실제 페이지의 이동이 아닌, 마치 팝업처럼 화면에 보여줄 수 있습니다.

예를 들어서 `card/list`에서 이미지를 클릭하여 `photo/123`으로 route를 이동하며, 바닥에 카드 리스트가 있는 상태에서 오버레이와 함께 photo페이지의 123이라는 파람을 가진 페이지를 보여줄 수 있습니다. 또한, 새로고침을 하거나 직접 `photo/123`으로 접근을 하면, 독립적으로 photo페이지를 보여줄 수 있습니다.

이 기능은 다음과 같이 구현할 수 있습니다.

```shell
└── app
├── photo
    ├── @modal
        └── (..)photo
            └── [id]
                ├── ...
                ├── layout.tsx # UI의 레이아웃을 담당하는 파일
                └── page.tsx # 페이지를 담당하는 파일
├── card
    └── list
        ├── ...
        ├── layout.tsx # UI의 레이아웃을 담당하는 파일
        └── page.tsx # 페이지를 담당하는 파일
```

또한, 이 (..)같은 표현은 조금 이질감이 느껴지지만,,, 받아드려야할 것 같네요. 아래와 같은 정의가 있습니다.

- (.) 현재 디렉토리를 가리킵니다.
- (..) 바로 상위 디렉토리를 가리킵니다.
- (..)(..) 두 단계 상위 디렉토리를 가리킵니다.
- (...) root 디렉토리를 가리킵니다.
