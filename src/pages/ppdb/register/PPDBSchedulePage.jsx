import BoxContainer from "../../../components/common/BoxContainer.jsx";
import Grid from "@mui/material/Grid2";
import {Link} from "react-router";
import {Button} from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import SearchBarWithFilter from "../../../components/common/SearchBarWithFilter.jsx";
import {usePPDBScheduleHook} from "./hooks/usePPDBScheduleHook.js";
import ApiTable from "../../../components/ApiTable.jsx";

const PPDBSchedulePage = () => {
  const {
    userRole,
    searchOptions,setSearchBy,
    setSearchValue, searchBy, searchValue, isRefreshTable,
    columns
  } = usePPDBScheduleHook()
  return (
    <BoxContainer>
      <Grid container spacing={2} columns={12} justifyContent="start" alignItems="center" mb={4}>
        <Grid sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Link to={`/${userRole}/ppdb/config/register-ppdb/create`}>
            <Button fullWidth variant="contained" color="info" startIcon={<AddBoxOutlinedIcon />}> Tambah</Button>
          </Link>
        </Grid>
        <Grid lg={4}>
          <SearchBarWithFilter
            searchOptions={searchOptions}
            onFilterChange={({ searchBy: searchByData, search: searchData, filters }) => {
              setSearchValue(searchData);
              setSearchBy(searchByData);
            }}
          />
        </Grid>
      </Grid>


      <Grid container spacing={1} columns={12} sx={{
        '--Grid-borderWidth': '1px',
        borderTop: 'var(--Grid-borderWidth) solid',
        borderLeft: 'var(--Grid-borderWidth) solid',
        borderColor: 'divider',
        '& > div': {
          borderRight: 'var(--Grid-borderWidth) solid',
          borderBottom: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
        }
      }}>
        <Grid size={{ xs: 12, lg: 12 }}>
          <ApiTable url="/academic/exam/all" pageSize={10} columns={columns} searchKey={searchBy} searchValue={searchValue} isRefresh={isRefreshTable} />
        </Grid>
      </Grid>
    </BoxContainer>
  )
}

export default PPDBSchedulePage