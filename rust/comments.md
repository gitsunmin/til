# Comments
모든 프로그래머는 코드를 이해하기 쉽게 만들기 위해 노력하지만 때로는 추가적인 설명이 필요할 때가 있습니다. 이러한 경우 프로그래머는 소스 코드에 컴파일러는 무시하지만 소스 코드를 읽는 사람들이 유용하다고 생각할 수 있는 주석을 남깁니다.

```rust
// hello, world
```

여러 줄을 주석으로 표현하고 싶을때에는 모든 행에 `//`을 남겨 주어야합니다.

```rust
// So we’re doing something complicated here, long enough that we need
// multiple lines of comments to do it! Whew! Hopefully, this comment will
// explain what’s going on.
```

이렇게 문장 다음에 주석을 달 수 있지만,
```rust
fn main() {
    let lucky_number = 7; // I’m feeling lucky today
}
```
아래와 같이 많이 사용합니다.
```rust
fn main() {
    // I’m feeling lucky today
    let lucky_number = 7;
}
```