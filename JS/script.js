// ================= EVENTS API (Ticketmaster) =================

const eventsContainer = document.getElementById("eventsContainer");

if (eventsContainer) {

  const apiKey = "YOUR_API_KEY_HERE"; // replace this

  fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&city=Winston-Salem`)
    .then(response => response.json())
    .then(data => {

      const events = data._embedded?.events || [];

      events.slice(0, 6).forEach(event => {
        const div = document.createElement("div");
        div.className = "col-md-4";

        const image = event.images[0].url;

        div.innerHTML = `
          <div class="card p-3 mb-3">
            <img src="${image}" class="img-fluid mb-2">
            <h5>${event.name}</h5>
            <p>${event.dates.start.localDate}</p>
            <a href="${event.url}" target="_blank" class="btn btn-primary">View Event</a>
          </div>
        `;

        eventsContainer.appendChild(div);
      });

    })
    .catch(error => {
      console.log("Error loading events:", error);
    });
}

// LOCAL STORAGE (Dining Favorites)
function saveFavorite(place) {
    localStorage.setItem("favoriteDining", place);
    alert(place + " saved!");
}

// MAP INTERACTION
const mapElement = document.getElementById("map");

if (mapElement) {
    // Creat map centered on Winston-Salem
    const map = L.map('map').setView([36.0999, -80.2442], 13);

    // Add map tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Add markers (study spots)
  L.marker([36.0999, -80.2442]).addTo(map)
    .bindPopup("Main Library");

  L.marker([36.101, -80.25]).addTo(map)
    .bindPopup("Student Center");
}