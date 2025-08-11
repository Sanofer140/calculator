while(true){
    var a=parseInt(prompt("Enter first number"));
var b=parseInt(prompt("Enter second number"));
var op=prompt("Enter Operator");
var res;
if(op==='+'){
    res=a+b;
    document.getElementById('Output').innerHTML+='Output is '+res;
    break;
}
else if(op==='-'){
    res=a-b;
    document.getElementById('Output').innerHTML+='Output is '+res;
    break;
}
else if(op==='*'){
    res=a*b;
    document.getElementById('Output').innerHTML+='Output is '+res;
    break;
}
else if(op==='/'){
    res=a/b;
    document.getElementById('Output').innerHTML+='Output is '+res;
    break;
}
}
