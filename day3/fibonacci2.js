const fib = (n)=>{
    if(n<=1) return n;
    return fib(n-1) + fib(n-2);
}

const fib1 = (n) => n <= 1 ? n : fib1(n-1) + fib1(n-2);

console.log(fib(12));
