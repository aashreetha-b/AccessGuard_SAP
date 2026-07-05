import {
  Container,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Chip,
  Divider,
  LinearProgress,
  Box
} from "@mui/material";

export default function Reports() {

  let reports =
    JSON.parse(localStorage.getItem("reports")) || [];

  // Demo reports if no history exists
  if (reports.length === 0) {

    reports = [

      {
        employeeId: "EMP001",
        riskScore: 94,
        riskLevel: "HIGH",
        conflictCount: 3,
        status: "Reviewed",
        timestamp: "2026-07-06 09:15"
      },

      {
        employeeId: "EMP018",
        riskScore: 66,
        riskLevel: "MEDIUM",
        conflictCount: 2,
        status: "Pending",
        timestamp: "2026-07-06 11:30"
      },

      {
        employeeId: "EMP024",
        riskScore: 18,
        riskLevel: "LOW",
        conflictCount: 0,
        status: "Safe",
        timestamp: "2026-07-06 14:05"
      }

    ];

  }

  const high =
    reports.filter(r => r.riskLevel === "HIGH").length;

  const medium =
    reports.filter(r => r.riskLevel === "MEDIUM").length;

  const low =
    reports.filter(r => r.riskLevel === "LOW").length;

  const avgScore =
    Math.round(
      reports.reduce((a, b) => a + b.riskScore, 0) /
      reports.length
    );

  return (

    <Box
      sx={{
        background:
          "linear-gradient(180deg,#edf5ff 0%,#f7fbff 45%,#ffffff 100%)",
        minHeight: "100vh",
        py: 5,
      }}
    >

      <Container maxWidth="lg">

        {/* HEADER */}

        <Box
          sx={{
            textAlign: "center",
            mb: 5,
          }}
        >

          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              color: "#1565c0",
              mb: 1,
            }}
          >
            📊 Analysis Reports
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              fontSize: "1.05rem"
            }}
          >
            Overview of recent SAP Segregation of Duties analyses.
          </Typography>

        </Box>

        {/* SUMMARY CARDS */}

        <Grid container spacing={4} mb={5}>

          <Grid item xs={12} md={3}>

            <Card
              sx={{
                borderRadius: 4,
                background:
                  "linear-gradient(135deg,#E3F2FD,#ffffff)",
                boxShadow: "0 8px 25px rgba(0,0,0,.08)",
                transition: ".3s",

                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow:
                    "0 15px 35px rgba(25,118,210,.2)"
                }

              }}
            >

              <CardContent>

                <Typography color="text.secondary">

                  Total Analyses

                </Typography>

                <Typography
                  variant="h3"
                  fontWeight="bold"
                >

                  {reports.length}

                </Typography>

              </CardContent>

            </Card>

          </Grid>

          <Grid item xs={12} md={3}>

            <Card
              sx={{
                borderRadius: 4,
                background:
                  "linear-gradient(135deg,#FFEBEE,#ffffff)",
                boxShadow: "0 8px 25px rgba(0,0,0,.08)",
                transition: ".3s",

                "&:hover": {
                  transform: "translateY(-5px)"
                }

              }}
            >

              <CardContent>

                <Typography color="text.secondary">

                  High Risk Users

                </Typography>

                <Typography
                  variant="h3"
                  fontWeight="bold"
                  color="error.main"
                >

                  {high}

                </Typography>

              </CardContent>

            </Card>

          </Grid>

          <Grid item xs={12} md={3}>

            <Card
              sx={{
                borderRadius: 4,
                background:
                  "linear-gradient(135deg,#FFF8E1,#ffffff)",
                boxShadow: "0 8px 25px rgba(0,0,0,.08)",
                transition: ".3s",

                "&:hover": {
                  transform: "translateY(-5px)"
                }

              }}
            >

              <CardContent>

                <Typography color="text.secondary">

                  Average Risk Score

                </Typography>

                <Typography
                  variant="h3"
                  fontWeight="bold"
                >

                  {avgScore}

                </Typography>

              </CardContent>

            </Card>

          </Grid>

          <Grid item xs={12} md={3}>

            <Card
              sx={{
                borderRadius: 4,
                background:
                  "linear-gradient(135deg,#E8F5E9,#ffffff)",
                boxShadow: "0 8px 25px rgba(0,0,0,.08)",
                transition: ".3s",

                "&:hover": {
                  transform: "translateY(-5px)"
                }

              }}
            >

              <CardContent>

                <Typography color="text.secondary">

                  Most Common Conflict

                </Typography>

                <Typography
                  fontWeight="bold"
                  sx={{
                    mt: 1,
                    color: "#2e7d32"
                  }}
                >

                  Vendor + Payment

                </Typography>

              </CardContent>

            </Card>

          </Grid>

        </Grid>

        {/* RECENT ANALYSES TABLE */}

        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: 4,
            border: "1px solid #dbeafe",
            boxShadow:
              "0 12px 35px rgba(0,0,0,.08)"
          }}
        >

          

