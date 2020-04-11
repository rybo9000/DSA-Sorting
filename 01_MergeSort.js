// Given the following list of numbers

// 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

// What is the resulting list that will be sorted after 3 recursive calls to mergesort?
// What is the resulting list that will be sorted after 16 recursive calls to mergesort?
// What are the first 2 lists to be merged?
// Which two lists would be merged on the 7th merge?

// On call #1, left is assigned to [21, 1, 26, 45, 29, 28, 2, 9].
// On recursive call #1, left is further divided to be [21, 1, 26, 45].
// On recursive call #2, left is further divided to be [21, 1].
// On recursive call #3 - mergeSort([21, 1]) - left is further divided to be [21].
// On recursive call #4, mergeSort([21]) returns [21]. The algorithm then processes the right-side value of 1.
// On recursive call #5, mergeSort([1]) returns [1].
// On recursive call #6, mergeSort([21, 1]) calls merge ([21], [1], [21, 1]).
// On recursive call #7, merge returns [1, 21]. This causes mergeSort([21, 1]) to return [1, 21].
// On recursive call #8, mergeSort([26, 45]) divides left to be [26] and right to be [45].
// On recursive call #9, mergeSort([26]) returns 26.
// On recursive call #10, mergeSort([45]) returns 45.
// On recursive call #11, merge([26], [45], [26, 45]) returns [26, 45]. This causes mergeSort([26, 45]) to return [26, 45].
// On recursive call #12, mergeSort([21, 1, 26, 45]) calls merge([1, 21], [26, 45], [21, 1, 26, 45]) and returns [1, 21, 26, 45].
// On recursive call #13, mergeSort([29, 28, 2, 9]) subdivides itself into [29, 28] and [2, 9].
// On recursive call #14, mergeSort([29, 28]) subdivides itself into [29] and [28].
// On recursive call #15, mergeSort([29]) returns 29.
// On recursive call #16, mergeSort([28]) returns 28.
