function receivesAFunction(otherFunction){
 otherFunction();
 return;
}

function returnsANamedFunction(){
    return function namedFunction(){
        console.log("This is a function within a function")
    }
}

function returnsAnAnonymousFunction(){
    return function(){console.log("hehe I'm anonymous");}
}