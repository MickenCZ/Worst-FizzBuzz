console.log([...Array(101).keys()].filter(n=>n-n!=n).map(n =>!(n%15)?"FizzBuzz".slice(0,n):!(n%5)?"Buzz":!(n%3)?"Fizz":n).reduce((n,s)=>n+s+"\n",'').slice(0,-1).trim())

//Readable and efficient fizzbuzz implementation using higher order array methods in the best FP language - Javascript.
//If you don't want your friends to know its Fizzbuzz, I have an ever better version:
console.log([...Array(101).keys()].filter(n=>n-n!=n).map(n =>!(n%(((((((((((1^3)<<0.2)^0.5)<<1)^0.3333)<<2)^1)<<1)^3)>>1)-1))?String.fromCharCode(70, 105, 122, 122, 66, 117, 122, 122).slice(0,n):!(n%(6^3)<<0.5)?({} + [])[2]+[[][[]]+[]][+[]][[+[]][+[]]]+"zz":!(n%((((((((((1^3)<<0.2)^0.5)<<1)^4)<<1)^2)<<1)^2)>>1))?"\u0046\u0069\u007a\u007a":n).reduce((n,s)=>n+s+"\n",'').slice(0,-1).trim())
