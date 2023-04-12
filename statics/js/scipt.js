document.querySelector("#qtde").addEventListener("change", calcularOrcamento);
document.querySelector("#js").addEventListener("change", calcularOrcamento);
document.querySelector("#layout_s").addEventListener("change", calcularOrcamento);
document.querySelector("#layout_n").addEventListener("change", calcularOrcamento);
document.querySelector("#prazo").addEventListener("change", calcularOrcamento);


function calcularOrcamento(){

   let preco = qtde.value * 100;
   if(js.checked) preco *= 1.1
   if(layout_s.checked) preco += 500

   let taxaDeUgencia = preco * (1.1 - prazo.value * 0.1)
   preco += taxaDeUgencia

   label_prazo.innerHTML = `Prazo (${prazo.value} semanas)`
   output.innerHTML = "R$ " + preco.toFixed(2)
}