import BoxContainer from "../../../../components/common/BoxContainer.jsx";
import BackWithTitle from "../../../../components/common/BackWithTitle.jsx";
import TitleWithIcon from "../../../../components/common/TitleWithIcon.jsx";
import {ModeEditOutlined} from "@mui/icons-material";
import BasicCard from "../../../../components/common/BasicCard.jsx";
import CustomInput from "../../../../components/form/FormInputTextField.jsx";
import Grid from "@mui/material/Grid2";
import {Button} from "@mui/material";
import {usePPDBScheduleCreateHook} from "./usePPDBScheduleCreateHook.js";

const PPDBScheduleCreatePage = ({ isUpdatePage = false }) => {
  const {
    courseOfYear,
    registerFlow,
    addRegisterStep
  } = usePPDBScheduleCreateHook({ isUpdatePage })
  return (
    <BoxContainer>
      <BackWithTitle title={isUpdatePage ? 'Edit Jadwal Pendaftaran' : 'Tambah Jadwal Pendaftaran'} />
      <TitleWithIcon icon={<ModeEditOutlined sx={{ color: 'white' }} />} text="Detail Jadwal Pendaftaran" iconBackground="red" />
      <BasicCard>
        <Grid container spacing={2} display="flex" flexDirection="row">
          <CustomInput label="Tahun Pelajaran" options={courseOfYear} fullWidth />
          <Grid container spacing={2} sx={{ display: 'flex', alignItems: "center", mt: 2}}>
            <Button variant="contained" color="cbtPrimary">Simpan Tahun Pelajaran</Button>
            <Button variant="outlined" color="secondary" onClick={addRegisterStep}>Tambah Tahapan</Button>
          </Grid>
        </Grid>
      </BasicCard>
      { registerFlow && registerFlow?.length > 0 && (
        <BasicCard>
          { registerFlow.map((a,i) => {
            return (
              <>
                <Grid container spacing={2}>
                  <CustomInput label="Nama Tahap Pendaftaran" oneLineInput fullWidth />
                </Grid>
                <Grid container spacing={2}>
                  <CustomInput label="Tanggal Pendaftaran Dimulai" type="date" fullWidth />
                  <CustomInput label="Tanggal Pendaftaran Berakhir" type="date" fullWidth />
                </Grid>
                <Grid container spacing={2}>
                  <CustomInput label="Pengumuman Dimulai" type="date" fullWidth />
                  <CustomInput label="Pengumuman Berakhir" type="date" fullWidth />
                </Grid>
                <Grid container spacing={2} columns={12} justifyContent="end" alignItems="center" mb={2} mt={3}>
                  <Grid size={{ lg: 2 }}>
                    <Button fullWidth variant="outlined" color='cbtAccents' >Hapus</Button>
                  </Grid>
                </Grid>
                {i < registerFlow.length - 1 && (<hr/>)}
              </>
            )
          })}
        </BasicCard>
      )}
    </BoxContainer>
  )
}

export default PPDBScheduleCreatePage;