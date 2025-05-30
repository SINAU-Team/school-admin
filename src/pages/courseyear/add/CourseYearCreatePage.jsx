import BoxContainer from "../../../components/common/BoxContainer.jsx";
import PropTypes from "prop-types";
import BackWithTitle from "../../../components/common/BackWithTitle.jsx";
import TitleWithIcon from "../../../components/common/TitleWithIcon.jsx";
import {ModeEditOutlined} from "@mui/icons-material";
import BasicCard from "../../../components/common/BasicCard.jsx";
import Grid from "@mui/material/Grid2";
import CustomInput from "../../../components/form/FormInputTextField.jsx";
import {useCourseYearCreateHook} from "./useCourseYearCreateHook.js";
import {Button} from "@mui/material";

const CourseYearCreatePage = ({ isUpdatePage = false}) => {
  const {
    courseYear,
    statusOptions,
    status, setStatus,
    setCourseYearValue,
    submit, resetForm
  } = useCourseYearCreateHook({ isUpdatePage});
  return (
    <BoxContainer>
      <BackWithTitle title={isUpdatePage ? 'Edit Tahun Pelajaran' : 'Tambah Tahun Pelajaran'} />
      <TitleWithIcon icon={<ModeEditOutlined sx={{ color: 'white' }} />} text="Detail Tahun Pelajaran" iconBackground="red" />
      <BasicCard>
        <Grid container spacing={3} alignItems="center" columns={12}>
          <CustomInput label="Tahun Pelajaran" fullWidth={true} type="text"
                       value={courseYear}
                       max={9}
                       onChange={(c) => setCourseYearValue(c.target.value)} placeholder="2024/2025" />
          <CustomInput label="Status" fullWidth={true} options={statusOptions} value={status} onChange={(c) => setStatus(c.target.value)} />
        </Grid>

        <Grid container spacing={2} columns={12} justifyContent="end" alignItems="center" mb={2} mt={3}>
          <Grid size={{ lg: 1.5 }}>
            <Button fullWidth variant="outlined" color='secondary' onClick={resetForm}>Reset</Button>
          </Grid>

          <Grid size={{ lg: 1.5 }}>
            <Button fullWidth variant="contained" disabled={!courseYear || courseYear?.length < 9} color='cbtPrimary' onClick={submit}>Simpan</Button>
          </Grid>
        </Grid>
      </BasicCard>
    </BoxContainer>
  )
}

export default CourseYearCreatePage

CourseYearCreatePage.propTypes = {
  isUpdatePage: PropTypes.bool,
}