import { Grid, Skeleton, Box } from '@mui/material';
import { v4 as uuid } from 'uuid';

function ProductSkeleton() {
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(12)).map((x, index) => (
          <Grid item key={uuid()} xs={12} sm={6} md={4} lg={3}>
            <Box padding={1}>
              <Skeleton variant="rectangular" width="100%" height={320} />
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductSkeleton;
