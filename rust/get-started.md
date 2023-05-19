# Get Started

## What is the rust

Rust는 시스템 프로그래밍 언어로, 메모리 안전성, 동시성, 성능에 중점을 두고 설계되었습니다. Mozilla Research에서 처음 개발되었으며, 그 이후로 많은 커뮤니티 참여를 받아 왔습니다. Rust는 가비지 컬렉션 없이도 메모리 안전성을 달성하려는 특이한 접근 방식을 취하고 있습니다. 이는 프로그래머가 메모리 관리를 수동으로 제어하면서도 버그 및 보안 문제를 최소화하는 데 도움이 됩니다.

## Installation
rust를 공부하기 위해서 `rustup`라는 도구를 설치합니다.

- Mac이나 Linux 환경을 사용하였습니다.

```shell
$ curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```
경우에 따라서는 아래의 명령어로 xcode를 설치해야할 수 있습니다.
```shell
$ xcode-select --install
```

Rust가 설치되었는지 확인을 해보겠습니다.
```shell
$ rustc --version
```
릴리스된 최신 안정 버전의 버전 번호, 커밋 해시, 커밋 날짜가 다음 형식으로 표시되어야 합니다:
```shell
rustc a.b.c (######### YYYY-MM-DD)
```

만약, Rust를 설치만 하고 오랜 시간이 흐른 뒤였다면, Rust의 버전을 업데이트하는 방법입니다.
```shell
rustup update
```
혹시,, 갑자기 Rust를 공부하기 싫어지셨다면, 삭제하는 방법입니다.
```shell
rustup self uninstall
```

## Hello, World!
우선, Rust를 사용해서 `Hello, World!`를 띄워보겠습니다.

Rust를 사용하기 전에 Rust 예제를 작성할 프로젝트를 만들겠습니다.

### Creating a Project Directory
```shell
$ mkdir ~/projects
$ cd ~/projects
$ mkdir hello_world
$ cd hello_world
```

### Writing and Running a Rust Program

hello_world 디렉토리 안에서 파일을 하나 만들어줄 것입니다. 파일 이름은 `main.rc`입니다. Rust는 항상 `.rc`라는 확장자를 가집니다. 그리고 일반적으로  파일이름의 구분자는 언더바(_)를 사용합니다. (예시, hello_world.rc)

`main.rc`파일을 만들었다면, 아래와 같이 코드를 작성합니다.
```rust
fn main() {
    println!("Hello, world!");
}
```
파일을 저장하였다면, 아래 명령어를 사용하여 rust코드를 컴파일합니다.

```shell
$ rustc main.rs
```

컴파일이 완료되면 같은 디렉토리에 `main`이라는 파일이 생성된 것을 볼 수 있습니다. 이 파일은 그냥 실행하면 됩니다.
```shell
./main
```
그럼, 원하는 리턴인 Hello, World!가 나타납니다.

```shell
Hello, World!
```

### Compiling and Running Are Separate Steps
방금 새로 만든 프로그램을 실행했으므로 프로세스의 각 단계를 살펴 보겠습니다.

Rust 프로그램을 실행하기 전에 다음과 같이 rustc 명령을 입력하고 소스 파일 이름을 전달하여 Rust 컴파일러를 사용하여 컴파일해야 합니다.
```shell
$ rustc main.rs
```

mac이나 Linux에서는 `main`이라는 파일이 생성되었을 것이고,
window에서는 `main.exe`(실행 파일), `main.pdb`(디버그 정보가 포함된 파일) 파일이 생성되었을 것입니다. 이 파일들은 `.js`, `.py` 파일들과 달리, 아무런 설치 없이 어디서든 `Hello, World!`를 출력하는 프로그램을 실행할 수 있습니다.

이처럼 간단한 프로그램이라면 rustc로 컴파일하는 것만으로도 충분하지만, 프로젝트가 커지면 모든 옵션을 관리하고 코드를 쉽게 공유하고 싶을 것입니다. 다음으로 실제 Rust 프로그램을 작성하는 데 도움이 되는 Cargo 도구를 소개합니다.

## Hello, Cargo!
Cargo는 Rust의 빌드 시스템이자 패키지 관리자입니다. 코드 빌드, 코드에 종속된 라이브러리 다운로드, 해당 라이브러리 빌드 등 많은 작업을 Cargo가 대신 처리해 주기 때문에 대부분의 Rustaceans은 이 도구를 사용하여 Rust 프로젝트를 관리합니다. (코드에 종속성이 필요한 라이브러리를 우리는 dependencies라고 부릅니다.)

대부분의 Rust 프로젝트는 이 `Cargo`를 사용하여 프로젝트를 관리하며, Rust와 함께 설치되어 있습니다. 한 번 확인해 보겠습니다.
```shell
$ cargo --version
cargo a.b.c (######## YYYY-MM-DD)
```

### Creating a Project with Cargo
Cargo를 사용하여 새 프로젝트를 생성하고 원래의 "Hello, world!" 프로젝트와 어떻게 다른지 살펴보겠습니다. 프로젝트 디렉토리(또는 코드를 저장하기로 결정한 곳)로 다시 이동합니다. 그런 다음 아래 명령어를 실행합니다:
```shell
$ cargo new hello_cargo
$ cd hello_cargo
```
첫 번째 명령은 hello_cargo라는 새 디렉토리와 프로젝트를 생성합니다.프로젝트 이름을 hello_cargo로 지정하면 Cargo가 같은 이름의 디렉터리에 파일을 생성합니다.

