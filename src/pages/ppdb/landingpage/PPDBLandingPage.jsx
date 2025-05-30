import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import BoxContainer from "../../../components/common/BoxContainer.jsx";
import BasicCard from "../../../components/common/BasicCard.jsx";
import {Button} from "@mui/material";
import {Language} from "@mui/icons-material";
import {FileScan} from "lucide-react";

const PPDBLandingPage = () => {
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
                <Button fullWidth variant="contained"color='cbtPrimary' onClick={() => {}} startIcon={<Language />}>Publish</Button>
              </Grid>
            </Grid>
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