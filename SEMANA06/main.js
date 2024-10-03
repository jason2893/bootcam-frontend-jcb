// Función para calcular el cambio mínimo
function calcularCambio(cantidad) {
    const COINS = [50, 20, 10, 5, 2, 1];
    let resultado = [];
    let cantidadRestante = cantidad;

    for (let i = 0; i < COINS.length; i++) {
        let numMonedas = Math.floor(cantidadRestante / COINS[i]);

        if (numMonedas > 0) {
            resultado.push({ moneda: COINS[i], cantidad: numMonedas });
            cantidadRestante -= numMonedas * COINS[i];
        }
    }

    return resultado;
}

document.getElementById('cambioForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const cantidad = parseInt(document.getElementById('cantidad').value);

    if (isNaN(cantidad) || cantidad <= 0) {
        alert('Por favor, introduce una cantidad válida en céntimos.');
        return;
    }

    const resultado = calcularCambio(cantidad);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; 
    resultado.forEach(item => {
        resultadoDiv.innerHTML += `Moneda: ${item.moneda} céntimos - Cantidad: ${item.cantidad} <br>`;
    });
});