hello_cargo 디렉토리로 이동하여 파일을 나열합니다. Cargo가 두 개의 파일과 하나의 디렉터리를 생성한 것을 확인할 수 있습니다. Cargo.toml 파일과 main.rs 파일이 있는 src 디렉터리입니다.

처음보는 파일인 `Cargo.toml`을 보겠습니다.
```
# Cargo.toml
[package]
name = "hello_cargo"
version = "0.1.0"
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
```
이 파일은 Cargo의 구성 형식을 정의하는 파일이며, TOML(Tom's Obvious, Minimal Language) 형식입니다.

첫 번째 줄인 [package]는 다음 문이 패키지를 구성하고 있음을 나타내는 섹션 제목입니다. 이 파일에 더 많은 정보를 추가하면서 다른 섹션을 추가할 것입니다.

다음 세 줄은 Cargo가 프로그램을 컴파일하는 데 필요한 구성 정보, 즉 이름, 버전, 사용할 Rust 에디션을 설정합니다.

마지막 줄인 [dependencies]은 프로젝트의 종속성을 나열할 수 있는 섹션의 시작 부분입니다. Rust에서는 코드 패키지를 crates라고 합니다.

이제 `src/main.rs`를 열고 살펴보겠습니다.
```rust
fn main() {
    println!("Hello, world!");
}
```
Cargo가 위에서 작성한 것과 같은 "Hello, world!" 프로그램을 생성했습니다. 지금까지 우리 프로젝트와 Cargo가 생성한 프로젝트의 차이점은 Cargo는 코드를 src 디렉터리에 배치했고 최상위 디렉터리에 Cargo.toml 구성 파일을 가지고 있다는 것입니다.

### Building and Running a Cargo Project
이제 Cargo로 "Hello, world!" 프로그램을 빌드하고 실행하면 무엇이 달라지는지 살펴보겠습니다. hello_cargo 디렉토리에서 다음 명령을 입력하여 프로젝트를 빌드합니다:
```shell
$ cargo build
   Compiling hello_cargo v0.1.0 (file:///projects/hello_cargo)
    Finished dev [unoptimized + debuginfo] target(s) in 2.85 secs
```

이 명령은 현재 디렉터리가 아닌 target/debug/hello_cargo(또는 Windows의 경우 target\debug\hello_cargo.exe)에 실행 파일을 생성합니다. 기본 빌드는 디버그 빌드이므로 Cargo는 바이너리를 debug라는 디렉터리에 저장합니다. 아래의 명령으로 실행 파일을 실행할 수 있습니다:

```shell
$ ./target/debug/hello_cargo # or .\target\debug\hello_cargo.exe on Windows
Hello, world!
```

모든 것이 순조롭게 진행되면 Hello, world! 가 터미널에 인쇄되어야 합니다. Cargo 빌드를 처음 실행하면 Cargo가 최상위 레벨에 새 파일을 생성합니다: Cargo.lock이라는 파일을 생성합니다. 이 파일은 프로젝트의 정확한 종속성 버전을 추적합니다. 이 프로젝트에는 종속성이 없으므로 파일이 약간 드문드문 생성됩니다. 이 파일은 수동으로 변경할 필요가 없으며, Cargo가 자동으로 내용을 관리합니다.

방금 `cargo build`로 프로젝트를 빌드하고 `./target/debug/hello_cargo`로 실행했지만, `cargo run`을 사용하여 코드를 컴파일한 다음 결과 실행 파일을 하나의 명령으로 모두 실행할 수도 있습니다:

```shell
$ cargo run
    Finished dev [unoptimized + debuginfo] target(s) in 0.0 secs
     Running `target/debug/hello_cargo`
Hello, world!
```

Cargo는 `cargo check`라는 명령도 제공합니다. 이 명령은 코드가 컴파일되기는 하지만 실행 파일을 생성하지않고 빠르게 검사만 합니다:

```shell
$ cargo check
   Checking hello_cargo v0.1.0 (file:///projects/hello_cargo)
    Finished dev [unoptimized + debuginfo] target(s) in 0.32 secs
```

실행 파일을 생성하지 않는 이유는 무엇일까요? `cargo check`는 실행파일을 생성하지 않고 건너뛰기 때문에, `cargo build`보다 훨씬 빠른 속도를 보여줍니다. 만약 코드를 작성하면서 작업의 빌드를 계속 확인해야한다면, 이렇게 `cargo check`를 사용하면 프로세스가 더 빨라집니다. 

### Building for Release
프로젝트가 마침내 릴리스할 준비가 되면 `cargo build --release`를 사용하여 최적화를 통해 컴파일할 수 있습니다. 이 명령은 `target/debug` 대신 `target/release`에 실행 파일을 생성합니다. 최적화를 사용하면 Rust 코드가 더 빠르게 실행되지만, 이 기능을 켜면 프로그램이 컴파일되는 시간이 길어집니다. 그렇기 때문에 개발용 프로필은 빠르고 자주 재빌드해야 할 때 사용하고, `--release` 프로필은 반복적으로 재빌드하지 않고 최대한 빠르게 실행되는 프로그램으로서, 사용자에게 제공할 최종 프로그램을 빌드할 때 사용합니다. 코드의 실행 시간을 벤치마킹하는 경우 `cargo build --release`를 실행하고 `target/release`의 실행 파일로 벤치마킹하세요.
