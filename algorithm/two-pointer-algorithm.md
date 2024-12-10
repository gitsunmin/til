# Two Pointer Algorithm

**Two-Pointer** 알고리즘은 배열이나 리스트에서 두 개의 포인터(인덱스)를 사용하여 문제를 해결하는 기법입니다. 이 알고리즘은 주로 배열이나 리스트에서 특정 조건을 만족하는 두 요소를 찾거나 최적해를 빠르게 도출할 때 사용됩니다. 특히, 배열의 양 끝에서 시작해서 조건에 따라 한쪽 혹은 양쪽 포인터를 이동시키면서 문제를 해결하는 것이 특징입니다.

#### Two-Pointer 알고리즘의 동작 방식
1. **두 개의 포인터 설정**: 배열의 양 끝에 두 개의 포인터(보통 하나는 시작(`s`), 다른 하나는 끝(`e`))를 설정합니다.
2. **조건에 따른 포인터 이동**: 문제에서 요구하는 조건에 맞게 포인터를 이동시킵니다. 두 포인터를 비교하면서 하나 혹은 양쪽을 이동시키는 방식입니다.
3. **포인터가 교차할 때까지 반복**: 두 포인터가 서로 교차하거나 특정 종료 조건에 도달할 때까지 반복합니다.

이 방식은 이진 탐색처럼 분할 정복에 가깝고, 순차적으로 진행하는 방법보다 효율적인 풀이를 가능하게 해줍니다.

#### 대표적인 예시 문제: Container With Most Water

**문제 설명**: 주어진 배열에서 각 요소는 해당 위치의 높이를 나타냅니다. 이 배열을 이용하여, 두 개의 막대와 x축이 만드는 컨테이너 중 가장 많은 물을 담을 수 있는 컨테이너의 면적을 구하는 문제입니다.

**예시**:
```typescript
export function maxArea(height: number[]): number {
    let s = 0, e = height.length - 1, max = 0;

    while (s < e) {
        max = Math.max((e - s) * Math.min(height[s], height[e]), max);
        if (height[s] < height[e]) s++;
        else e--;
    }
    return max;
};
```

**알고리즘 설명**:
1. 두 포인터 `s`와 `e`를 각각 배열의 양 끝에 배치합니다.
2. 두 막대 사이의 거리를 구하고, 그 거리에 더 작은 막대의 높이를 곱하여 면적을 계산합니다.
3. 면적의 최대값을 저장하며, 더 작은 막대를 기준으로 포인터를 이동시킵니다. (더 작은 막대를 이동하는 이유는 더 큰 높이를 유지하면서 더 큰 면적을 찾기 위해서입니다.)
4. 두 포인터가 만날 때까지 이를 반복하여 가장 큰 면적을 반환합니다.

**시간 복잡도**: 이 알고리즘은 배열을 한 번 순회하기 때문에 `O(n)`입니다.

**공간 복잡도**: 추가적인 공간을 거의 사용하지 않으므로 `O(1)`입니다.

#### Two-Pointer 알고리즘의 대표적인 활용

- **Two Sum 문제**: 정렬된 배열에서 두 수의 합이 특정 목표 값이 되는 경우를 찾는 문제입니다. 배열의 양 끝에서 시작하여 두 수의 합을 구하고, 합이 목표보다 크면 오른쪽 포인터를 줄이고, 작으면 왼쪽 포인터를 이동시켜서 문제를 해결합니다.

- **Palindrome 검사**: 문자열의 양 끝에서부터 하나씩 문자를 비교하여 대칭 여부를 확인하는 문제입니다. 두 포인터가 중앙에서 만나면 종료합니다.

#### 장점
- 배열을 효율적으로 탐색할 수 있어 시간 복잡도를 줄여줍니다.
- 메모리 사용을 최소화하는 간결한 방식으로 문제를 해결할 수 있습니다.

### 결론
**Two-Pointer 알고리즘**은 배열에서 최적해를 빠르게 도출하는 데 유용한 도구입니다. 특정 범위에서 최적해를 찾거나, 두 요소의 조건을 비교하는 문제에서 매우 효과적이며, 대표적으로 "Container With Most Water"와 같은 문제에서 사용됩니다.