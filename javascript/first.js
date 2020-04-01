String "dffdgf" "464" "true" 'ddg' 'true' '45436'
Number 8468 847687.4876 937688467897
Boolean true/false


//Es5//
//Es6//
EcmaScript
(Transpiler-convert into specific versison .babel)

//Es5//
var a = 10
var b = "hiii"
var c= true
var d= "3534"
var e= "true"

undefined
typeof(a)
"number"
typeof(b)
"string"
typeof(c)
"boolean"
typeof(d)
"string"
typeof(e)
"string"

//Es6//
let
const 


var a = 10
var b = 20

var a;
var b;
a =10
b =20

var = we can redeclare and reassign
let = we cannot redeclare but can reassign
const = we cannot redeclare nor reassign


//operations//
var a= 10
var b =20

a+b
30
a-b
-10
a*b
200
a/b
0.5
a%b
4%2

4%2
0
4%3
1
4%2
0
4%3
1
2%4
2
100%101
100
//////////
var a = "hi"
var b =" Javascript"

> var a = "hi"
undefined
> var b =" Javascript"
undefined
> a+b
'hi Javascript'
> 1+1
2
> '1'+'1'
'11'
> '1'-'a'
NaN
> 'a'*'a'
NaN
> 'a'/'a'
NaN
> true+true
2
> true ==1
true
> false == 0
true

string+string = string
string+number = string
number+string = string
number+number =number
Boolean+Boolean = number

"10"+10+10
'101010'
> 10+"10"+"10"
'101010'
> 10+10+"10"
'2010'

"10"+10+10-1
10+"10"+"10"-1
10+10+"10"-1


> "10"+10+10
'101010'
> 10+"10"+"10"
'101010'
> 10+10+"10"
'2010'
> "10"+10+10-1
101009
> 10+"10"+"10"-1
101009
> 10+10+"10"-1
2009
> 'a'-'a'
NaN
> '1'-'2'
-1
> '1'-'a'
NaN
> '1'-true
0
> '1'-'true'
NaN
> 
////////Concat//////
var a = 10
var b ="my age is "+a
a+b
"my age is 10"
var b ="my age is "+a+"sdvd"+b+"dvdv"
"my age is 10"
//es6//
var b =`my age is ${a}${a} kjhkeh ${b}kkfnn${b}${a}`

var a = 10
var b = 20
var c = `${a}${b}`
'1020'

//Es5//
function add(a,b){
    return a+b
}
add(1,2)

//es6
const add = (a,b) => {return a+b}
add(1,2)


//es5
var a = require('xyz')
module.exports = a;
//es6
import a from 'xyz'
export default a;





class geo{
    constructor(lat,long){
        this.lat=lat;
        this.long=long;
    }
}

class language extends geo{
    constructor(name,country,lat,long){
        super(lat,long)
        this.name=name;
        this.country=country;
    }
}

var hindi = new language('English','India',10.1,22.2)

var a = 10
a==10?"hii":"bie"
a==10?a+1:a-1
