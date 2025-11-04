document.getElementById("loadBtn").addEventListener("click", getUser);
document.getElementById("clearBtn").addEventListener("click", () => {
    document.getElementById("users").innerHTML = "";
});

function getUser() {
    fetch("https://randomuser.me/api")
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];

            const picture = user.picture.large;
            const cell = user.cell;
            const country = user.location.country;
            const postcode = user.location.postcode;
            const coordinates = user.location.coordinates.latitude + ", " + user.location.coordinates.longitude;

            const card = `
                <div class="user-card">
                    <img src="${picture}" alt="User photo">
                    <p><strong>Phone:</strong> ${cell}</p>
                    <p><strong>Country:</strong> ${country}</p>
                    <p><strong>Postcode:</strong> ${postcode}</p>
                    <p><strong>Coordinates:</strong> ${coordinates}</p>
                </div>
            `;

            document.getElementById("users").innerHTML += card;
        })
        .catch(error => console.log("Error:", error));
}
