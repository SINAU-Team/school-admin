import BoxContainer from "../../../components/common/BoxContainer.jsx";
import Grid from "@mui/material/Grid2";
import SearchBarWithFilter from "../../../components/common/SearchBarWithFilter.jsx";
import ApiTable from "../../../components/ApiTable.jsx";
import {usePPDBStudentHook} from "./hooks/usePPDBStudentHook.js";

const PPDBStudentPage = () => {
  const {
    searchOptions,setSearchBy,
    setSearchValue, searchBy, searchValue, isRefreshTable,
    columns
  } = usePPDBStudentHook()
  return (
    <BoxContainer>
      <Grid container spacing={2} columns={12} justifyContent="start" alignItems="center" mb={4}>
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

export default PPDBStudentPage