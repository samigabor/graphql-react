import React from "react";
import Link from "./Link";

const LinkList = () => {
  const linksToRender = [
    {
      id: "mock-id-1",
      description: "mock description 1",
      url: "http://mock-url-1",
    },
    {
      id: "mock-id-2",
      description: "mock description 2",
      url: "http://mock-url-2",
    },
  ];

  return (
    <div>
      {linksToRender.map((link) => (
        <Link key={link.id} link={link} />
      ))}
    </div>
  );
};

export default LinkList;
