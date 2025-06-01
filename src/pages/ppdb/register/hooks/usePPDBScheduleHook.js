import {useSelector} from "react-redux";
import {useState} from "react";

export function usePPDBScheduleHook() {
  const authUser = useSelector((state) => state.authUser);
  const userRole = authUser?.role?.code.toLowerCase();
  const [searchBy, setSearchBy] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [isRefreshTable, setRefreshTable] = useState(false);

  const searchOptions = [
    {
      label: "Tahun Pelajaran",
      value: "courseOfYear",
      options: []
    }
  ]
  const columns = [
    { field: "no", headerName: "NO", flex: 0.1, minWidth: 50 },
    { field: "courseYear", headerName: "TAHUN PELAJARAN", flex: 0.1, minWidth: 50 },
    { field: "detail", headerName: "DETAIL", flex: 0.1, minWidth: 50 },
  ]
  return {
    userRole,
    searchOptions,
    columns,
    searchBy, setSearchBy,
    searchValue, setSearchValue,
    isRefreshTable, setRefreshTable
  }
}