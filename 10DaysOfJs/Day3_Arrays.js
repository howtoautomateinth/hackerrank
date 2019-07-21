function getSecondLargest(nums) {
    const unique = Array.from(new Set(nums));
    const reverseSorted = unique.sort(function (a, b) { return b - a })
    const second = reverseSorted[1];
    return (second);
}