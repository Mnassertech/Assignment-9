let i=0;
let previousIndex = 0;
let randomIndex =0 ;

function quoteButton(){
   
    var arr = [
        "The death of one man is a tragedy. The death of millions is a statistic.",
        "The object of war is not to die for your country but to make the other bastard die for his.",
        "It is foolish and wrong to mourn the men who died. Rather we should thank God that such men lived.",
        "Cowards die many times before their deaths; The valiant never taste of death but once.",
        "Courage is being scared to death - but saddling up anyway.",
        "War is as much a punishment to the punisher as it is to the sufferer.",
        "It is fatal to enter any war without the will to win it."
    ];
    var arr2 = [
        "Joseph Stalin",
        "General George S. Patton",
        "General George S. Patton",
        "William Shakespeare",
        "John Wayne",
        "Thomas Jefferson",
        "General Douglas MacArthur"
    ];


   
    while(1){
        randomIndex=Math.floor(Math.random()*arr.length); 
        if (randomIndex !== previousIndex){
             break;
        }
    }
    previousIndex=randomIndex;

     document.getElementById("quote").innerHTML = arr[randomIndex];
     document.getElementById("quoteAuthor").innerHTML = arr2[randomIndex];
    
}