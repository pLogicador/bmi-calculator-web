const form = document.querySelector('.form');

function calculateBMI(weight, height){
    return (weight / (height ** 2)).toFixed(2);
};

function getBMICategory(bmi) {
    const categories = ['Underweight', 'Normal Weight', 'Overweight', 
                        'Obesity Grade 1', 'Obesity Grade 2', 'Obesity Grade 3'];

    if (bmi >= 39.9) return categories[5];
    if (bmi >= 34.9) return categories[4];
    if (bmi >= 29.9) return categories[3];
    if (bmi >= 24.9) return categories[2];
    if (bmi >= 18.5) return categories[1];
    return categories[0];
}

function createParagraph(msg, isValid) {
    const p = document.createElement('p');
    p.classList.add(isValid ? 'p-valid-result' : 'p-invalid-result');
    p.textContent = msg;
    return p;
}

function displayResult(message, isValid) {
    const resultContainer = document.querySelector('.result');
    resultContainer.innerHTML = '';
    resultContainer.appendChild(createParagraph(message, isValid));
}

function handleFormSubmit(event) {
    event.preventDefault();

    const weightInput = event.target.querySelector('#weight');
    const heightInput = event.target.querySelector('#height');
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (isNaN(weight) || weight <= 0) {
        displayResult('Invalid weight!', false);
        return;
    }

    if (isNaN(height) || height <= 0) {
        displayResult('Invalid height!', false);
        return;
    }

    const bmi = calculateBMI(weight, height);
    const category = getBMICategory(bmi);
    const message = `Your BMI is ${bmi} (${category})`;

    displayResult(message, true);
}

form.addEventListener('submit', handleFormSubmit);

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
