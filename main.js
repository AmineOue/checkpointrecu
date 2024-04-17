// Leap Year Checker
function leapYEarChecker(){
    const input = prompt("give me a year")
    if ((parseInt(input)%4 == 0 && parseInt(input)%100 == 0 && parseInt(input)%400 == 0)|| ( parseInt(input) % 4 == 0)){
        console.log("Leap year")
    }else {
        console.log("Not a leap year")
    }
}
// Ticket Pricing
function ticketPricing(){
    const input = prompt("Give me your age")
    if (input <= 12){
        console.log("10$")
    }else if (input <= 17 && input > 12){
        console.log("15")
    }else{
        console.log("20$")
    }
}

// Weather Clothing Adviser

function weatherClothing(){
    const temperature = prompt("current temperature")
    const whether = prompt("weather")
    if (temperature <= 15){
        console.log("Lightweight Outer Layer: Windbreaker, Anorak or Tracksuit Jacket")
    } else if( temperature <= 7){
        console.log("tee shirt")
    }
}
// recrusion

function checkPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return checkPalindrome(str.slice(1,-1))
    return false;
}

checkPalindrome("amine")

function power(x,n){
    if (n === 1){
        return x
    }
    return x * power(x,n-1)

}

