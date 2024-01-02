import { faker } from "@faker-js/faker";
import React from "react";
import { FixedSizeList } from "react-window";

const bigList = [...Array(5000)].map(() => ({
  username: faker.internet.userName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
}));

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

export default function FakeListLearning() {
  const renderRow = ({ index, style }) => (
    <div style={{ ...style, ...{ display: "flex" } }}>
      <img
        src={bigList[index].avatar}
        alt={bigList[index].username}
        width={50}
      />
      <p>
        {bigList[index].username} - {bigList[index].email}
      </p>
    </div>
  );

  return (
    <FixedSizeList
      height={window.innerHeight}
      width={window.innerWidth - 20}
      itemCount={bigList.length}
      itemSize={50}
    >
      {renderRow}
    </FixedSizeList>
  );
}
