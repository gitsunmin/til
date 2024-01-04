# Relay

Relay는 GraphQL로 데이터를 Query하고, Mutation하는 데 사용되는 React 전용 라이브러리입니다. 기본적으로 뛰어난 성능을 제공하며, 스키마 기반으로 GraphQL 코드를 안정적으로 관리하기 위해 사용됩니다.

## Relay의 특징

- Declarative data: 각 컴포넌트에 필요한 데이터를 선언하기만 하면, Relay가 로딩 상태를 처리합니다.
- Co-location and composability: 각 컴포넌트는 자체적으로 필요한 데이터를 선언하고, Relay는 이를 효율적인 쿼리로 결합합니다. 다른 화면에서 컴포넌트를 재사용하면 쿼리가 자동으로 업데이트됩니다.

  - Co-location: Co-location은 프로그래밍에서 데이터와 이를 사용하는 코드를 같은 위치에 두는 것을 의미합니다. 이는 코드의 가독성을 높이고, 관련 로직을 더 쉽게 추적할 수 있게 해줍니다.

- Pre-fetching: Relay는 코드를 분석하여 코드를 다운로드하거나 실행하기 전에 쿼리를 가져올 수 있습니다.
- UI patterns: Relay는 로딩 상태, 페이지네이션, refetching, 낙관적 업데이트, 롤백 및 기타 일반적인 UI 동작을 구현합니다.
  - 낙관적 업데이트(optimistic updates): 서버에 변경 사항을 보내기 전에 먼저 UI를 업데이트하여 사용자에게 즉각적인 반응을 제공하는 방식을 의미합니다.
- Consistent updates: Relay는 정규화된 데이터 저장소를 유지하므로 동일한 데이터를 관찰하는 컴포넌트는 다른 쿼리로 도달하더라도 동기화됩니다.
- Streaming and deferred data: 쿼리의 일부를 선언적으로 지연시키고, Relay는 데이터가 스트리밍됨에 따라 UI를 점진적으로 다시 렌더링합니다.
- Great developer experience: Relay는 GraphQL 스키마에 대한 자동 완성 및 정의로 이동 기능을 제공합니다.
- Type safety: Relay는 오류를 런타임이 아닌 정적으로 잡아내도록 타입 정의를 생성합니다.
- Manage local data: 서버 데이터와 로컬 클라이언트 상태에 동일한 API를 사용합니다.
- Hyper-optimized runtime: Relay는 끊임없이 최적화됩니다. JIT 친화적인 런타임은 어떤 페이로드를 기대할지 정적으로 결정하여 들어오는 데이터를 더 빠르게 처리합니다.
  - JIT (Just In Time): 프로그램이 실행되는 도중에 필요한 부분만을 즉석에서 컴파일하는 방식을 의미합니다. 프로그램이 실행되는 도중에 필요한 부분만을 즉석에서 컴파일하는 방식을 의미합니다.
  - AOT (Ahead Of Time): 프로그램이 실행되기 전에 필요한 부분을 미리 컴파일하는 방식을 의미합니다.

## Relay Compiler

Relay Compiler는 GraphQL 쿼리를 JavaScript 코드로 변환합니다. 또한 한 페이지에서 독립적으로 사용중인 Query가 있을 경우에 이를 하나의 쿼리로 결합합니다.

직접 실행해볼수도 있다.
[여기](https://relay.dev/compiler-explorer/#enc=1&schemaText=C4TwDgpgBAqgzhATlA3gKClAdgQwLYQBcUAysIgJZYDmGUO1RUAklsHQEYRzAD6AZpQhYAJsXhI0AXzRpQkKAEUArkhCo6BcQkTSgA&documentText=I4VwpgTgngBAslAiuaMDeAoGMC2Z1bYwB2AhnodgHQ0CCA5mAGISn17EAulMARmAGdOAfQBmEAJZhiAEwJEiNKg2at207goC%2BhHTozi2HTjBUsjGmAHtiMAKoDI8kuTAYdQA&outputType=operation&no_inline=true&enable_3d_branch_arg_generation=true&actor_change_support=true&text_artifacts=true&language=typescript)
