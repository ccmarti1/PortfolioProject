function calculate(choice)
{
    // creates varieable n1
    // locates num1 id using document.getElementById
    // .value is added to obtain its value
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    let result;
    // holds value of choice
    let ch= choice;
// switch takes one argument
    switch(ch)
    {
        // If 1 then run this operation
        case '1':
            result = n1+n2;
            break;
        // if 2 is sellected run this operation
        case '2':
            result = n1-n2;
            break;
        // If 3 is entered run this preogram
        case '3':
            result= n1*n2;
            break;
        // If 4 is clicked run this program
        case '4':
            result=n1/n2;
            break;
        case '5':
            result=n1%n2;
            break;
        
    }
    // connects html to java script operation
    document.getElementById('result').value=result;
}