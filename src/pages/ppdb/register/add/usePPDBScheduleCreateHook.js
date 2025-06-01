import {useState} from "react";

export function usePPDBScheduleCreateHook({ isUpdatePage }) {
  const [courseOfYear, setCourseOfYear] = useState([
    {
      label: '2024/2025',
      value: 1
    }
  ])

  const [registerFlow, setRegisterFlow] = useState([])

  const addRegisterStep = () => {
    const current = [...registerFlow, {
      title: '',
      startRegister: new Date(),
      endRegister: new Date(),
      startAnnouncement: new Date(),
      endAnnouncement: new Date(),
    }]

    setRegisterFlow(current)
  }
  return {
    courseOfYear,
    addRegisterStep,
    registerFlow
  }
}