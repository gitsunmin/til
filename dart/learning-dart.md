# Learning Dart
Dart 공식 문서를 읽으면서, Typescript나 Javascript만 사용한 나에게 새롭거나 잘 안 외워지는 것들을 적어보았습니다.

## Null safety

Dart에서는 Null 역참조 오류를 Run Time이 아닌, Compile Time에서 확인할 수 있습니다. 그렇기 때문에, 실재 빌드가 된 다음인 Run time에서 마음껏 사용이 가능합니다.

아래와 같이 참고할 수 있는 3가지 성질이 있습니다.

1. 변수를 선언할 때에, Null을 활성화 하는 것이 가능합니다.

```dart
String? name  // Nullable type. Can be `null` or string.

String name   // Non-nullable type. Cannot be `null` but can be string.
```

2. 변수를 사용하기 전에 초기화해야 합니다. 널 가능 변수는 기본값이 널이므로 기본적으로 초기화됩니다. Dart는 초기 값을 널이 아닌 유형으로 설정하지 않습니다. 초기값을 설정하도록 강제합니다.
3. 널 가능 타입의 표현식에서는 프로퍼티에 액세스하거나 메서드를 호출할 수 없습니다. (`hashCode`나 `toString()`과 같이 널이 지원하는 속성이나 메서드인 경우에도 동일한 예외가 적용됩니다.)

그리고, Dart는 컴파일 타임에서 Null Safety를 보장하기 때문에, 안전하게 사용할 수 있습니다.

## Late Variables

말 그대로 느리게 변수를 초기화하는 방식으로 변수를 선언하는 것입니다.

```dart
late String description;

void main() {
  description = 'Feijoada!';
  print(description);
}
```

(만약에 `description` 변수를 초기화 하지 않는다면, runtime 에러가 발생합니다.)

이 기능은 아래와 같이 사용하지 않을 수도 있는 변수를 선언할 때에 유용하게 동작할 수 있는데, 아래의 `readThermometer` 함수는 `temperature` 변수가 사용되지 않으면, 실행되지 않도록 설계되었습니다.

```dart
// This is the program's only call to readThermometer().
late String temperature = readThermometer(); // Lazily initialized.
```

## Operator

- `~/` : 나누기 후 정수 결과만 반환.
    - ex) 2/5 ⇒ 2.5, 2~/5 ⇒ 2
- Type test operators: runtime에서 Type을 확인할 때 사용하는 문법
    
    
    | as | Typecast (also used to specify https://dart.dev/language/libraries#specifying-a-library-prefix) |
    | --- | --- |
    | is | True if the object has the specified type |
    | is! | True if the object doesn’t have the specified type |
- Other operators
    
    
    | ?[] | Conditional subscript access | Like [], but the leftmost operand can be null; example: fooList?[1] passes the int 1 to fooList to access the element at index 1 unless fooList is null (in which case the expression evaluates to null) |
    | --- | --- | --- |
    | ?. | Conditional member access | Like ., but the leftmost operand can be null; example: foo?.bar selects property bar from expression foo unless foo is null (in which case the value of foo?.bar is null) |
    | ! | Null assertion operator | Casts an expression to its underlying non-nullable type, throwing a runtime exception if the cast fails; example: foo!.bar asserts foo is non-null and selects the property bar, unless foo is null in which case a runtime exception is thrown |
- Cascade notation
    - 객체 선언 후 재학습 필요.

## Metadata

- annotation 문법임.
- @Deprecated
- @deprecated
- @override
- 사용저 정의 가능.

## Libraries & imports

- Specifying a library prefix
    
    ```dart
    import 'package:lib1/lib1.dart';
    import 'package:lib2/lib2.dart' as lib2;
    
    // Uses Element from lib1.
    Element element1 = Element();
    
    // Uses Element from lib2.
    lib2.Element element2 = lib2.Element();
    ```
    
- Importing only part of a library
    
    ```dart
    // Import only foo.
    import 'package:lib1/lib1.dart' show foo;
    
    // Import all names EXCEPT foo.
    import 'package:lib2/lib2.dart' hide foo;
    ```
    

## Types

### Number

- `int`와 `double`은 모두 `num` Type에 하위 개념.
- int
    - Native에서는 -263 ~ 261
    - Web에서는 -253 ~ 252
- double
    - 소수점을 표횬하기 위한 Type

### Strings

- 문자열 합치기 (붙여서 나옴 → ‘String concatencation works even over line breaks.’)

```dart
var s1 = 'String '
    'concatenation'
    " works even over line breaks.";

```

### Symbols

```dart
void main() {
  var id = #radix;
  print(id); // Symbol("radix")
}
```

### Records

Dart에서의 Record는 익명으로 사용이 가능하며, `immutable` 한 Type으로 사용되고 있습니다.  얼핏 보면, 다른 Collection Type들과 비슷해 보이지만, size가 고정적인 것과, 서로 다른 Type들을 묶을 수 있는 점에서 다릅니다.

```dart
(String, int, { int a, bool b }) record = ('first', 22, a: 1, b: true);
```

위 의 record를 보면, type도 요소별로 다르게 설정할 수 있고, javascript의 obejct와 같이 사용도 가능합니다. 특이하네요. 각 요소에 접근하는 방법은 아래와 같습니다.

```dart
void main() {
  print(record.$1); // first
  print(record.a); // 1
  print(record.b); // true
  print(record.$2); // 22
}
```

또, javascript와 다른 점은 변수의 참조 주소로 동등성 비교를 하지 않는 다는 점입니다. dart의 record는 필드와 값이 같다면, 같은 record로 판단됩니다.

```dart
(String, int, { int a, bool b }) record = ('first', 22, a: 1, b: true);
(String, int, { int a, bool b }) record2 = ('first', 22, a: 1, b: true);

void main() {
  print(record == record2); // true
}
```

### Control-flow operators

Control-flow operators은 각 Collection을 정의할 때에 conrtol-flow를 사용할 수 있도록 제공하는 문법입니다.

```dart
var nav = ['Home', 'Furniture', 'Plants', if (promoActive) 'Outlet'];
// promoActive가 true -> ['Home', 'Furniture', 'Plants', 'Outlet']
// promoActive가 false -> ['Home', 'Furniture', 'Plants']
```

위와 같이 작성하면, `promoActive`가 `true`인 경우에만 `Outlet`이 nav의 요소에 추가된 것을 볼 수 있습니다.

```dart
var listOfInts = [1, 2, 3, 4];
var listOfStrings = ['#0', for (var i in listOfInts) '#${i}'];
print(listOfStrings);
// [#0, #1, #2, #3, #4]
```