import React, { useState, useEffect } from 'react';
import MaterialReactTable from './MaterialReactTable';

const UserTable = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    const response = await fetch(`http://localhost:8082/api/getalluser?page=${page}`);
    const json = await response.json();
    setData(json.data);
    setTotalPages(json.totalPages);
  };

  const columns = [
    {
      accessorKey: 'id',
      header: 'ID',
    },
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'phone',
      header: 'Phone',
    },
  ];

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enablePagination
      onPageChange={handlePageChange}
      totalPages={totalPages}
    />
  );
};

export default UserTable;
