import React, { useReducer, useState } from "react";

export default function User() {
  const firstUser = {
    id: "362713461728",
    firsName: "John",
    lastName: "Doe",
    city: "Wroclaw",
    state: "Dolnyslask",
    email: "john.doe@gmail.com",
    admin: false,
  };

  const [user, setUser] = useReducer(
    (user, newDetails) => ({ ...user, ...newDetails }),
    firstUser
  );

  return (
    <div>
      <h1>
        {user.firsName} {user.lastName} - {user.admin ? "Admin" : "User"}
      </h1>
      <p>Adres e-mail: {user.email}</p>
      <p>
        Lokalizacja: {user.city}, {user.state}
      </p>
      <button
        onClick={() => {
          setUser({ admin: true });
        }}
      >
        Nadaj uprawnienia administratora
      </button>
    </div>
  );
}
