import {useState} from "react";

export function usePPDBLandingPageHook() {
  const [registerFlow, setRegisterFlow] = useState([
    {
      title: 'Judul',
      subTitle: 'Keterangan'
    }
  ])

  const addRegisterFlow = () => {
    const currentRegister = [...registerFlow, {
      title: '',
      subTitle: ''
    }]
    setRegisterFlow(currentRegister)
  }
  return {
    registerFlow,
    addRegisterFlow
  }
}