<Paper elevation={4} sx={{ p:4 }}>

<Typography
variant="h5"
fontWeight="bold"
mb={3}>

Recent Analyses

</Typography>
<TableContainer>

  <Table
    sx={{
      "& .MuiTableHead-root": {
        backgroundColor: "#e3f2fd",
      },
    }}
  >

    <TableHead>

      <TableRow>

        <TableCell><b>Employee</b></TableCell>

        <TableCell align="center">
          <b>Risk Score</b>
        </TableCell>

        <TableCell align="center">
          <b>Risk Level</b>
        </TableCell>

        <TableCell align="center">
          <b>Conflicts</b>
        </TableCell>

        <TableCell align="center">
          <b>Status</b>
        </TableCell>

        <TableCell align="center">
          <b>Timestamp</b>
        </TableCell>

      </TableRow>

    </TableHead>

    <TableBody>

      {reports.map((r, index) => (

        <TableRow
          key={index}
          hover
          sx={{
            "&:nth-of-type(even)": {
              backgroundColor: "#fafcff",
            },

            transition: ".25s",

            "&:hover": {
              backgroundColor: "#f1f8ff",
            },
          }}
        >

          <TableCell>

            <Typography fontWeight={600}>
              {r.employeeId}
            </Typography>

          </TableCell>

          <TableCell align="center">

            <Typography fontWeight="bold">

              {r.riskScore}

            </Typography>

          </TableCell>

          <TableCell align="center">

            <Chip
              label={r.riskLevel}
              color={
                r.riskLevel === "HIGH"
                  ? "error"
                  : r.riskLevel === "MEDIUM"
                  ? "warning"
                  : "success"
              }
              sx={{
                fontWeight: "bold",
                minWidth: 90,
              }}
            />

          </TableCell>

          <TableCell align="center">

            <Chip
              label={r.conflictCount ?? "-"}
              variant="outlined"
              color="primary"
              size="small"
            />

          </TableCell>

          <TableCell align="center">

            <Chip
              label={r.status ?? "Completed"}
              size="small"
              color={
                r.status === "Reviewed"
                  ? "success"
                  : r.status === "Pending"
                  ? "warning"
                  : "default"
              }
            />

          </TableCell>

          <TableCell align="center">

            <Typography
              variant="body2"
              color="text.secondary"
            >

              {r.timestamp}

            </Typography>

          </TableCell>

        </TableRow>

      ))}

    </TableBody>

  </Table>

</TableContainer>

</Paper>

<Divider
  sx={{
    my: 6,
    opacity: 0.6,
  }}
/>

</Paper>

<Grid container spacing={4}>

  {/* RISK DISTRIBUTION */}

  <Grid item xs={12} md={6}>

    <Card
      sx={{
        height: "100%",
        borderRadius: 4,
        boxShadow: "0 10px 30px rgba(0,0,0,.08)",
      }}
    >

      <CardContent sx={{ p: 4 }}>

        <Typography
          variant="h6"
          fontWeight="bold"
          mb={3}
        >
          📈 Risk Distribution
        </Typography>

        <Typography
          fontWeight={600}
          gutterBottom
        >
          High Risk
        </Typography>

        <LinearProgress
          variant="determinate"
          value={Math.min(high * 30, 100)}
          color="error"
          sx={{
            height: 10,
            borderRadius: 5,
            mb: 3,
          }}
        />

        <Typography
          fontWeight={600}
          gutterBottom
        >
          Medium Risk
        </Typography>

        <LinearProgress
          variant="determinate"
          value={Math.min(medium * 30, 100)}
          color="warning"
          sx={{
            height: 10,
            borderRadius: 5,
            mb: 3,
          }}
        />

        <Typography
          fontWeight={600}
          gutterBottom
        >
          Low Risk
        </Typography>

        <LinearProgress
          variant="determinate"
          value={Math.min(low * 30, 100)}
          color="success"
          sx={{
            height: 10,
            borderRadius: 5,
          }}
        />

      </CardContent>

    </Card>

  </Grid>

  {/* RECENT ACTIVITY */}

  <Grid item xs={12} md={6}>

    <Card
      sx={{
        height: "100%",
        borderRadius: 4,
        boxShadow: "0 10px 30px rgba(0,0,0,.08)",
      }}
    >

      <CardContent sx={{ p: 4 }}>

        <Typography
          variant="h6"
          fontWeight="bold"
          mb={3}
        >
          ⚡ Recent Activity
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
        >

          <Chip
            label="✔ EMP001 analyzed successfully"
            color="success"
          />

          <Chip
            label="✔ Risk report generated"
            color="primary"
          />

          <Chip
            label="✔ Recommendation engine executed"
            color="secondary"
          />

          <Chip
            label="✔ SAP role conflict detected"
            color="warning"
          />

          <Chip
            label="✔ Analysis stored locally"
            color="info"
          />

        </Box>

      </CardContent>

    </Card>

  </Grid>

</Grid>

</Container>

</Box>

  );

}