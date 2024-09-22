# React Native

## Installation
```shell
npx create-expo-app@latest
```


## Core Components and Native Components

React Native의 UI 컴포넌트는 크게 Core Component와 Native Component로 구분됩니다.
Core Components는 React Native에서 제공하는 기본 UI 컴포넌트들이며, 빌드 시 각 타깃에 맞는 Native Component로 변환됩니다.
즉, Native Component는 각 플랫폼에서 사용되는 Swift, Java 혹은 Kotlin 코드로 만들어진 컴포넌트입니다.
또한, React Native에서는 필요에 따라 네이티브 모듈을 작성하여 Core Component와 통합된 Native Component를 만들 수 있습니다.

컴포넌트의 구조는 아래와 같이 표현할 수 있습니다.

======================== React Component =========================
= ------------------- React Native Component ------------------- =
= -                                                            - =
= -                Community Components                        - =
= -                Core Components                             - =
= -                Native Components                           - =
= -                                                            - =
= -------------------------------------------------------------- =
==================================================================

대부분의 UI Component는 React와 Props의 이름이 다를 뿐 이벤트 혹은 기본 Style등 비슷해 보입니다.

## Platform-Specific Components

Flutter를 하면서 느낀 것은, "Multi Platform인데도 불과하고, 분기를 계속 쳐주는 것이 불편하다." 였습니다. 그런데, React Native에서는 해당 Class가 정말 유용하게 사용될 것 같다는 생각이 들었습니다.

```tsx
import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  height: Platform.OS === 'ios' ? 200 : 100,
});
```
이런식으로 OS별로 다른 Style 객체를 만들 수 있을 뿐만아니라, `Select` Method를 사용하면,

```tsx
import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'green',
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'blue',
      },
    }),
  },
});
```
처럼 OS 별로 간편하게 분기를 할 수 있습니다.