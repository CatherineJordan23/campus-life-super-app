// EVENTS API PLACEHOLDER
const eventsContainer = document.getElementById("eventsContainer");

if (eventsContainer) {
    // Fake Data (replace with API later)
    const events = [
        {title: "Club Fair", date: "April 20"},
        {title: "Music Night", date: "April 22"}
    ];

    events.forEach(event => {
        const div = document.createElement("div");
        div.className = "col-md-4";

        div.innerHTML = `
        <div class="card p-3 mb-3">
            <h5>${event.title}</h5>
            <p>${event.date}</p>
        </div>
        `;

        eventsContainer.appendChild(div);
    });
}

// LOCAL STORAGE (Dining Favorites)
function saveFavorite(place) {
    localStorage.setItem("favoriteDining", place);
    alert(place + " saved!");
}

// MAP INTERACTION
function selectLocation(location) {
    alert("Showing location: " + location);
}