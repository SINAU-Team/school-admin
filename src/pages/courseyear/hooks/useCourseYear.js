import {useNavigate} from "react-router";
import {useSelector} from "react-redux";
import {useState} from "react";

export function useCourseYear() {
  const navigate = useNavigate();
  const authUser = useSelector((state) => state.authUser);
  const userRole = authUser?.role?.code.toLowerCase();
  const [searchBy, setSearchBy] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [isRefreshTable, setRefreshTable] = useState(false);

  const searchOptions = [
    {
      label: "Tahun Pelajaran",
      value: "courseYear",
    },
    {
      label: "Status",
      value: "status",
      options: [
        {
          label: "Aktif",
          value: true,
        },
        {
          label: "Tidak Aktif",
          value: false,
        }
      ]
    }
  ]
  const columns = [
    { field: "no", headerName: "NO", flex: 0.1, minWidth: 50 },
    { field: "courseYear", headerName: "TAHUN PELAJARAN", flex: 0.1, minWidth: 50 },
    { field: "status", headerName: "STATUS", flex: 0.1, minWidth: 50 },
  ]
  return {
    navigate,
    userRole,
    searchOptions,
    columns,
    searchBy, setSearchBy,
    searchValue, setSearchValue,
    isRefreshTable, setRefreshTable
  }
}