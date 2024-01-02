import React from "react";

async function requestGithubUser(githubLogin) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${githubLogin}`,
      {
        method: "GET",
      }
    );
    const userData = await response.json();
    console.log(userData);
  } catch (error) {
    console.error(error);
  }
}

// ------------ Metoda POST ------------


// fetch("/create/user", {
//   method: "POST",
//   body: JSON.stringify({ username, password, bio }),
// });


// ------------ Przekazywanie plików ------------


// const formData = new FormData();
// formData.append("username", "kuba-bujak");
// formData.append("fullname", "John Doe");
// formData.append("avatar", imgFile);

// fetch("/create/user", { method: "POST", body: formData });


// ------------ Autoryzacja żądania ------------


// fetch(`https://api.github.com/users/${login}`, {
//   method: "GET",
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });

export default function FetchLearning() {
  requestGithubUser("kuba-bujak");
  return <div>Data Manager</div>;
}
