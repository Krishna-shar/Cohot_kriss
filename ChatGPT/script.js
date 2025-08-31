const userDetails = document.querySelector("#userDetails");

function showUser(userKey) {
  const data = users[userKey];
  userDetails.innerHTML = `
    <h2>${data.name}</h2>
    <p><strong>Age:</strong> ${data.age}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>City:</strong> ${data.city}</p>
    <p><strong>Profession:</strong> ${data.profession}</p>
  `;
}

document.getElementById("btn1").addEventListener("click", () => showUser("user1"));
document.getElementById("btn2").addEventListener("click", () => showUser("user2"));
document.getElementById("btn3").addEventListener("click", () => showUser("user3"));
document.getElementById("btn4").addEventListener("click", () => showUser("user4"));
