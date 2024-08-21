/* eslint-disable jsx-a11y/accessible-emoji */
import {
  HiChevronDoubleRight,
  HiChevronDoubleLeft,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from 'react-icons/hi';

interface Props {
  activePage: number;
  count: number;
  rowsPerPage: number;
  totalPages: number;
  setActivePage: any;
}

export const Pagination = ({
  activePage,
  count,
  rowsPerPage,
  totalPages,
  setActivePage,
}: Props) => {
  const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1;
  const end = activePage === totalPages ? count : beginning + rowsPerPage - 1;

  const pagesButtons = () => {
    return (
      <div className="flex">
        {activePage <= totalPages && activePage >= 2 ? (
          <button
            className="block w-8 h-8 text-center border border-gray-100 rounded leading-8 hover:bg-gray-100"
            onClick={() => setActivePage(activePage - 1)}
          >
            <span className="">{activePage - 1}</span>
          </button>
        ) : (
          ''
        )}
        <button className="block w-8 h-8 text-center text-white bg-gray-800 border-gray-800 rounded leading-8">
          {activePage}
        </button>
        {activePage < totalPages ? (
          <button
            className="block w-8 h-8 text-center border border-gray-100 rounded leading-8 hover:bg-gray-100"
            disabled={activePage === totalPages}
            onClick={() => setActivePage(activePage + 1)}
          >
            <span className="">{activePage + 1}</span>
          </button>
        ) : (
          ''
        )}
      </div>
    );
  };

  return (
    <>
      <ol className="flex justify-center text-xs font-medium gap-2">
        <li>
          <button
            className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded
            hover:bg-gray-100"
            disabled={activePage === 1}
            onClick={() => setActivePage(1)}
          >
            <HiChevronDoubleLeft />
          </button>
        </li>
        <li>
          <button
            className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded
            hover:bg-gray-100"
            disabled={activePage === 1}
            onClick={() => setActivePage(activePage - 1)}
          >
            <HiOutlineChevronLeft />
          </button>
        </li>
        {pagesButtons()}
        <li>
          <button
            className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded
            hover:bg-gray-100"
            disabled={activePage === totalPages}
            onClick={() => setActivePage(activePage + 1)}
          >
            <HiOutlineChevronRight />
          </button>
        </li>
        <li>
          <button
            className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded
            hover:bg-gray-200"
            disabled={activePage === totalPages}
            onClick={() => setActivePage(totalPages)}
          >
            <HiChevronDoubleRight />
          </button>
        </li>

        {/* <button disabled={activePage === 1} onClick={() => setActivePage(1)}>
          ⏮️ First
        </button>
        <button
          disabled={activePage === 1}
          onClick={() => setActivePage(activePage - 1)}
        >
          ⬅️ Previous
        </button>
        <button
          disabled={activePage === totalPages}
          onClick={() => setActivePage(activePage + 1)}
        >
          Next ➡️
        </button>
        <button
          disabled={activePage === totalPages}
          onClick={() => setActivePage(totalPages)}
        >
          Last ⏭️
        </button> */}
      </ol>
      {/* <p className="text-center font-display text-base font-medium">
        Page {activePage} of {totalPages}
      </p> */}
    </>
  );
};
