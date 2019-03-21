console.log('JS is Running Running Running....uhh')

//EASY GOING
//1. Write a loop that will log the numbers1 through 20.

/*for(let i=1; i<=20; i++){
    console.log('The number is' + i);}*/
//"Commit 1 - Easy Going answered"

//GET EVEN
//1. Write a for loop that will log only the even numbers 
//in 0 through 200.

/*for(i = 0; i < 200; i++){
    if ((i % 2) == 0){
        console.log('This number is' + i)
    }
} */
//"Commit 2 - Get Even answered"

//EXCITED KITTEN
//1.Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
//2.For every even number in your loop, log "...human...why 
//you taking pictures of me?...", "...the catnip made me do it...",
// or "...why does the red dot always get away..." at random.

//Hint: You will need to use Math.random()

//for (let i = 0; i < 20; i++){
    //console.log('Love me, pet me! HSSSSSS!')}

/*const salem = ["...human...why you taking pictures of me?...",
"...the catnip made me do it...", "...why does the red dot always get away..."];

function meow(){
    let salem = [i];
    for (let i = 0; i < 20; i++){
        console.log('Love me, pet me! HSSSSSS!');
        if ((i % 2 ==0)){
            Math.Random(salem+ i);{
            console.log(meow)}
        }
     }
}*/

//FIZZ BUZZ
//1.Write a javascript application that logs all numbers from 1-100.
/*for(let i=0; i <=100; i++){
    console.log('The number is:' + i);}*/

//2.If divisible by 3 log "Fizz" instead of number
/*for(let i=0; i <=100; i++){
    if(i % 3 === 0){
        console.log("Fizz");
    }
}*/
//3.If divisible by 5 log "Buzz" instead of number

for(let i=0; i <=100; i++){
    if(i % 5 ===0){
        console.log("Buzz");
    }
}

//4.If a number is divisible by 3 and 5 log "FizzBuzz" instead of number.
for(let i=0; i <=100; i++){
    if(i % 3 === 0 && i % 5 ===0){
        console.log("FizzBuzz");
    }
    else if(i % 3 ===0){
        console.log("Fizz");
    }
    else if(i % 5 ===0){
        console.log("Buzz");
    }   else{
        console.log(i)
    }
}

