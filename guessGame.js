let max = prompt("enter the maximum number");

let correct= Math.floor(Math.random()*max)+1;

let guess=prompt(`guess the number between 1 to ${max}`);

if(correct==guess){
    console.log("congratulations right guess");

}
else if(correct!= guess) {
    let again= prompt("do you want to try again (Y/N)");
    while(again=="Y")
    {
      guess=  prompt(`guess the number between 1 to ${max}`);

      if(correct==guess){
        console.log("congratulations right guess");
    }
    }
    if(again== "N")
    {
        console.log("you cann't make correct guess");
    }
    
}