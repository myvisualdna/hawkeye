import { useState, useMemo } from 'react';
import SearchResultCard from 'src/components/Cards/SearchResultCard';
import MobileSearchMenu from '../../SearchComponents/mobileSearchMenu';
import { sortRows, filterRows, paginateRows } from './helpers';
import { Pagination } from './Pagination';

export const Table = ({ columns, rows }) => {
  const [activePage, setActivePage] = useState(1);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState({ order: 'asc', orderBy: 'id' });
  const rowsPerPage = 12;

  const filteredRows = useMemo(
    () => filterRows(rows, filters),
    [rows, filters]
  );
  const sortedRows = useMemo(
    () => sortRows(filteredRows, sort),
    [filteredRows, sort]
  );
  const calculatedRows = paginateRows(sortedRows, activePage, rowsPerPage);

  const count = filteredRows.length;
  const totalPages = Math.ceil(count / rowsPerPage);

  const handleSearch = (value, accessor) => {
    setActivePage(1);

    if (value) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [accessor]: value,
      }));
    } else {
      setFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters };
        delete updatedFilters[accessor];

        return updatedFilters;
      });
    }
  };

  const handleSort = (accessor) => {
    console.log(accessor);
    setActivePage(1);
    setSort((prevSort) => ({
      order:
        prevSort.order === 'asc' && prevSort.orderBy === accessor
          ? 'desc'
          : 'asc',
      orderBy: accessor,
    }));
  };

  const handleSortAsc = (accessor) => {
    console.log(accessor);
    setActivePage(1);
    setSort((prevSort) => ({
      order: 'asc',
      orderBy: accessor,
    }));
  };

  const handleSortDesc = (accessor) => {
    console.log(accessor);
    setActivePage(1);
    setSort((prevSort) => ({
      order: 'desc',
      orderBy: accessor,
    }));
  };

  const clearAll = () => {
    setSort({ order: 'asc', orderBy: 'id' });
    setActivePage(1);
    setFilters({});
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 gap-x-4 ">
        {calculatedRows.map((row) => {
          return (
            <div key={row.id} className="">
              {columns.map((column) => {
                return (
                  <div key={column.accessor}>
                    <SearchResultCard data={row} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div
        onclick="buttonHandler()"
        title="Mobile Search Button"
        className="fixed lg:hidden z-90 bottom-10 right-8 bg-gray-900 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-gray-50 hover:text-black hover:drop-shadow-2xl active:animate-ping duration-300"
      >
        <MobileSearchMenu />
      </div>

      {count > 0 ? (
        <Pagination
          activePage={activePage}
          count={count}
          rowsPerPage={rowsPerPage}
          totalPages={totalPages}
          setActivePage={setActivePage}
        />
      ) : (
        <p>No data found</p>
      )}

      <div>
        <p>
          <button onClick={clearAll}>Clear all</button>
        </p>
      </div>
      <button
        onClick={() => handleSort('id')}
        className="border-2 rounded-full"
      >
        test sorting by id
      </button>
      <button
        onClick={() => handleSortAsc('propertyType')}
        className="border-2 rounded-full"
      >
        test sorting by propertyType ASC
      </button>
      <button
        onClick={() => handleSortDesc('propertyType')}
        className="border-2 rounded-full"
      >
        test sorting by propertyType DESC
      </button>
      <button
        onClick={() => handleSortDesc('date')}
        className="border-2 rounded-full"
      >
        test sorting by date DESC
      </button>
    </>
  );
};
