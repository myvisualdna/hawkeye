/* eslint-disable jsx-a11y/accessible-emoji */

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


  return (
    <>
      <div className="pagination">
        <button disabled={activePage === 1} onClick={() => setActivePage(1)}>
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
        </button>
      </div>
      <p>
        Page {activePage} of {totalPages}
      </p>
      {/* <p>
        Rows: {beginning === end ? end : `${beginning} - ${end}`} of {count}
      </p> */}

      <div className="flex">
        {activePage <= totalPages && activePage >= 2 ? (
          <button
            className="inline-block p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring"
            onClick={() => setActivePage(activePage - 1)}
          >
            <span className="block px-8 py-3 text-sm font-medium bg-white rounded-full hover:bg-transparent">
              {activePage - 1}
            </span>
          </button>
        ) : (
          ''
        )}
        <button className="inline-block p-3 w-12 text-white bg-indigo-600 border border-indigo-600 rounded-full hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring">
          {activePage}
        </button>
        {activePage < totalPages ? (
          <button
            className="inline-block p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring"
            disabled={activePage === totalPages}
            onClick={() => setActivePage(activePage + 1)}
          >
            <span className="block px-8 py-3 text-sm font-medium bg-white rounded-full hover:bg-transparent">
              {activePage + 1}
            </span>
          </button>
        ) : (
          ''
        )}
      </div>
    </>
  );
};
