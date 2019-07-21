function modifyArray(nums) {
    return nums.map((num) => {
        if (num % 2) {
            return num * 3;
        } else {
            return num * 2;
        }
    });
}