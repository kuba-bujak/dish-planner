import React from "react";

const tahoe_peaks = [
  { name: "Freel Peak", elevation: 10891 },
  { name: "Monument Peak", elevation: 10067 },
  { name: "Pyramid Peak", elevation: 9983 },
  { name: "Mt. Tallac", elevation: 9735 },
];

function List({ data = [], renderItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

export default function ArrayDisplayer() {
  return (
    <>
      <ul>
        {tahoe_peaks.map((peak, i) => (
          <li key={i}>
            {peak.name} - {peak.elevation.toLocaleString()}ft
          </li>
        ))}
      </ul>
      <List
        data={tahoe_peaks}
        renderEmpty={<p>Lista jest pusta.</p>}
        renderItem={(item) => (
          <>
            {item.name} - {item.elevation.toLocaleString()}ft
          </>
        )}
      />
    </>
  );
}
