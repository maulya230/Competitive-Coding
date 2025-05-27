// 20. Valid Parentheses

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[]
    for (i=0; i<s.length; i++){
        let ch=s[i];
        if (ch==='(' || ch==='{' || ch==='['){
            stack.push(ch)
        }
        else{
            if (stack.length ===0){
                return false
            }
            let top=stack.pop();
            if ((ch===')' && top!='(')||
            (ch==='}' && top!='{')||
            (ch===']' && top!='[')
            ){
                return false
            }
        }
    }
    return stack.length===0;

}
    
