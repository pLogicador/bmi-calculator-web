/**
 * Body Mass Index (BMI) Calculator
 * 
 * Developed by: Pedro Miranda (plogicador)
 * Development Date: February 2024
 * 
 * This simple calculator calculates Body Mass Index (BMI) based on weight and height inputs.
 * BMI is a measure that assesses body weight in relation to height, providing an indication of body fat.
 * In Brazil, it is known as Índice de Massa Corporal (IMC). The BMI levels are categorized into different ranges
 * to indicate whether an individual is underweight, normal weight, overweight, or falls into obesity categories.
 * 
 * How it works:
 * 1. Enter your weight and height in the form.
 * 2. Submit the form to calculate your BMI.
 * 3. The result will display your BMI value along with the corresponding BMI level.
 * 
 * Note: BMI is a general indicator and does not consider factors like muscle mass or distribution of fat.
 * 
 * This is an open-source project with permissions to:
 * - View and modify the source code
 * - Use the code in personal or commercial projects
 * 
 * Restrictions:
 * - Do not claim authorship or ownership
 * - Do not distribute modified versions without attributing original authorship
 * - Do not use the code in a harmful or illegal manner
 * 
 * Refer to the open-source license for more details.
 */

const form = document.querySelector('.form');

function getBmi(weight, height){
    const bmi = weight / (height * height);
    return bmi.toFixed(2);
};

function getLevelsBmi(bmi){
    const level = ['Abaixo do Peso', 'Peso Normal', 'SobrePeso', 
    'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];

    if (bmi >= 39.9) return level[5];
    if (bmi >= 34.9) return level[4];
    if (bmi >= 29.9) return level[3];
    if (bmi >= 24.9) return level[2];
    if (bmi >= 18.5) return level[1];
    if (bmi < 18.5) return level[0];
}

function createParagraph() {
    const p = document.createElement('p');
    return p
}

function setResult(msg, isValid) {
    const result = document.querySelector('.result');
    result.innerHTML = '';

    const p = createParagraph();
    if(isValid) {
        p.classList.add('p-result-valid');
    } else {
        p.classList.add('p-result-invalid');
    }

    p.innerHTML = msg;
    result.appendChild(p);
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputWeight = event.target.querySelector('#weight');
    const inputHeight = event.target.querySelector('#height');
    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    if (!weight) {
        setResult('Peso inválido!', false);
        return;
    }

    if (!height) {
        setResult('Altura inválida!', false);
        return;
    }

    const bmi = getBmi(weight, height);
    const levelBmi = getLevelsBmi(bmi);
    const msg = `Your BMI is ${bmi} (${levelBmi})`;

    setResult(msg, true);
});