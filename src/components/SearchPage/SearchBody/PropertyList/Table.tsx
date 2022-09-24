import { useState, useMemo } from 'react';
import StayCardH from 'src/components/Cards/StayCardH/StayCardH';
import { sortRows, filterRows, paginateRows } from './helpers';
import { Pagination } from './Pagination';

export const Table = ({ columns, rows }) => {
  const [activePage, setActivePage] = useState(1);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState({ order: 'asc', orderBy: 'id' });
  const rowsPerPage = 10;

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
        <div >
          {calculatedRows.map((row) => {
            return (
              <div key={row.id} className='my-4'>
                {columns.map((column) => {
                  return <div key={column.accessor}>
                    {/* {row[column.accessor]} */}
                    <StayCardH data={row} />
                    </div>;
                })}
              </div>
            );
          })}
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
      <button onClick={() => handleSort('id')} className='border-2 rounded-full'>test sorting by id</button>
      <button onClick={() => handleSortAsc('propertyType')} className='border-2 rounded-full'>test sorting by propertyType ASC</button>
      <button onClick={() => handleSortDesc('propertyType')} className='border-2 rounded-full'>test sorting by propertyType DESC</button>
      <button onClick={() => handleSortDesc('date')} className='border-2 rounded-full'>test sorting by date DESC</button>
    </>
  );
};
