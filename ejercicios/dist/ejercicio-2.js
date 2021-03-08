function searchFactors(numero) {
    let array_factors = [];
    for (let i = 0; i < numero; i++) {
        if (numero % i == 0) {
            array_factors.push(i);
        }
    }
    return array_factors;
}
function performNichomachusClassification(arr) {
    let array_result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) {
            return undefined;
        }
        let suma = searchFactors(arr[i]).reduce((a, b) => a + b, 0);
        if (suma == arr[i]) {
            array_result.push('perfecto');
        }
        else if (suma > arr[i]) {
            array_result.push('abundante');
        }
        else {
            array_result.push('deficiente');
        }
    }
    console.log(`Los números [${arr}] son respectivamente: `);
    return array_result;
}
console.log(performNichomachusClassification([6, 28, 12, 24, 8]));
