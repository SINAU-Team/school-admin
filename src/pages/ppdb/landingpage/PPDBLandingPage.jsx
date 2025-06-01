import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import BoxContainer from "../../../components/common/BoxContainer.jsx";
import BasicCard from "../../../components/common/BasicCard.jsx";
import {Accordion, AccordionDetails, AccordionSummary, Button, IconButton} from "@mui/material";
import {ExpandMore, Language, PlusOne} from "@mui/icons-material";
import {FileScan} from "lucide-react";
import Typography from "@mui/material/Typography";
import CustomInput from "../../../components/form/FormInputTextField.jsx";
import {usePPDBLandingPageHook} from "./hooks/usePPDBLandingPageHook.js";
import DeleteIcon from "@mui/icons-material/Delete";

const PPDBLandingPage = () => {
  const {
    registerFlow,
    addRegisterFlow
  } = usePPDBLandingPageHook()
  return (
    <BoxContainer>
      <Grid container spacing={2} sx={{ my: 4 }} columns={12}>
        <Grid size={{ xs: 6, md: 8 }}>
          <BasicCard>
            <Grid container spacing={2} columns={12} justifyContent="end" alignItems="center" mb={2} mt={1}>
              <Grid size={{ lg: 2 }}>
                <Button fullWidth variant="outlined" color='secondary' onClick={() => {}} startIcon={<FileScan />}>Simpan Draft</Button>
              </Grid>

              <Grid size={{ lg: 1.5 }}>
                <Button fullWidth variant="contained" color='cbtPrimary' onClick={() => {}} startIcon={<Language />}>Publish</Button>
              </Grid>
            </Grid>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="h5" fontWeight="bold">1. Header Area</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  <CustomInput label="Judul" oneLineInput fullWidth={true} />
                  <CustomInput label="Sub Judul" oneLineInput fullWidth={true} />
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel3-content"
                id="panel2-header"
              >
                <Typography variant="h5" fontWeight="bold">2. Video Promosi</Typography>
              </AccordionSummary>
              <AccordionDetails>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel3-content"
                id="panel2-header"
              >
                <Typography variant="h5" fontWeight="bold">3. Alur Pendaftaran</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <CustomInput label="Judul" oneLineInput fullWidth={true} />
                </Grid>

                {registerFlow?.map((a,i) => {
                  return (
                    <Grid key={i} container spacing={2} display="flex" flexDirection="columns" gap={1} sx={{mb: 2}}>
                      <Typography component="span" fontWeight="bold">{i + 1}. <DeleteIcon fontSize="small" sx={{ color: 'red'}} /></Typography>
                      <Grid container spacing={2}>
                        <CustomInput label="Judul" oneLineInput fullWidth={true} />
                        <CustomInput label="Keterangan" oneLineInput fullWidth={true} />
                      </Grid>
                    </Grid>
                  )
                })}

                <Button fullWidth variant="outlined" color='secondary' onClick={addRegisterFlow} startIcon={<PlusOne />}>Tambah Alur Pendaftaran</Button>
              </AccordionDetails>
            </Accordion>
          </BasicCard>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Box
            component="iframe"
            src="https://ppdb.almultazam.id/landing-page-sdit/"
            sx={{
              width: "100%",
              height: "80vh",
              border: "none",
              borderRadius: 2,
            }}
          />
        </Grid>
      </Grid>
    </BoxContainer>
  )
}

export default PPDBLandingPage