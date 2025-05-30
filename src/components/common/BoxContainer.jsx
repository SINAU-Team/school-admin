import Box from "@mui/material/Box";
import PropTypes from "prop-types";

export default function BoxContainer({ children, sx = { width: '100%', maxWidth: { sm: '100%', md: '1700px' } } }) {
  return (
    <Box sx={{...sx, my: '20px'}}>
      {children}
    </Box>
  )
}

BoxContainer.propTypes = {
  children: PropTypes.element,
  sx: PropTypes.object
}