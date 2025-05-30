import {useState} from "react";

export function useCourseYearCreateHook({isUpdatePage = false}) {
  const [courseYear, setCourseYear] = useState('')
  const [status, setStatus] = useState(true)
  const statusOptions = [
    {
      label: 'Aktif',
      value: true,
    },
    {
      label: 'Tidak Aktif',
      value: false,
    }
  ]

  const setCourseYearValue = (val) => {
    let value = val.replace(/[^0-9]/g, ''); // Hanya angka
    if (value.length > 4) {
      value = value.slice(0, 4) + '/' + value.slice(4, 8);
    }
    setCourseYear(value);
  }

  const submit = () => {

  }

  const resetForm = () => {

  }

  return {
    courseYear, setCourseYear,
    statusOptions,
    status, setStatus,
    setCourseYearValue,
    submit, resetForm
  }
}