// 1) Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements is correct about the partition step? Explain your answer.

// The pivot could have been 17, but could not have been 14
// ***The pivot could have been either 14 or 17
// Neither 14 nor 17 could have been the pivot
// The pivot could have been 14, but could not have been 17

// ***The pivot could have been either 14 or 17:
// The array is currently sorted in such a way that all items to the left of 14 are less than 14 and all items to the right of 14 are greater than 14. This also holds true for 17. Therefore, either of these numbers could have been the pivot. No other value in the array meets this criteria.

// 2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list after the second partitioning according to the quicksort algorithm.

// When using the last item on the list as a pivot

// Partition #1: (Pivot = 12)
// [10, 3, 9, 12, 14, 17, 13, 15, 19, 16]
// Partition #2: (Left-side, pivot = 9)
// [3, 9, 10, 12, 14, 17, 13, 15, 19, 16]

// When using the first item on the list as a pivot

// Partition #1: (pivot = 14)
// [13, 10, 3, 9, 12, 14, 17, 15, 19, 16]
// Partition #2: (Left-side, pivot = 13)
// [10, 3, 9, 12, 13, 14, 17, 15, 19, 16]
