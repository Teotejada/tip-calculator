function calculateTip() {
    var billAmount = parseFloat(document.getElementById("billAmount").value);
    var tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
  
    if (isNaN(billAmount) || isNaN(tipPercentage)) {
      alert("Ingrese un valor numérico válido.");
      return;
    }
  
    var tipAmount = billAmount * (tipPercentage / 100);
    var totalAmount = billAmount + tipAmount;
  
    document.getElementById("totalTip").innerHTML = "Propina: $" + tipAmount.toFixed(2) + "<br>Total a pagar: $" + totalAmount.toFixed(2);
  }