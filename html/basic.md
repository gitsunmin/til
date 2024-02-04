# Basic

## HTML의 구조
```html

<p>my name is sunmin.</p>

```

- 위 태그에서 p를 `<>`, `</>`로 감싸는 것을 **태그**라고 한다.
- 첫 번째 태그는 **시작 태그(Opening tag)**, 두 번째 태그는 **종료 태그(Closing tag)**라고 한다.
- 'my name is sunmin.'은 **내용(Content)**이라고 한다.
- 태그와 내용을 합쳐 **요소(Element)**라고 한다.
- 요소는 **요소 이름(Element name)**과 **속성(Attribute)**으로 구성된다.
- 요소 이름은 **태그 이름(Tag name)**이라고도 한다.
- 요소 이름과 속성은 **대소문자를 구분하지 않는다**. (HTML5에서는 소문자로 통일)
- 몇몇 요소는 **종료 태그가 없다**. (예: br, hr, img)
- 요소는 **중첩(Nesting)**될 수 있다.
- 요소는 **중첩되는 순서가 중요하다**.
- 요소는 **중첩되는 순서에 따라 의미가 달라진다**.
- 요소는 **중첩되는 순서에 따라 브라우저에 표시되는 모습이 달라진다**.
  - 예: `<strong><em>안녕하세요</em></strong>` vs `<em><strong>안녕하세요</strong></em>`
  - 전자는 **굵은 글씨로 강조**되고, 후자는 **기울임꼴로 강조**된다.

## Glossary
- *메타데이터*: 데이터를 설명하는 데이터 예를 들어, HTML은 데이터입니다. 그리고 HTML의 `<head>` 안에는 문서 작성자나 문서 요약과 같이 문서를 설명하는 데이터, 즉 메타데이터를 넣을 수 있습니다.

## Tags

#### `<!DOCTYPE html>`
이 태그는 html파일의 가장 첫 줄에 위치해야 하며, doctype은 자동 오류 확인이나 다른 유용한 것을 의미하는 좋은 HTML로 인정받기 위해 HTML 페이지가 따라야 할 일련의 규칙으로의 연결통로로써 작동하는 것을 의미하였습니다.

#### `<html></html>`
이 요소는 페이지 전체의 콘텐츠를 감싸며, 루트(root) 요소라고도 합니다. 

##### 속성
- lang: 이 lang 속성은 스크린 리더와 같은 보조 기술을 사용하는 사람들에게 문서가 어떤 언어로 작성되었는지 알려주며, 검색 엔진에게도 도움이 됩니다.
```html
<html lang="ko">
...
</html>
```

이 외에도 manifest, xmlns, xmlns:xlink 등의 속성이 있지만, 최근에는 사용되지 않는 속성들이므로 생략하도록 하겠습니다.

#### `<head></head>`
이 요소는 문서에 대한 메타데이터를 포함하며, 문서 제목, 스크립트, 스타일 시트, 기타 메타 정보를 포함할 수 있습니다.
> 참고: `<head>`의 주 목적은 기계 처리를 위한 정보이고, 사람이 읽을 수 있는 정보가 아닙니다. 최상위 제목, 작성자 목록 등 사람에게 보여야 할 정보는 `<header>` 요소를 사용하세요.

또힌. 사용되는 문서가 `<iframe>`, srcdoc 문서거나, 제목 정보가 더 높은 단계의 규약에 존재하는 경우(HTML 이메일의 제목처럼) 0개 이상의 메타에이터 콘텐츠.

이외에는 하나 이상의 메타데이터 콘텐츠. 단, 정확히 한 개의 `<title>` 요소를 포함해야 합니다.

##### 속성
- profile: 이 profile 속성은 문서에 대한 프로필 링크를 정의합니다. 이 속성은 더 이상 사용되지 않으며, 대신 `<link rel="profile">`을 사용하세요.

##### Example
```html
<!doctype html>
<html>
  <head>
    <title>문서 제목</title>
  </head>
</html>
```

#### `<meta>`
HTML `<meta>` 요소는 `html`문서의 *메타데이터*를 나타냅니다.

##### 속성

- charset: 페이지의 문자 인코딩을 선언합니다. 이 특성이 존재할 경우, 그 값은 반드시 문자열 "utf-8"의 대소문자 구분 없는 ASCII 표현이어야 합니다.
- name: 메타 요소가 어떤 정보의 형태를 갖고 있는지 알려줍니다.
- content: 실제 메타데이터의 컨텐츠입니다.

