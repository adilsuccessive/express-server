function diamond(n){
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
    for(i=0; i<n; i++)
    {
        for(j=0; j<i; j++)
        {
            a += ' ';
        }
        for(k=n; k>i; k--)
        {
            a += '* ';
        }
    a += '\n';    
    }
console.log(a)
}
diamond(5);
diamond(3);