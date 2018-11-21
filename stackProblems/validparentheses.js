// Write a function, is valid that checks if brackets in a string are balanced (properly closed) based on JavaScript syntax rules.
// valid examples: '{([()])}()' or '()[]'
// invalid examples: '(' or '[(])'

/*
* Checks for balanced brackets in a string of code.
* @param {string} code - a string of code.
* @return {boolean} - true if valid, otherwise false
*/
function isBalanced(code) {
    //create a map with parenthses
    const balancedMath = {
        '(':')',
        '{':'}',
        '[':']'
    };

    const LeftSet = new Set(['(','[','{']);
    const RightSet = new Set([')',']','}']);

    const bracketStack = [];

    for(let i =0;i<code.length;i++){
        let char = code.charAt(i);

        if(LeftSet.has(char)){
            bracketStack.push(char)
        }else if(RightSet.has(char)){
            if(!bracketStack.length){
                return false;
            }else{
                const leftUnclosed = bracketStack.pop();
                if(balancedMath[leftUnclosed] !== char){
                    return false;
                }
            }
        }
    }
    //console.log(bracketStack)
    return bracketStack.length === 0;
  }

  console.log(isBalanced('{([()])}()'));
  console.log(isBalanced('()[]'));
  console.log(isBalanced('(]'))