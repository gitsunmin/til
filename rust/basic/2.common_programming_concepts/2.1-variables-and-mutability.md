# Variables and Mutability
- Reference:
    The Rust Programming Language (Book)   
    [Common Programming Concepts/Variables and Mutability](https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html)


Rust에서 Variables(변수)는 변경이 가능하도록 하는 방법은 존재하지만, Immutable(불편)을 기본으로 합니다. 만약 아래와 같이 선언하여 사용한다면, 컴파일 에러가 발생합니다.
```rust
fn main() {
    let x = 5;
    println!("The value of x is: {x}");
    x = 6;
    println!("The value of x is: {x}");
}
// cannot assign twice to immutable variable
```
변경이 가능하도록 하려면, 아래와 같이 `mut` 키워드를 사용해야합니다.
```rust
fn main() {
    let mut x = 5;
    println!("The value of x is: {x}");
    x = 6;
    println!("The value of x is: {x}");
}
```

## Constants
Rust에서는 상수를 선언하는 방법도 있는데, 이 상수는 위 `let mut`과는 다르게 항상, 무조건 불변입니다. 그리고 이 상수는 `main` 함수 밖은 물론이고 모든 스코프에서 선언이 가능하며, 선언된 범위 내에서 프로그램이 실행되는 시간 동안 유효합니다.

```rust
const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;
```

## Shadowing
Shadowing은 한 번 선언한 변수를 다시 선언함으로서, 변수에 바인딩된 값을 변경하는 것을 말합니다.
```rust
let x = 1;
let x = 44;
```
이렇게하면, 첫 번쨰 x는 두 번째 x의 `shadowed`되었다고 표현합니다.

이 `let`을 사용하면 값에 대해 몇 가지 변형을 수행하지만 해당 변형을 완료한 후에는 변수를 변경할 수 없게 만들 수 있는 특징이 있습니다. 그리고 아래와 같이 사용하는 방법도 있습니다.
```rust
let spaces = "    ";
let spaces = spaces.len();
```
이렇게 같은 이름이지만 type이 다른 변수로 사용하게 될 경우에 사용할 수 있습니다. (이것을 `mut`으로 사용할 경우에는 컴파일 에러가 발생합니다.)

그리고 영역을 만들어서 `Shadowing`을 사용하면, 영역이 끝난 뒤에는 다시 이전 값을 참조하여 나타냅니다.

```rust
fn main() {
    let x = 5;
    println!("1. The value of x is: {x}");
    let x = x + 1;
    println!("2. The value of x is: {x}");

    {
        let x = x * 2;
        println!("3. The value of x is: {x}");
    }
    println!("4. The value of x is: {x}");
}
```
`println!`은 다름과 같이 표현됩니다.
1. The value of x is: 5
2. The value of x is: 6
3. The value of x is: 12
4. The value of x is: 6