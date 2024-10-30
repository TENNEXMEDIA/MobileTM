// Hero Section interaction
function revealButtons() {
    const extraButtons = document.getElementById("extra-buttons");
    if (extraButtons.style.display === "none") {
        extraButtons.style.display = "block";
    } else {
        extraButtons.style.display = "none";
    }
}
