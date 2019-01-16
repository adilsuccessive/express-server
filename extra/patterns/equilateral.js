function equilateral(n){
    let a='';

    for(let i=0; i<n; i++)
    {
     
     for(let j=0; j<n-i-1; j++)
     {
        a += ' ';
     } 
     for(let k=0; k<=i; k++)
     {
         a += '* ';
     }
     
    a += '\n';  
    }
console.log(a)
}
equilateral(5);
equilateral(3);