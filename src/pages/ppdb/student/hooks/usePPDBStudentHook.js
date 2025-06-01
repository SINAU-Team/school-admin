import {useSelector} from "react-redux";
import {useState} from "react";

export function usePPDBStudentHook() {
  const authUser = useSelector((state) => state.authUser);
  const userRole = authUser?.role?.code.toLowerCase();
  const [searchBy, setSearchBy] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [isRefreshTable, setRefreshTable] = useState(false);

  const columns = [
    { field: "no", headerName: "NO", flex: 0.1, minWidth: 50 },
    { field: "courseYear", headerName: "TAHUN PELAJARAN", flex: 0.1, minWidth: 50 },
    { field: "totalRegister", headerName: "TOTAL MENDAFTAR", flex: 0.1, minWidth: 50 },
    { field: "waitingVerification", headerName: "MENUNGGU VERIFIKASI", flex: 0.1, minWidth: 50 },
    { field: "totalAccept", headerName: "TOTAL DITERIMA", flex: 0.1, minWidth: 50 },
    { field: "totalDecline", headerName: "TOTAL DITOLAK", flex: 0.1, minWidth: 50 },
    { field: "status", headerName: "STATUS", flex: 0.1, minWidth: 50 },
  ]

  const searchOptions = [
    {
      label: "Tahun Pelajaran",
      value: "courseOfYear",
      options: []
    }
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