console.log([...Array(101).keys()].filter(n=>n-n!=n).map(n =>!(n%15)?"FizzBuzz".slice(0,n):!(n%5)?"Buzz":!(n%3)?"Fizz":n).reduce((n,s)=>n+s+"\n",'').slice(0,-1).trim())

//Readable and efficient fizzbuzz implementation using higher order array methods in the best FP language - Javascript.
