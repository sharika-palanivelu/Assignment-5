document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();

    if (dob > today) {
        document.getElementById('result').textContent = "Date of birth cannot be in the future.";
        return;
    }

    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById('result').textContent = `Your age is ${age} years.`;
});