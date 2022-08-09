/* <div id="quiz"></div>

<button id="submit">Get Results</button>

<div id="results"></div>

Q1) Create a function to generate a quiz.

Your function will need these inputs:

Name

Class

Subject

Date
And these inputs to the function and output it as a fully-formed quiz. */
function quiz(){
    let quiz1=prompt("Fill in your name")
    let quiz2=prompt("Fill your class")
    let quiz3=prompt("Fill your Subject")
    let quiz4=prompt("Fill your date")
    document.getElementById("quiz").innerHTML=`Hello ${quiz1}, you are in class ${quiz2},school ${quiz3} on ${quiz4}}`


    
}
let microsoft={
    theme:"Black",
    products:"Windows",
    co_founder:"Bill Gates"
}
console.log(microsoft.co_founder);
class Phone{
    constructor(design,color,type){
        this.color=color
        this.type=type
        this.design=design
 
    }
}
let sam=new Phone("Samsung","green","smartphone")
console.log(sam);
