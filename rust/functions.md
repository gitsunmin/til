# Functions
Rust에서 함수는 매우 중요하고, Rust가 시작되는 포인트 또한 `main`함수로 부터 시작이 되어집니다. 이 함수는 `fn`이라는 키워드로 선언할 수 있으며, Rust에서는 함수명을 짓는 네이밍 규칙을 snake case로 사용하고 있습니다.

```rust
fn main() {
    println!("Hello, world!");

    another_function();
}

fn another_function() {
    println!("Another function.");
}
```

## Parameters
위에서 함수를 정의를 해 보았습니다. 하지만 단순 `println!`만 사용하는 함수여서 Parameters를 받을 필요가 없었습니다. 그렇다면, Parameter는 어떻게 받는 것일까요?
```rust
fn main() {
    another_function(5);
}

fn another_function(x: i32) {
    println!("The value of x is: {x}");
}

// The value of x is: 5
```
`another_function`함수는 `x`라는 Parameter를 받고, 이 `x`의 Type은 i32인 Integer Type입니다. 그리고 `main`에서 넘겨준 5라는 값을 이용하여 `The value of x is: 5`라는 메시지를 출력하고 있습니다.

여러 매개변수를 정의할 때는 다음과 같이 쉼표로 매개변수 선언을 구분합니다:

```rust
fn main() {
    print_labeled_measurement(5, 'h');
}

fn print_labeled_measurement(value: i32, unit_label: char) {
    println!("The measurement is: {value}{unit_label}");
}

// The measurement is: 5h
```

## Statements and Expressions
Rust는 Expression 기반의 언어이며, Statements와 Expressions를 구분하여 사용되는 언어입니다. 그렇다면, Expressions와 Statements는 어떤 점이 다를까요?     
    
- Expressions: 어떤 값 또는 실행이 되어서 결국에는 값을 반환하는 모든 것 혹은 어떤 의미를 가지는 기호(`symbols`)를 이야기 합니다.
- Statements: 어떤 작업을 수행하고 값을 반환하지 않는 것이며, Expressions의 그룹이 되기도 합니다.

예를 들어,
```rust
const PRICE: u32 = 500;
```
위 코드에서 Expressions는 `const`, `PRINCE`, `:`, `u36`, `=`, `500`, `;`을 말합니다. 왜냐하면 `500`은 어떠한 값을 갖고, 나머지는 어떠한 의미를 갖는 기호이기 때문입니다. 그리고 이 모든 것을 합친 `const PREICE: u32 = 500;`은 Statements입니다.

Rust에서 아래와 같은 코드를 보면, 마치 실행이 될 것 처럼 보이지만, 에러를 일으킵니다. 그 이유는 `let y = 6`은 값을 반환하지 않는 Statements여서, `let x`는 어떠한 값도 바인딩 되지 않습니다. 그렇기 때문에 Rust는 이러한 경우에는 에러를 발생시킵니다. Rust는 이러한 언어입니다.
```rust
fn main() {
    let x = (let y = 6);
}
```

그리고 Rust는 아래와 같은 경우도 볼 수 있습니다.
```rust
fn main() {
    let y = {
        let x = 3;
        x + 1
    };

    println!("The value of y is: {y}");
}
```
Rust에서 `{}`처럼 괄호로 영역을 만드는 것은 Expressions이며 괄호는 결국 값으로서 `y`에 바인딩됩니다. 그러므로 `println!`으로 인쇄된 내용은 `The value of y is: 4`을 표현해 줍니다. (`x + 1`에서 세미콜론을 붙이지 않으면 반환할 수 있습니다.)

## Functions with Return Values
위에서도 이야기 하였지만, Rust에서는 함수의 마지막에 `return`이 없더라도, Expresions가 있다면, 그 값을 반환하도록 구현되어 있습니다. 이 점은 아래와 같은 표현도 가능합니다.
```rust
fn five() -> i32 {
    5
}
```
여기서 `five()`함수는 `i32` 타입의 5를 번환하는 함수 입니다. 여기서 만약 `5;`라고 한다면, 이것은 statements로 판별이 되어서 `five()`함수는 아무것도 반환하지 않는 함수가 됩니다.