import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Pagination = ({
  currentPage,
  setCurrentPage,
  stationsPerPage,
  total,
}) => {
  const [pageNumberLimit, setpageNumberLimit] = React.useState(3);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = React.useState(3);
  const [minPageNumberLimit, setMinPageNumberLimit] = React.useState(0);

  const pages = [];
  for (let i = 1; i <= Math.ceil(total / stationsPerPage); i++) {
    pages.push(i);
  }

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const handleClickNext = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      console.log(pageNumberLimit);
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handleClickPrev = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleClickNext}>...</li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handleClickPrev}>...</li>;
  }

  return (
    <div>
      <ul className="pagenumbers placement">
        <button
          onClick={handleClickPrev}
          disabled={currentPage === pages[0] ? true : false}
        >
          <FontAwesomeIcon className="btn-next-prev" icon={faAngleLeft} />
        </button>
        {pageDecrementBtn}
        {pages.map((number) =>
          number < maxPageNumberLimit + 1 && number > minPageNumberLimit ? (
            <li
              className={currentPage === number ? "active" : null}
              key={number}
              id={number}
              onClick={handleClick}
            >
              {number}
            </li>
          ) : null
        )}
        {pageIncrementBtn}
        <button
          onClick={handleClickNext}
          disabled={currentPage === pages[pages.length - 1] ? true : false}
        >
          <FontAwesomeIcon className="btn-next-prev" icon={faAngleRight} />
        </button>
      </ul>
    </div>
  );
};

export default Pagination;
