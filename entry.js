// Function to get query parameters from URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Display the selected date
const selectedDate = getQueryParam("date");
document.getElementById("selected-date").textContent = `Selected Date: ${selectedDate}`;

// Add save functionality
document.getElementById("save-entry").onclick = () => {
    const entryContent = document.getElementById("entry").value;
    alert(`Entry saved for ${selectedDate}: ${entryContent}`); // Placeholder for saving logic
    // Implement saving logic (e.g., saving to a server or local storage)
};
