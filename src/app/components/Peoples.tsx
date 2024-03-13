"use client";

import { useEffect, useState } from "react";
import { Person } from "../types/Person";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { Loader } from "./Loader";
import HorizontalFlow from "./HorizontalFlow";

export const Peoples = () => {
  const [peoples, setPeoples] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  const itemOffset = (page - 1) * itemsPerPage;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = peoples.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(peoples.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newPage = event.selected + 1;

    setPage(newPage);
  };

  useEffect(() => {
    const fetchPeoples = async () => {
      try {
        const response = await axios.get(`https://sw-api.starnavi.io/people/`);
        setPeoples(response.data.results);
      } catch (error) {
        setErrorMessage("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchPeoples();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (errorMessage) {
    return <h1>{errorMessage}</h1>;
  }

  return (
    <>
      <HorizontalFlow />
      <ul className="flex-col space-y-2 divide-y divide-dashed">
        {currentItems.map((person) => {
          return (
            <li key={person.name} className="py-4 flex-col space-y-2">
              <h2>{`Character name: ${person.name}`}</h2>
              <p>{`gender: ${person.gender}`}</p>
            </li>
          );
        })}
      </ul>

      <ReactPaginate
        className="flex gap-x-4"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        forcePage={page - 1}
      />
    </>
  );
};
