# Control Flow
- Reference:
    The Rust Programming Language (Book)   
    [Control Flow](https://doc.rust-lang.org/book/ch03-05-control-flow.html)

조건이 참인지 여부에 따라 일부 코드를 실행하고 조건이 참일 때 일부 코드를 반복적으로 실행하는 기능은 대부분의 프로그래밍 언어에서 기본 구성 요소입니다. Rust 코드의 실행 흐름을 제어할 수 있는 가장 일반적인 구조는 if 표현식과 loop입니다.

## if Expressions

if 표현식을 사용하면 조건에 따라 코드를 분기할 수 있습니다. 조건을 지정한 다음 "이 조건이 충족되면 이 코드 블록을 실행합니다."라고 명시할 수 있습니다. 조건이 충족되지 않으면 이 코드 블록을 실행하지 마십시오."라고 명시할 수 있습니다.

```rust
fn main() {
    let number = 3;

    if number < 5 {
        println!("condition was true");
    } else {
        println!("condition was false");
    }
}
```

모든 if 표현식은 키워드 if로 시작하고 조건이 뒤따릅니다. 이 경우 조건은 변수 숫자의 값이 5보다 작은지 여부를 확인합니다. 조건 바로 뒤에 조건이 참일 경우 실행할 코드 블록을 중괄호 안에 배치합니다. 2장의 "추측과 비밀 번호 비교하기" 섹션에서 설명한 일치 표현식의 암과 마찬가지로 if 표현식의 조건과 관련된 코드 블록을 암이라고 부르기도 합니다.

선택적으로, 조건이 거짓으로 평가될 경우 프로그램이 실행할 대체 코드 블록을 제공하기 위해 여기서 선택한 else 표현식을 포함할 수도 있습니다. else 표현식을 제공하지 않고 조건이 거짓인 경우 프로그램은 if 블록을 건너뛰고 다음 코드 블록으로 넘어갑니다.

이 코드의 조건은 반드시 부울이어야 한다는 점도 주목할 필요가 있습니다. 조건이 부울이 아닌 경우 오류가 발생합니다. 예를 들어 다음 코드를 실행해 보세요:

```rust
fn main() {
    let number = 3;

    if number {
        println!("number was three");
    }
}
```

이 코드는 다음과 같은 오류를 발생시킵니다:

```console
error[E0308]: mismatched types
 --> src\main.rs:4:8
  |
4 |     if number {
  |        ^^^^^^ expected `bool`, found integer
  |
  = note: expected type `bool` found type `{integer}`
```

이 오류는 Rust가 부울을 기대했지만 정수를 가져왔음을 나타냅니다. Ruby 및 JavaScript와 같은 언어와 달리 Rust는 부울이 아닌 유형을 부울로 자동 변환하려고 시도하지 않습니다. 항상 명시적으로 부울을 조건으로 하는 if를 제공해야 합니다. 예를 들어 숫자가 0이 아닌 경우에만 if 코드 블록이 실행되도록 하려면 if 표현식을 다음과 같이 변경하면 됩니다:

```rust
fn main() {
    let number = 3;

    if number != 0 {
        println!("number was something other than zero");
    }
}
```

## Handling Multiple Conditions with else if

여러 조건을 테스트해야 하는 경우 여러 if 표현식을 연결할 수 있습니다. 그러나 이렇게 하면 여러 조건이 참일 때 모든 코드 블록이 실행됩니다. 이것은 원하지 않는 결과입니다. 예를 들어, 다음 코드를 실행해 보세요:

```rust
fn main() {
    let number = 6;

    if number % 4 == 0 {
        println!("number is divisible by 4");
    } else if number % 3 == 0 {
        println!("number is divisible by 3");
    } else if number % 2 == 0 {
        println!("number is divisible by 2");
    } else {
        println!("number is not divisible by 4, 3, or 2");
    }
}
```

이 코드는 다음과 같은 결과를 출력합니다:

```console
number is divisible by 3
```

이 코드는 4로 나누어 떨어지지 않지만 3으로 나누어 떨어집니다. 그러나 이 코드는 3으로 나누어 떨어지는지 확인한 후에도 다른 조건을 확인합니다. 이것은 원하지 않는 결과입니다. 이 경우 3으로 나누어 떨어지는지 확인한 후에는 다른 조건을 확인할 필요가 없습니다. 이를 위해 Rust는 else if를 사용합니다. else if는 if가 거짓일 때만 실행되는 if 표현식을 추가합니다. 이제 다음 코드를 실행해 보세요:

```rust
fn main() {
    let number = 6;

    if number % 4 == 0 {
        println!("number is divisible by 4");
    } else if number % 3 == 0 {
        println!("number is divisible by 3");
    } else if number % 2 == 0 {
        println!("number is divisible by 2");
    } else {
        println!("number is not divisible by 4, 3, or 2");
    }
}
```

이 코드는 다음과 같은 결과를 출력합니다:

```console
number is divisible by 2
```

이 프로그램이 실행되면 각 if 표현식을 차례로 검사하고 조건이 참으로 평가되는 첫 번째 본문을 실행합니다. 6이 2로 나눌 수 있지만 출력 숫자가 2로 나눌 수 있는 것은 아니며, else 블록에서 4, 3 또는 2 텍스트로 나눌 수 없는 숫자도 볼 수 없습니다. 이는 Rust가 첫 번째 참 조건에 대해서만 블록을 실행하고, 일단 하나를 찾으면 나머지는 확인하지 않기 때문입니다.

만약 표현식을 너무 많이 사용하면 코드가 복잡해질 수 있으므로 표현식이 두 개 이상인 경우 코드를 리팩터링하는 것이 좋습니다. 6장에서는 이러한 경우에 사용할 수 있는 강력한 Rust 분기 구조체 match에 대해 설명합니다.

## Using if in a let Statement

if는 표현식이므로 목록 3-2에서와 같이 let 문의 오른쪽에 사용하여 결과를 변수에 할당할 수 있습니다.

```rust
fn main() {
    let condition = true;
    let number = if condition { 5 } else { 6 };

    println!("The value of number is: {}", number);
}
```

숫자 변수는 if 표현식의 결과에 따라 값에 바인딩됩니다. 이 코드를 실행하여 어떤 일이 발생하는지 확인해 보세요:

```console
$ cargo run
   Compiling branches v0.1.0 (file:///projects/branches)
    Finished dev [unoptimized + debuginfo] target(s) in 0.30s
     Running `target/debug/branches`
The value of number is: 5
```

코드 블록은 그 안의 마지막 표현식까지 평가되며 숫자 자체도 표현식이라는 점을 기억하세요. 이 경우 전체 if 표현식의 값은 어떤 코드 블록이 실행되는지에 따라 달라집니다. 즉, if의 각 암에서 결과가 될 수 있는 값은 동일한 유형이어야 하며, 목록 3-2에서는 if 암과 else 암의 결과가 모두 i32 정수입니다. 다음 예제에서와 같이 유형이 일치하지 않으면 오류가 발생합니다:

```rust
fn main() {
    let condition = true;

    let number = if condition { 5 } else { "six" };

    println!("The value of number is: {}", number);
}
```

이 코드를 컴파일하려고 하면 오류가 발생합니다. if 및 else 암에는 호환되지 않는 값 유형이 있으며, Rust는 프로그램에서 문제를 찾을 수 있는 위치를 정확히 알려줍니다:

```console
$ cargo run
   Compiling branches v0.1.0 (file:///projects/branches)
error[E0308]: `if` and `else` have incompatible types
 --> src/main.rs:4:44
  |
4 |     let number = if condition { 5 } else { "six" };
  |                                 -          ^^^^^ expected integer, found `&str`
  |                                 |
  |                                 expected because of this

For more information about this error, try `rustc --explain E0308`.
error: could not compile `branches` due to previous error
```

if 블록의 표현식은 정수로 평가되고 else 블록의 표현식은 문자열로 평가됩니다. 변수는 단일 타입을 가져야 하고 Rust는 컴파일 시 숫자 변수가 어떤 타입인지 확실히 알아야 하기 때문에 이 방식은 작동하지 않습니다. 숫자 유형을 알면 컴파일러가 숫자를 사용하는 모든 곳에서 해당 유형이 유효한지 확인할 수 있습니다. 숫자 유형이 런타임에만 결정되는 경우 컴파일러가 모든 변수에 대해 여러 가상의 유형을 추적해야 하는 경우 코드가 더 복잡해지고 보장할 수 있는 것이 줄어들기 때문에 Rust는 이를 수행할 수 없습니다.

## Repetition with Loops

코드 블록을 두 번 이상 실행하는 것이 유용한 경우가 많습니다. 이 작업을 위해 Rust는 루프 본문 내부의 코드를 끝까지 실행한 다음 바로 처음부터 다시 시작하는 여러 개의 루프를 제공합니다. 루프를 실험하기 위해 loops라는 새 프로젝트를 만들어 보겠습니다.

Rust에는 `loop`, `while`, `for`의 세 가지 종류의 루프가 있습니다. 각각을 사용해 봅시다.

### Repeating Code with loop

`loop` 키워드는 Rust가 코드 블록을 영원히 또는 사용자가 명시적으로 중지하라고 지시할 때까지 반복해서 실행하도록 지시합니다.

```rust
fn main() {
    loop {
        println!("again!");
    }
}
```

이 프로그램을 실행하면 프로그램을 수동으로 중지할 때까지 "다시 볼 수 있습니다!"가 계속 반복해서 인쇄됩니다. 대부분의 단말기는 키보드 단축키 ctrl-c를 지원하여 연속 루프에 갇힌 프로그램을 중단할 수 있습니다. 한번 시도해 보세요:

```console
$ cargo run
    Compiling loops v0.1.0 (file:///projects/loops)
    Finished dev [unoptimized + debuginfo] target(s) in 0.30s
        Running `target/debug/loops`
again!
again!
again!
again!
^C
```

다행히도 Rust는 코드를 사용하여 루프에서 벗어나는 방법도 제공합니다. `loop` 내에 `break` 키워드를 배치하여 루프 실행을 언제 중단할지 프로그램에 알릴 수 있습니다. 또한 `continue`를 사용하여 루프에서 반복의 나머지 코드를 건너뛰고 다음 반복으로 이동하도록 프로그램에 지시할 수 있습니다.

### Returning Values from Loops
루프의 용도 중 하나는 스레드가 작업을 완료했는지 확인하는 등 실패할 수 있는 작업을 다시 시도하는 것입니다. 또한 해당 작업의 결과를 루프 밖으로 나머지 코드에 전달해야 할 수도 있습니다. 이렇게 하려면 루프를 중지하는 데 사용하는 break 표현식 뒤에 반환할 값을 추가하면 다음과 같이 해당 값이 루프 밖으로 반환되어 사용할 수 있습니다:
```rust
fn main() {
    let mut counter = 0;

    let result = loop {
        counter += 1;

        if counter == 10 {
            break counter * 2;
        }
    };

    assert_eq!(result, 20);
}
```
루프 전에 카운터라는 변수를 선언하고 0으로 초기화합니다. 그런 다음 결과라는 변수를 선언하여 루프에서 반환된 값을 보관합니다. 루프를 반복할 때마다 카운터 변수에 1을 더한 다음 카운터가 10과 같은지 확인합니다. 10이면 카운터 * 2 값과 함께 break 키워드를 사용합니다. 루프가 끝나면 세미콜론을 사용하여 결과값을 할당하는 문을 종료합니다. 마지막으로 결과 값(이 경우 20)을 인쇄합니다.

### Loop Labels to Disambiguate Between Multiple Loops
루프 안에 루프가 있는 경우 해당 지점에서 가장 안쪽 루프에 중단 및 계속을 적용합니다. 선택적으로 루프에 루프 레이블을 지정한 다음 해당 키워드가 가장 안쪽 루프가 아닌 레이블이 지정된 루프에 적용되도록 중단 또는 계속과 함께 사용할 수 있습니다. 루프 레이블은 작은따옴표로 시작해야 합니다. 다음은 두 개의 중첩 루프가 있는 예시입니다:

```rust
fn main() {
    let mut count = 0;
    'counting_up: loop {
        println!("count = {count}");
        let mut remaining = 10;

        loop {
            println!("remaining = {remaining}");
            if remaining == 9 {
                break;
            }
            if count == 2 {
                break 'counting_up;
            }
            remaining -= 1;
        }

        count += 1;
    }
    println!("End count = {count}");
}
```

The outer loop has the label 'counting_up, and it will count up from 0 to 2. The inner loop without a label counts down from 10 to 9. The first break that doesn’t specify a label will exit the inner loop only. The break 'counting_up; statement will exit the outer loop. This code prints:

```console
$ cargo run
   Compiling loops v0.1.0 (file:///projects/loops)
    Finished dev [unoptimized + debuginfo] target(s) in 0.58s
     Running `target/debug/loops`
count = 0
remaining = 10
remaining = 9
count = 1
remaining = 10
remaining = 9
count = 2
remaining = 10
End count = 2
```

### Conditional Loops with while
프로그램에서 루프 내에서 조건을 평가해야 하는 경우가 종종 있습니다. 조건이 참이면 루프가 실행됩니다. 조건이 참이 아니게 되면 프로그램은 break를 호출하여 루프를 중지합니다. 루프, if, else, break의 조합을 사용하여 이와 같은 동작을 구현할 수 있으며, 원한다면 지금 프로그램에서 이를 시도해 볼 수 있습니다. 그러나 이 패턴은 매우 일반적이기 때문에 Rust에는 이를 위한 언어 구조인 while 루프가 내장되어 있습니다.
```rust
fn main() {
    let mut number = 3;

    while number != 0 {
        println!("{number}!");

        number -= 1;
    }

    println!("LIFTOFF!!!");
}
```
결과:
```console
3!
2!
1!
LIFTOFF!!!
```

이 구조는 루프, if, else, break를 사용할 때 필요한 많은 중첩을 제거하며 더 명확합니다. 조건이 참으로 평가되는 동안에는 코드가 실행되고, 그렇지 않으면 루프가 종료됩니다.

### Looping Through a Collection with for
배열과 같은 컬렉션의 요소를 반복하려면 while 구문을 사용하도록 선택할 수 있습니다. 예를 들어 아래 루프는 배열 a의 각 요소를 인쇄합니다.
```rust
fn main() {
    let a = [10, 20, 30, 40, 50];
    let mut index = 0;

    while index < 5 {
        println!("the value is: {}", a[index]);

        index += 1;
    }
}
```
결과:
```console
the value is: 10
the value is: 20
the value is: 30
the value is: 40
the value is: 50
```
이 코드는 동작하지만 Rust에는 이와 같은 패턴을 반복하는 더 간결한 방법이 있습니다. for 루프를 사용하면 컬렉션의 각 항목을 반복할 수 있습니다. 다음 코드는 배열 a의 각 요소를 인쇄합니다.
```rust
fn main() {
    let a = [10, 20, 30, 40, 50];

    for element in a.iter() {
        println!("the value is: {}", element);
    }
}
```
결과:
```console
the value is: 10
the value is: 20
the value is: 30
the value is: 40
the value is: 50
```

이 코드는 더 간결하고 명확합니다. for 루프는 컬렉션의 각 요소를 반복하고 현재 요소의 값을 변수 element에 할당합니다. 그런 다음 println! 매크로를 사용하여 변수 element의 값을 인쇄합니다. 이 코드는 배열의 각 요소를 인쇄하는 것 외에는 이전 코드와 동일합니다.

### Looping Through a Range with for and rev

for 루프는 컬렉션의 각 요소를 반복할 수 있을 뿐만 아니라 숫자 범위를 반복할 수도 있습니다. 예를 들어 1에서 4까지의 숫자 범위를 반복하려면 다음과 같이 작성할 수 있습니다.
```rust
fn main() {
    for number in (1..4).rev() {
        println!("{}!", number);
    }
    println!("LIFTOFF!!!");
}
```
결과:
```console
3!
2!
1!
LIFTOFF!!!
```

이 코드는 1에서 3까지의 숫자 범위를 반복하고 각 숫자를 number 변수에 할당합니다. 범위는 1에서 시작하고 4보다 작습니다. 범위의 마지막 숫자는 범위에 포함되지 않으므로 4가 아닌 3까지만 반복됩니다. 범위에 rev 메서드를 호출하여 범위의 숫자를 역순으로 반복할 수 있습니다. 이 코드는 3에서 1까지 역순으로 반복하고 각 숫자를 number 변수에 할당합니다. 범위의 마지막 숫자는 범위에 포함되지 않으므로 1이 아닌 2까지만 반복됩니다. 이 코드는 3, 2, 1을 인쇄하고 마지막으로 LIFTOFF!!!를 인쇄합니다.
