//Q 8: 
function ask(question,yes,no){
    if (confirm(question,yes, no)) 
    yes()
    else no();
}
ask("Do you agree?",
()=>alert ("You agreed."),
()=>alert("You canceled the execution.")
);
