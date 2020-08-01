function getConfirmation() {
    var retVal = confirm("Do you want to continue ?");
    if( retVal == true ) {
        let backele=document.getElementById("#meals")
    //    document.write ("User wants to continue!");
       return backele;

    } else {
       document.write ("User does not want to continue!");
       return false;
    }
 }
 function Deliver(){
    let chargesP=confirm("Do you want to continue?")
    if(chargesP==true){
   let deliveryPrices=window.prompt("enter the place to be delivered", 500);
   alert('your order will be delivered to your location at shifting fee  of 500')
   return deliveryPrices;
    }
    else{
       alert("No item to be delivered")
    }
 }
