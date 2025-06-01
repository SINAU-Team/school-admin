import BoxContainer from "../../../components/common/BoxContainer.jsx";
import BackWithTitle from "../../../components/common/BackWithTitle.jsx";
import Grid from "@mui/material/Grid2";
import StatisticCard from "../../../components/common/StatisticCard.jsx";
import {CheckOutlined, GroupOutlined, PendingOutlined} from "@mui/icons-material";
import {Cross} from "lucide-react";
import {useState} from "react";
import { Tabs, Tab, Box, Chip, Stack } from '@mui/material';
import Typography from "@mui/material/Typography";
import ApiTable from "../../../components/ApiTable.jsx";

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index} style={{ padding: 16 }}>
      {value === index && <Typography>{children}</Typography>}
    </div>
  );
}

const PPDBStudentDetailPage = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const columns = [
    { field: "no", headerName: "NO", flex: 0.1, minWidth: 50 },
    { field: "photo", headerName: "PHOTO", flex: 0.1, minWidth: 50 },
    { field: "nisn", headerName: "NISN", flex: 0.1, minWidth: 50 },
    { field: "name", headerName: "NAMA SISWA", flex: 0.1, minWidth: 50 },
    { field: "gender", headerName: "JENIS KELAMIN", flex: 0.1, minWidth: 50 },
    { field: "school", headerName: "ASAL SEKOLAH", flex: 0.1, minWidth: 50 },
    { field: "status", headerName: "STATUS", flex: 0.1, minWidth: 50 },
  ]
  return (
    <BoxContainer>
      <BackWithTitle title={'Detail Calon Siswa'} />

      <Grid container spacing={2} display="flex" flexDirection="columns" columns={12}>
        <StatisticCard
          title="Total Terdaftar"
          value="50.000"
          icon={<GroupOutlined sx={{ fontSize: 40, color: 'secondary' }} />}
        />
        <StatisticCard
          title="Waiting Verifikasi"
          value="2.000"
          icon={<PendingOutlined sx={{ fontSize: 40, color: 'red' }} />}
        />
        <StatisticCard
          title="Total Diterima"
          value="1.000"
          icon={<CheckOutlined sx={{ fontSize: 40, color: 'green' }} />}
        />
        <StatisticCard
          title="Total Ditolak"
          value="1.000"
          icon={<Cross sx={{ fontSize: 40, color: 'red' }} />}
        />
      </Grid>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 3 }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab
            label={
              <Stack direction="row" spacing={1} alignItems="center">
                <span>Siswa Mendaftar</span>
                <Chip label="5.000" size="small" variant="outlined" color="primary" />
              </Stack>
            }
          />
          <Tab
            label={
              <Stack direction="row" spacing={1} alignItems="center">
                <span>Menunggu Verifikasi</span>
                <Chip label="12" size="small" color="primary" />
              </Stack>
            }
          />
          <Tab
            label={
              <Stack direction="row" spacing={1} alignItems="center">
                <span>Diterima</span>
                <Chip label="4" size="small" color="success" />
              </Stack>
            }
          />
          <Tab
            label={
              <Stack direction="row" spacing={1} alignItems="center">
                <span>Cadangan</span>
                <Chip label="20" size="small" color="secondary" />
              </Stack>
            }
          />
          <Tab
            label={
              <Stack direction="row" spacing={1} alignItems="center">
                <span>Ditolak</span>
                <Chip label="20" size="small" sx={{background: 'red', color: '#FFF'}} />
              </Stack>
            }
          />
        </Tabs>
        <TabPanel value={value} index={0}>
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
              <ApiTable url="/academic/exam/all" pageSize={10} columns={columns} />
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
    </BoxContainer>
  )
}

export default PPDBStudentDetailPage