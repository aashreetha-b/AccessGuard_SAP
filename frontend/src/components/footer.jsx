import { Box, Divider, Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Divider />

      <Box
        sx={{
          mt: 6,
          py: 3,
          textAlign: "center",
          bgcolor: "#f5f5f5"
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © 2026 AccessGuard
        </Typography>

        <Typography variant="body2" color="text.secondary">
          AI-Assisted SAP Segregation of Duties Risk Analyzer developed by B.Aashreetha
        </Typography>

        <Typography
          variant="caption"
          display="block"
          mt={1}
          color="text.secondary"
        >
          React • Spring Boot • Material UI • Docker • Render
        </Typography>
      </Box>
    </>
  );
}