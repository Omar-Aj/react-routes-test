import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// components
import Navbar from "../components/Navbar";
import PaginationLinks from "../components/PaginationLinks";

export default function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const { pageNum } = useParams();

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Navbar />
        <p>Data from API: page {pageNum}</p>
        {items.map((element) => {
          return (
            <div key={element.id}>
              <p>{element.id}</p>
              <p>{element.first_name}</p>
              <p>{element.last_name}</p>
              <p>{element.email}</p>
              <br />
            </div>
          );
        })}
        <PaginationLinks />
      </>
    );
  }
}
