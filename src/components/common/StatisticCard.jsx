import { Card, CardContent, Typography, Box } from '@mui/material';

export default function StatisticCard({
  title,
  value,
  subText = null,
  icon
                                      }) {
  return (
    <Card sx={{ minWidth: 275, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h5" component="div">
              {value}
            </Typography>
            {subText}
            {/*<Typography variant="body2" color="green">*/}
            {/*  +18% from last month*/}
            {/*</Typography>*/}
          </Box>
          {icon}
          {/*<TrendingUpIcon sx={{ fontSize: 40, color: 'green' }} />*/}
        </Box>
      </CardContent>
    </Card>
  );
}
