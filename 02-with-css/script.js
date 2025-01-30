//                          Evenement
document.addEventListener("DOMContentLoaded", function () {
    const rangeInput = document.querySelector("#length"); // Element HTML id
    const selectedLength = document.querySelector(".selected-length"); // Element HTML class
//                              Evenement
    rangeInput.addEventListener("input", function () {
        selectedLength.textContent = rangeInput.value;
    });
});
