/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
};

function romanToInt(s) {
    if (s){
        countI = 0
        if (s.contains("I")){
            s.forEach((I) => {
                countI += 1
            })
        }
        return countI
    }
}

romanToInt("III")

// @lc code=end

