import React from 'react';
import { Grid, Skeleton } from '@mui/material';
import { Box } from '@mui/system';

function ProductSkeleton() {
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(12)).map((x, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
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
