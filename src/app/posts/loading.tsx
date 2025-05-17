import { Grid, Skeleton, TextField, InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

export default function Loading() {
  return (
    <>
      <TextField
        fullWidth
        placeholder="Пошук за заголовком"
        disabled
        sx={{ mb: 2 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Grid container spacing={2} alignContent="stretch">
        {Array.from({ length: 12 }).map((_, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Skeleton variant="rounded" height={220} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
