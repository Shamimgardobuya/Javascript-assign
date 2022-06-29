// Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
    //  create function and pass in 100 as parametrer
    // create a default variable and assign 0
    // loopp through the numbers in 100
    // and update it
    // if  number reaches 3 console.log(Fizz)
    //  and if 5,console.log(buzz)
    // if multiple of both 3 ad 5 console.log(FizzBuzz)
function multiple(n){
    for(let h=0;h<n;h++){
        if(h%3===0 && h%5===0){
            console.log("FizzBuzz");
        }
        else if (h%3===0){
            console.log("Fizz");
        
        }
        else if (h%5==0){
            console.log("Buzz");

        }
        
        else{
            console.log(h);
        }
        
    }
}
multiple(100);
// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
//   create function and pass in parameter
    // create default variable that holds 0
    // create a looping variable representing int 
    //for numbers that  are both divisible by 3 and 5 add and assign each to the default variable
    // call function and pass in argument
    // 
function summing(t){
    let p=0;
    let sum=0;
    for (letp=0;p<1000;p++){
        if(p%3===0 && p%5===0){
            sum+=p
        
        }



    }
    console.log(sum);

}
summing(1000);
// Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

// 4. Write a JavaScript conditional statement to find the largest of five numbers in the
    // create a function and pass in parameter
    // loop through each of the number ,create and assign 0 to the each variable
    // if number is not divisible by 2,console number is odd
    // call function and pass in arguent
function even_odd(number){
    let numb=0;
    for (let numb=0;numb<number;numb++){
        if(numb%2===0){
            console.log(`${numb} is even`);
        }
        else if(numb%2!==0){
            console.log(`${numb} is  odd`);
        }

    }

}
even_odd(20);
// 4. Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
// Let num = [-2, 4,-5, 6,0]
// 5. Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40
        //  create function,pass in no pm
        //  write the variable holding  the array
        // create a default variable representing first index
        // loop through and compare each value with the variable
        // if value is higher print it as highter.
        // call functinn
function maximum(){
    let arr=[-2,4,-5,6,0];
    let first=0
    for (let i=0;i<arr.length;i++){
        if(arr[i]>first){
        first=arr[i]
        }
    }
    console.log(first);


    
    // console.log(Math.max(...arr));
          //is the spread operator 
    
}
maximum();
//   create function and pass in two paramterts,compare using if conditions
function largest(digit,digit2){
    if(digit>digit2){
        console.log(digit);
    }
    else{
        console.log(digit2);
    }
}
largest(10,40);
// Write a JavaScript program to find leap years from 2000 to 2022
//    create function and pass in an array  asparameters
    // loop through and conole divisible by 2 and 4
    // call function and pas oinfrom 2000 to 29022
function leaping(b){
    //    let numberzz=2000;
    // b.forEach(ele => {
    //        if (ele%4==0 &&ele%4){
    //         console.log(ele);
    //        }      
    // });
    for (let numberzz=2000;numberzz<2022;numberzz++){
        if (numberzz%4==0){
                   console.log(numberzz);
    }
    else{
        console.log(b);
    }
    
}}
leaping(2020);