const selectEjemplo = document.getElementById("id-select-ejemplo");
const btnCargarEjemplo = document.getElementById("id-btn-cargar-ejemplo");
const btnPresentarEjemplo = document.getElementById("id-btn-presentar-ejemplo");
const listadoEjemplo = document.getElementById("id-listado-ejemplo");

let vectorEjemplo = [];

btnCargarEjemplo.addEventListener("click", function () {

    let dimension = parseInt(selectEjemplo.value);

    vectorEjemplo = [];

    for (let i = 0; i < dimension; i++) {

        let numero = Math.floor(Math.random() * 500) + 1;

        vectorEjemplo.push(numero);
    }

    alert("Datos cargados correctamente");
});

btnPresentarEjemplo.addEventListener("click", function () {

    if (vectorEjemplo.length === 0) {
        alert("Primero debe cargar los datos");
        return;
    }

    let total = 0;
    let mayor = vectorEjemplo[0];
    let menor = vectorEjemplo[0];

    for (let i = 0; i < vectorEjemplo.length; i++) {

        total += vectorEjemplo[i];

        if (vectorEjemplo[i] > mayor) {
            mayor = vectorEjemplo[i];
        }

        if (vectorEjemplo[i] < menor) {
            menor = vectorEjemplo[i];
        }
    }

    let promedio = total / vectorEjemplo.length;

    let diasSobrePromedio = 0;

    for (let i = 0; i < vectorEjemplo.length; i++) {

        if (vectorEjemplo[i] > promedio) {
            diasSobrePromedio++;
        }
    }

    let resultado = "";

    resultado += "PRODUCCION REGISTRADA\n\n";
    resultado += vectorEjemplo.join(" - ");
    resultado += "\n\n";

    resultado += "TOTAL PRODUCIDO: " + total + "\n";
    resultado += "PRODUCCION MAYOR: " + mayor + "\n";
    resultado += "PRODUCCION MENOR: " + menor + "\n";
    resultado += "PROMEDIO: " + promedio.toFixed(2) + "\n";
    resultado += "DIAS SOBRE EL PROMEDIO: " + diasSobrePromedio + "\n";

    listadoEjemplo.value = resultado;
});