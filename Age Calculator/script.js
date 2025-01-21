document.getElementById("btn").addEventListener("click", function () {
    const birthdayInput = document.getElementById("birthday").value;
    
    if (!birthdayInput) {
        document.getElementById("result").textContent = "Please select a valid date of birth.";
        document.getElementById("result").style.color = "red";
        return;
    }

    const birthday = new Date(birthdayInput);
    const today = new Date();

    if (birthday > today) {
        document.getElementById("result").textContent = "The date of birth cannot be in the future.";
        document.getElementById("result").style.color = "red";
        return;
    }

    let age = today.getFullYear() - birthday.getFullYear();
    
    const monthDifference = today.getMonth() - birthday.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }

    age = age < 0 ? 0 : age;
    
    document.getElementById("result").textContent = `Your age is ${age} years old.`;
    document.getElementById("result").style.color = "green";
});
