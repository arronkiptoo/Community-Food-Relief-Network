document.addEventListener("DOMContentLoaded", function () {
    const distributeForm = document.getElementById("distributeForm");

    distributeForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const nameInput = document.getElementById("Name").value;
        const placeInput = document.getElementById("placeDistributed").value;
        alert(`Name: ${nameInput}\nPlace Distributed: ${placeInput}`);
    });
});