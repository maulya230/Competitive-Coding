class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        heights.push(0)
        let stack=[]
        let maxArea=0
        for (let i=0; i<heights.length; i++){
            let start=i
            while(stack.length && heights[i]<stack[stack.length-1][1]){
                const [index, height]=stack.pop()
                const width = i - index
                const area= width * height
                maxArea=Math.max(maxArea, area)
                start = index
            }
            stack.push([start, heights[i]])
        }
        return maxArea
    }
}
