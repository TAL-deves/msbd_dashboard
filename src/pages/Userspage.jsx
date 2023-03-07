import React, { useEffect, useState } from "react";
import { userColumns } from "../data/columnData";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { fetchData } from "../api/handleApiWithAxios";
import MaterialReactTable from "material-react-table";

const Userspage = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(10);

  const handlePageChange = (newPage) => {
    setPage(page+1);
  };

  useEffect(() => {
    async function getData() {
      let userDatas = await fetchData(`getalluserssorted?page=${page}`);

      console.log("userDatas ---- ", userDatas);
      setPage(userDatas.currentPage);
      setData(userDatas.data);
      setTotalPages(userDatas.lastPage);
    }

    getData();
  }, [page]);

  return (
    <Box>
      <Box
        sx={{
          bgcolor: "warning.main",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          mb: "2rem",
          p:"1rem 0"
        }}
      >
        <Typography variant="h5" color="black.main">
          Total Users: {data.length}
        </Typography>
      </Box>
      <Box>
        {data ? (
          <MaterialReactTable
            columns={userColumns}
            data={data}
            enablePagination
            onPageChange={handlePageChange}
            totalPages={totalPages}
            initialState={{ density: 'compact' }}
          />
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
};

export default Userspage;
