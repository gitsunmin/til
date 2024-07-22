# VScode Language Extensions

vscode은 다양한 Extension을 사용할 수 있는데, 이는 모두 개인 혹은 단체에서 제작된 add-on 소프트웨어 입니다. 이 Extension들은 많은 기능들 사용할 수 있는데 이 글에서는 그 중에서도 Code를 작성할 떄 도움이 되는 Extension을 개발하는 방법의 일부입니다.

## Language Extension
vscode에서는 코드를 작성할 때 도움이 되는 Extension 기능중에는 크게 두 가지가 있습니다. 
- Declarative language features
- Programmatic language features

### Declarative language features
Declarative language features는 TextMate grammar을 사용하여 구현됩니다. 이는 TextMate grammar은 TextMate editor에서 사용되는 문법을 사용하여
- Syntax highlighting
- Snippet completion
- Bracket matching
- Bracket autoclosing
- Bracket autosurrounding
- Comment toggling
- Auto indentation
- Folding (by markers)

위 기능들을 구현할 수 있습니다.

위 기능들은 `.json` 파일을 사용하여 vscode가 지원하는 기능들에 대한 문법에 따라서 작성이 되며, 아래 처럼 작성하면, 그 문법에 맞는 기능이 제공되는 형태입니다.

```json
{
    "scopeName": "source.example",
    "patterns": [
        {
            "include": "#keyword"
        }
    ],
    "repository": {
        "keyword": {
            "match": "\\b(keyword)\\b",
            "name": "keyword.example"
        }
    }
}
```

### Programmatic language features

Programmatic language features는 Language Server Protocol (LSP)를 사용하여 구현됩니다. 이는 LSP는 Language Server와 Editor 사이의 통신을 위한 프로토콜로, Language Server는 코드를 분석하고, 에러를 검출하고, 코드를 완성하고, 코드를 정리하는 등의 작업을 수행합니다. 아래와 같은 기능은 LSP를 사용하여 구현할 수 있습니다.

- Hover information (vscode.languages.registerHoverProvider)
- Auto completion (vscode.languages.registerCompletionItemProvider)
- Jump to definition (vscode.languages.registerDefinitionProvider)
- Error checking
- Formatting
- Refactoring
- Folding

Programmatic language features는 설명과 같이 하나의 Server가 필요합니다. 아래에는 LSP를 사용하여 구현된 Language Server를 사용하는 예시입니다.

### Language Server Protocol (LSP)
LSP(Language Server Protocol)는 Microsoft에서 제안한 프로토콜로, 언어 도구와 코드 편집기 간의 통신을 표준화합니다. 이 프로토콜이 등장한 이유와 그 역할을 요약하면 다음과 같습니다.

#### 왜 LSP가 생겼을까?

1. 언어 서버와 VS Code의 통합 문제: 언어 서버는 일반적으로 해당 언어의 네이티브 프로그래밍 언어로 구현됩니다. 그러나 VS Code는 Node.js 런타임을 사용하므로, 이 둘의 통합이 어렵습니다.
2. 리소스 집약적인 작업: 코드의 자동완성, 오류 검사, 정의로 이동 등 언어 기능은 많은 파일을 분석하고 추상 구문 트리를 빌드하며 정적 프로그램 분석을 수행해야 합니다. 이러한 작업은 CPU와 메모리 사용량이 많아 VS Code의 성능에 영향을 줄 수 있습니다.
3. 다양한 코드 편집기와 언어 도구의 통합 문제: 언어 도구 제공자와 코드 편집기 제공자 모두 서로 다른 API에 적응해야 하므로, 여러 언어를 여러 코드 편집기에 통합하는 작업은 상당한 노력이 필요합니다. 이는 M개의 언어를 N개의 코드 편집기에 통합하려면 M * N의 작업이 필요함을 의미합니다.

#### LSP의 역할

LSP는 언어 도구와 코드 편집기 간의 통신을 표준화함으로써 위 문제들을 해결합니다.

- 언어 독립성: 언어 서버는 어떤 언어로든 구현될 수 있으며, 자체 프로세스에서 실행되어 성능에 영향을 주지 않습니다.
- 표준화된 통신: LSP를 통해 언어 도구와 코드 편집기는 표준화된 프로토콜로 통신하므로, 다양한 언어 도구와 코드 편집기의 통합이 쉬워집니다.
- 효율성 향상: LSP를 준수하는 언어 도구는 여러 LSP 준수 코드 편집기와 통합될 수 있고, 반대로 LSP 준수 코드 편집기는 여러 LSP 준수 언어 도구를 쉽게 통합할 수 있습니다.

결론적으로, LSP는 언어 도구 제공자와 코드 편집기 제공자 모두에게 유리한 표준화된 통신 방법을 제공하여, 통합 작업을 간소화하고 효율성을 높입니다.



