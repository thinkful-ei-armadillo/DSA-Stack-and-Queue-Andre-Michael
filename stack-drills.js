const Stack = require('./Stack');

//2
function peek(s){
  return s.top;
}

function isEmpty(s){
  if(!s.top){
    return 'The stack is empty';
  }
  return 'The stack is populated';
}

function display(s){
  if(!s.top){
    return null;
  }
  let currNode = s.top;
  let sArr = [];
  while(currNode !== null){
    sArr.push(currNode.data);
    currNode = currNode.next;
  }
  return sArr;
}

//3
function isPalindrome(str){
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let stackedStr = new Stack();
  for(i = 0; i < str.length; i++){
    stackedStr.push(str[i]);
  }
  for(i = 0; i < str.length / 2; i++){
    if(str[i] !== stackedStr.pop()){
      return false;
    }
  }
  return true;
}

//4
function parens(str){
  let stackedStr = new Stack();
  let currIdx = 0;
  let oParenIdx = -1;
  let cParenIdx = -1;
  let oParenCount = 0;
  let cParenCount = 0;
  for(i = str.length; i >= 0; i--){
    stackedStr.push(str[i]);
  }
  while(stackedStr.top !== null){
    let char = stackedStr.pop();
    if(char === '('){
      if(oParenIdx === -1){
        oParenIdx = currIdx;
      }
      oParenCount++;
    }
    if(char === ')'){
      if(cParenIdx === -1){
        cParenIdx = currIdx;
      }
      cParenCount++;
    }
    currIdx++;
  }
  if(oParenCount === cParenCount){
    return 'All parentheses are good';
  }
  else if(oParenCount > cParenCount){
    return `There is an unclosed parenthesis at index ${oParenIdx}`
  }
  else{
    return `There is an unopened parenthesis at index ${cParenIdx}`
  }
}

//5
function sortStack(s){
  if(!s.top){
    return null;
  }

  let sortedStack = new Stack();
  let tempStack = new Stack();
  while(s.top !== null){
    let val = s.pop();
    if(sortedStack.top === null){
      sortedStack.push(val);
    }
    else if(val < sortedStack.top.data){
      sortedStack.push(val);
    }
    else if(val > sortedStack.top.data){
      while(sortedStack.top !== null){
        if(val > sortedStack.top.data){
          let temp = sortedStack.pop();
          tempStack.push(temp);
        }
      }
      sortedStack.push(val);
      while(tempStack.top !== null){
        let temp2 = tempStack.pop();
        sortedStack.push(temp2);
      }
    }
  }
  return sortedStack;
}

function main(){
  // const starTrek = new Stack();

  // starTrek.push('Kirk');
  // starTrek.push('Spock');
  // starTrek.push('McCoy');
  // starTrek.push('Scotty');
  // starTrek.pop();
  // starTrek.pop();
  // starTrek.push('Scotty');

  // console.log(display(starTrek));

  // console.log(isPalindrome("dad"));
  // console.log(isPalindrome("A man, a plan, a canal: Panama"));
  // console.log(isPalindrome("1001"));
  // console.log(isPalindrome("Tauhida"));

  // console.log(parens('((3+3) / 2)'));

  // const stack = new Stack();
  // stack.push(5);
  // stack.push(4);
  // stack.push(2);
  // stack.push(3);

  // console.log(display(sortStack(stack)));
}

main();