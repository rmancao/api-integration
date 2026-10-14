
const button = document.getElementById("loadBtn");
const userList = document.getElementById("userList");

button.addEventListener("click", getUsers);

async function getUsers() {
  userList.textContent = "Loading users...";

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error("Failed to retrieve users");
    }

    const users = await response.json();

    userList.innerHTML = "";

    users.forEach(function(user) {
      const card = document.createElement("div");
      card.className = "user-card";

      const name = document.createElement("h3");
      name.textContent = user.name;

      const email = document.createElement("p");
      email.textContent = user.email;

      const city = document.createElement("p");
      city.textContent = user.address.city;

      card.append(name, email, city);
      userList.appendChild(card);
    });

  } catch (error) {
    userList.textContent = "Error: " + error.message;
  }
}


async function createPost() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "My First API Post",
        body: "Learning API Integration",
        userId: 1
      })
    }
  );

  if (!response.ok) {
    throw new Error("POST request failed");
  }

  const result = await response.json();
  console.log(result);
}

createPost().catch(console.error);

