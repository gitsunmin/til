# submodule

submodule은 git repository를 다른 git repository의 하위 디렉토리로 사용할 수 있게 해주는 기능을 말합니다.

사용법은 다음과 같습니다.

## submodule 추가하기

```bash
git submodule add <repositoryURL> <path>
```

이렇게만 하면, 해당 path에 해당 repository의 내용이 clone됩니다.

## submodule의 내용을 가져오기

submodule의 내용을 추가한 후에 변경이 되었다면 새로 submodule을 가져와야 합니다. 아래 명령어를 사용하면 fetch후에 merge까지 해줍니다.

```bash
git submodule update --remote <path>
```

참고, 여기서 path를 입력하지 않으면 모든 submodule을 가져옵니다.

만약에, 수정을 한 뒤에 기존 저장소에서 변경된 내용을 가져오고 싶다면, 아래 명령어를 사용합니다.

```bash
git submodule update --remote --merge <path>
```

## submodule에 포함된 repository, clone하기

submodule에 포함된 repository를 clone하기 위해서는 아래 명령어를 사용합니다.

```bash
git clone --recurse-submodules <repositoryURL>
```