> facebook에서는 더 풍부한 메타데이터를 사용하기 위해서 아래와 같은 프로토콜을 사용하고 있습니다.
  - [Open Graph Data](https://ogp.me/)

#### `<title></title>`
이 요소는 문서의 제목을 정의합니다. 제목은 브라우저의 제목 표시줄이나 페이지의 탭에 표시됩니다. 또한 검색 엔진의 결과 페이지에 표시됩니다.

#### `<body></body>`
이 요소는 문서의 본문을 나타냅니다. 브라우저는 이 요소의 콘텐츠 즉, 보여지는 부분을 표시합니다. 그렇기 때문에, 보여지는 부분의 전역적인 콜백을 정의하는 것이 가능합니다.
- onafterprint
사용자가 문서를 출력한 뒤 호출할 함수.
- onbeforeprint
사용자가 문서 출력을 요청했을 때 호출할 함수.
- onblur
문서가 포커스를 상실했을 때 호출할 함수.
- onerror
문서를 제대로 불러오지 못했을 때 호출할 함수.
- onfocus
문서가 포커스를 받을 때 호출할 함수.
- onhashchange
문서의 현재 주소 중 Fragment identifier part(해시('#') 문자로 시작)가 변경됐을 때 호출할 함수.
- onlanguagechange Experimental
선호 언어 변경 시 호출할 함수.
- onload
문서를 다 불러왔을 때 호출할 함수.
- onmessage
문서가 메시지를 받았을 때 호출할 함수.
- onoffline
네트워크 연결이 끊겼을 때 호출할 함수.
- ononline
네트워크 연결을 복구했을 때 호출할 함수.
- onpopstate
사용자가 세션 기록을 따라 이동했을 때 호출할 함수.
- onundo
사용자가 되돌리기 변경 기록(undo transaction history)에서 이전으로 이동했을 때 호출할 함수.
- onredo
사용자가 되돌리기 변경 기록(undo transaction history)에서 다시 이후로 이동했을 때 호출할 함수.
- onresize
문서의 크기가 바뀔 때 호출할 함수.
- onstorage
저장 영역이 변경되었을 때 호출할 함수.
- onunload
문서를 처분(unload) 중일 때 호출할 함수.

#### `<h1, 2, 3, 4, 5, 6></h1, 2, 3, 4, 5, 6>`

이 요소는 문서의 섹션 제목을 나타냅니다. `<h1>`은 가장 중요한 제목을 나타내며, `<h6>`은 가장 낮은 수준의 제목을 나타냅니다.

#### `<img>`

이 요소는 이미지를 문서에 삽입합니다.

- src: 이미지의 URL을 나타냅니다.
- alt: 이미지를 불러오지 못 할 경우에 대체 텍스트를 나타냅니다.
- width: 이미지의 너비를 나타냅니다.
- height: 이미지의 높이를 나타냅니다.
- srcset: 같은 비율의 다양한 크기를 가지는 동일 이미지들을 최소 2개 이상 명시하는 속성
  -  브라우저에 이미지 선택권을 위임하는 속성
  -  뷰포트의 크기에 따라 다른 이미지를 보여주는 것을 가능하게 합니다.
  -  브라우저가 지원하지 않는 경우에는 src 속성을 사용합니다.
  -  브라우저가 srcset을 지원하지 않는 경우에는 src 속성을 사용합니다.
  -  예를들면, 이렇게 사용하면 됩니다. `<img src="small.jpg" srcset="medium.jpg 1000w, large.jpg 2000w" alt="A rad wolf">`
- sizes: 이미지의 크기를 나타냅니다.
  - 사용 예시: `<img src="small.jpg" sizes="(max-width: 600px) 200px, (max-width: 1000px) 400px, 800px" alt="A rad wolf">`
- crossorigin: 이미지를 가져올 때 CORS를 사용할지 여부를 나타냅니다.
- usemap: 이미지와 연결된 이미지 맵을 나타냅니다.
- ismap: 이미지가 이미지 맵을 나타내는지 여부를 나타냅니다.
- anonymous: 자격 증명 없이 교차 출처 요청을 전송합니다. 즉, Origin HTTP 헤더를 쿠키, X.509 인증서, HTTP Basic 인증 없이 전송합니다. 서버에서 Access-Control-Allow-Origin HTTP 헤더를 지정하지 않음으로써 요청 출처 사이트에 자격 증명을 보내지 않는다면 이미지는 "오염"되고, 사용처가 제한됩니다.
- use-credentials: 자격 증명과 함께 교차 출처 요청을 전송합니다. 즉, Origin HTTP 헤더를 쿠키, X 509 인증서, 또는 HTTP Basic 이증과 함께 전송합니다. 서버에서 Access-Control-Allow-Credentials HTTP 헤더를 통한 자격 증명을 요청 출처 사이트에 보내지 않는다면 이미지는 "오염"되고, 사용처가 제한됩니다.
- decoding: 이미지 디코딩에 관해 브라우저에 제공할 힌트. 가능한 값은 다음과 같습니다.
  - auto: 브라우저가 이미지를 디코딩하는 방법을 결정합니다.
  - sync: 이미지를 동기적으로 디코딩합니다.
  - async: 이미지를 비동기적으로 디코딩합니다.
  - 예시: `<img src="image.png" decoding="async" alt="A rad wolf">`
- loading: 이미지 로딩 전략을 나타냅니다. 가능한 값은 다음과 같습니다.
  - auto: 브라우저가 이미지 로딩 전략을 결정합니다.
  - eager: 이미지를 즉시 로딩합니다.
  - lazy: 이미지를 지연 로딩합니다.
  - 예시: `<img src="image.png" loading="lazy" alt="A rad wolf">`


#### `<h1, 2, 3, 4, 5, 6></h1, 2, 3, 4, 5, 6>`

이 요소는 문서의 섹션 제목을 나타냅니다. `<h1>`은 가장 중요한 제목을 나타내며, `<h6>`은 가장 낮은 수준의 제목을 나타냅니다.

#### `<p></p>`

이 요소는 문단을 나타냅니다.

#### `<a></a>`

이 요소는 하이퍼링크를 나타냅니다.
- href: 링크의 URL을 나타냅니다.
  - sheme: 링크의 URL의 스키마를 나타냅니다.
    - 사용 예시: `<a href="https://developer.mozilla.org/">MDN</a>`
    - 사용 예시: `<a href="mailto: [email protected]">Send email</a>`
    - 사용 예시: `<a href="tel:+12015550123">Call me</a>`
    - 사용 예시: `<a href="sms:+12015550123">Send a message</a>`
- target: 링크를 열 위치를 나타냅니다.
  - _self: 현재 창에서 링크를 엽니다.
  - _blank: 새 창에서 링크를 엽니다.
  - _parent: 부모 창에서 링크를 엽니다.
  - _top: 최상위 창에서 링크를 엽니다. 부모 window가 없으면 _self와 같은 효과를 냅니다.
- download: 링크를 다운로드할 때 사용할 파일 이름을 나타냅니다.
  - 사용 예시: `<a href="image.png" download="radwolf.png">Download</a>`
- rel: 현재 문서와 링크된 문서 사이의 관계를 나타냅니다.
  - 사용 예시: `<a href="https://developer.mozilla.org/" rel="external">MDN</a>`
- type: 링크된 리소스의 MIME 타입을 나타냅니다.
  - 사용 예시: `<a href="image.png" type="image/png">Download</a>`
- referrerpolicy: 링크된 리소스에 대한 referrer 정보를 제어합니다.
  - 사용 예시: `<a href="https://developer.mozilla.org/" referrerpolicy="no-referrer">MDN</a>`
- ping: 링크된 리소스에 대한 클릭 정보를 전송합니다.
  - 사용 예시: `<a href="https://developer.mozilla.org/" ping="https://example.com/tracker">MDN</a>`
- hreflang: 링크된 리소스의 언어를 나타냅니다.
  - 사용 예시: `<a href="https://developer.mozilla.org/" hreflang="en">MDN</a>`


#### `<li></li>`
이 요소는 목록의 항목을 나타냅니다.
- value: 항목의 순서를 나타냅니다.
  - 사용 예시: `<ol><li value="2">두 번째 항목</li></ol>`

#### `<ul></ul>`
이 요소는 순서 없는 목록을 나타냅니다. unordered list의 약자입로서 순서가 없는 목록을 나타냅니다.

#### `<ol></ol>`
이 요소는 순서 있는 목록을 나타냅니다. ordered list의 약자로서 순서가 있는 목록을 나타냅니다.


