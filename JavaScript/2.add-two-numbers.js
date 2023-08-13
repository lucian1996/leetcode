/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

addTwoNumbers([2,4,3],[5,6,4])

function addTwoNumbers(l1, l2){
    while (l1 || l2){
        let val1 = 0
        let val2 = 0
        if (l1){
            val1 = l1
            l1 = l1.next
        }
        if (l2){
            val1 = l2
            l2 = l2.next
        }
        sum = val1 + val2
        console.log(`${val1} + ${val2} = ${sum}`)
    }
}

var addTwoNumbers = function(l1, l2) {
    var sum1 = 0
    var sum2 = 0

    var third = l1[2]

    
        for (var i = 0;i < l1.length; i++){
            var third
        }
        for (var i = 0;i < l2.length; i++){

        }

};
// @lc code=end

