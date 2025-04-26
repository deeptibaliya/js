function calculateBMI() {
    const heightInput = document.getElementById('height').value;
    const weightInput = document.getElementById('weight').value;
    const result = document.getElementById('result');

    if (heightInput === '' || weightInput === '') {
        result.innerHTML = "Please enter both height and weight!";
        result.style.color = "red";
        return;
    }

    const heightInMeters = heightInput / 100;
    const bmi = (weightInput / (heightInMeters * heightInMeters)).toFixed(2);

    let category = '';

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    result.innerHTML = `Your BMI is <strong>${bmi}</strong> (${category})`;
    result.style.color = "#333";
}
