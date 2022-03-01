import React from "react";
import Link from "./Link";
import { useQuery, gql } from "@apollo/client";

const LinkList = () => {
  const FEED_QUERY = gql`
    {
      feed {
        links {
          id
          url
          description
        }
      }
    }
  `;

  const { data } = useQuery(FEED_QUERY);

  return (
    <div>
      {data &&
        data.feed.links.map((link) => <Link key={link.id} link={link} />)}
    </div>
  );
};

export default LinkList;
