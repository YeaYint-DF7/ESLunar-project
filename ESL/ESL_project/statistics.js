//Statistics 
const Pcounter = document.querySelectorAll(".pcounter")

Pcounter.forEach(Mycounter);
function Mycounter(Cvalue){
    Cvalue.innerText = "0";

    incrementCounter();
    function incrementCounter(){
        let currentNum = +Cvalue.innerText;
        let dataCeil = Cvalue.getAttribute("data-ceil");
        let increment = dataCeil / 11;
        currentNum = Math.ceil (currentNum + increment)

        if(currentNum < dataCeil){
            Cvalue.innerText = currentNum;
            setTimeout(incrementCounter, 50);
        }
        else{
            Cvalue.innerText = dataCeil;
        }
    }
}