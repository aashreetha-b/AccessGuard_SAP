/*import {
  Container,
  Paper,
  Typography,
  Divider,
  Grid,
  Card,
  CardContent,
  Box
} from "@mui/material";

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>

      <Paper elevation={4} sx={{ p: 5 }}>

        <Typography variant="h3" fontWeight="bold" gutterBottom>
          🛡 AccessGuard
        </Typography>

        <Typography
          variant="h6"
          color="primary"
          gutterBottom
        >
          Intelligent SAP Segregation of Duties (SoD) Risk Analysis Platform
        </Typography>

        <Typography color="text.secondary" paragraph>
          AccessGuard is an enterprise-grade SAP Security solution designed
          to identify Segregation of Duties (SoD) violations before they
          become security incidents. The platform automatically analyzes
          employee role assignments, detects conflicting SAP permissions,
          calculates an overall risk score, and provides actionable
          remediation recommendations for security administrators.
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h4" gutterBottom>
          Why AccessGuard?
        </Typography>

        <Typography paragraph>
          Large organizations often manage thousands of SAP users and
          hundreds of authorization roles. Manual review of user access is
          time-consuming, error-prone and expensive.
        </Typography>

        <Typography paragraph>
          Incorrect combinations of business roles can allow a single
          employee to both initiate and approve sensitive transactions,
          creating opportunities for fraud, financial loss and compliance
          violations.
        </Typography>

        <Box component="ul" sx={{ pl: 4 }}>
          <li>Create Vendor → Approve Payment</li>
          <li>Submit Expense → Approve Expense</li>
          <li>Create Purchase Order → Approve Purchase Order</li>
          <li>Create User → Assign Admin</li>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h4" gutterBottom>
          Key Features
        </Typography>

        <Grid container spacing={3} sx={{ mt: 1 }}>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography fontWeight="bold">
                  🔒 Conflict Detection
                </Typography>
                <Typography color="text.secondary">
                  Detects predefined SAP Segregation of Duties violations.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography fontWeight="bold">
                  📊 Risk Scoring
                </Typography>
                <Typography color="text.secondary">
                  Calculates an overall security risk score for every analysis.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography fontWeight="bold">
                  ⚠ Risk Classification
                </Typography>
                <Typography color="text.secondary">
                  Categorizes users into LOW, MEDIUM or HIGH risk.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography fontWeight="bold">
                  💡 Recommendations
                </Typography>
                <Typography color="text.secondary">
                  Suggests corrective actions for identified conflicts.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography fontWeight="bold">
                  ☁ Cloud Deployment
                </Typography>
                <Typography color="text.secondary">
                  Spring Boot + Docker deployed on Render Cloud.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography fontWeight="bold">
                  📄 Report History
                </Typography>
                <Typography color="text.secondary">
                  Stores recent analyses locally for demonstration.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h4" gutterBottom>
          System Architecture
        </Typography>

        <Paper
          variant="outlined"
          sx={{
            p: 3,
            bgcolor: "#fafafa",
            fontFamily: "monospace"
          }}
        >
{`React Dashboard
        │
        ▼
Spring Boot REST API
        │
        ▼
Risk Analysis Engine
        │
        ▼
SAP SoD Rules
        │
        ▼
Risk Report`}
        </Paper>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h4" gutterBottom>
          Technology Stack
        </Typography>

        <Box component="ul" sx={{ pl: 4 }}>
          <li>React + Material UI</li>
          <li>Spring Boot</li>
          <li>REST APIs</li>
          <li>Docker</li>
          <li>Render Cloud Deployment</li>
          <li>SAP Security Concepts</li>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h4" gutterBottom>
          Future Roadmap
        </Typography>

        <Box component="ul" sx={{ pl: 4 }}>
          <li>Live SAP Role Import</li>
          <li>PDF Report Generation</li>
          <li>User Authentication</li>
          <li>Enterprise Dashboard Analytics</li>
          <li>AI-powered Risk Prediction</li>
          <li>Real-time SAP Integration</li>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Typography color="text.secondary">
          AccessGuard demonstrates enterprise software engineering,
          SAP security concepts, cloud deployment, REST APIs and modern
          frontend development. Although developed as a portfolio project,
          its architecture closely resembles real Governance, Risk and
          Compliance (GRC) solutions used within SAP environments.
        </Typography>

      </Paper>

    </Container>
  );
}*/

// -------------------------------------------------------------------------------------

import {
  Container,
  Paper,
  Typography,
  Divider,
  Grid,
  Card,
  CardContent,
  Box,
  Chip,
  Stack
} from "@mui/material";

import LockIcon from "@mui/icons-material/Lock";
import AssessmentIcon from "@mui/icons-material/Assessment";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import HistoryIcon from "@mui/icons-material/History";
import SecurityIcon from "@mui/icons-material/Security";
import StorageIcon from "@mui/icons-material/Storage";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

export default function About() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#eef5ff 0%, #f7fbff 45%, #ffffff 100%)",
        py: 6,
      }}
    >
      <Container maxWidth="lg">

        <Paper
          elevation={0}
          sx={{
            p: 6,
            borderRadius: 5,
            border: "1px solid #dbeafe",
            boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
            overflow: "hidden",
          }}
        >

          {/* HERO */}

          <Box
            sx={{
              textAlign: "center",
              mb: 6,
              position: "relative",
            }}
          >

            <Box
              sx={{
                width: 90,
                height: 90,
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg,#1976d2,#42a5f5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 3,
                boxShadow:
                  "0 15px 40px rgba(25,118,210,.35)",
              }}
            >
              <SecurityIcon
                sx={{
                  color: "white",
                  fontSize: 48,
                }}
              />
            </Box>

            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                background:
                  "linear-gradient(90deg,#1565c0,#42a5f5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 2,
              }}
            >
              AccessGuard
            </Typography>

            <Typography
              variant="h5"
              fontWeight={600}
              color="primary"
              gutterBottom
            >
              Intelligent SAP Segregation of Duties (SoD) Risk Analysis Platform
            </Typography>

            <Typography
              sx={{
                mt: 3,
                color: "text.secondary",
                fontSize: "1.08rem",
                lineHeight: 1.9,
                maxWidth: 850,
                mx: "auto",
              }}
            >
              AccessGuard is an enterprise-grade SAP Security solution
              designed to identify Segregation of Duties (SoD) violations
              before they become security incidents. The platform
              automatically analyzes employee role assignments,
              detects conflicting SAP permissions, calculates an overall
              risk score, and provides actionable remediation
              recommendations for security administrators.
            </Typography>

          </Box>

          <Divider sx={{ mb: 5 }} />

          {/* WHY ACCESSGUARD */}

          <Box
            sx={{
              borderLeft: "6px solid #1976d2",
              pl: 3,
              mb: 4,
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
            >
              Why AccessGuard?
            </Typography>
          </Box>

          <Typography
            sx={{
              lineHeight: 1.9,
              fontSize: "1.05rem",
              color: "text.secondary",
            }}
            paragraph
          >
            Large organizations often manage thousands of SAP users and
            hundreds of authorization roles. Manual review of user access
            is time-consuming, error-prone, and expensive.
          </Typography>

          <Typography
            sx={{
              lineHeight: 1.9,
              fontSize: "1.05rem",
              color: "text.secondary",
            }}
            paragraph
          >
            Incorrect combinations of business roles can allow a single
            employee to both initiate and approve sensitive transactions,
            creating opportunities for fraud, financial loss, and
            compliance violations.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            useFlexGap
            flexWrap="wrap"
            sx={{ mt: 3 }}
          >
            <Chip
              color="error"
              label="Create Vendor → Approve Payment"
            />

            <Chip
              color="warning"
              label="Submit Expense → Approve Expense"
            />

            <Chip
              color="primary"
              label="Create Purchase Order → Approve Purchase Order"
            />

            <Chip
              color="secondary"
              label="Create User → Assign Admin"
            />
          </Stack>

          <Divider sx={{ my: 6 }} />

          {/* KEY FEATURES */}

          <Box
            sx={{
              borderLeft: "6px solid #1976d2",
              pl: 3,
              mb: 4,
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
            >
              Key Features
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* CARD 1 */}

<Grid item xs={12} md={4}>
  <Card
    sx={{
      height: "100%",
      borderRadius: 4,
      background: "linear-gradient(135deg,#E3F2FD,#ffffff)",
      border: "1px solid #BBDEFB",
      transition: "0.35s",
      "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: "0 20px 40px rgba(25,118,210,.25)",
      },
    }}
  >
    <CardContent sx={{ p: 4 }}>
      <LockIcon
        sx={{
          fontSize: 50,
          color: "#1976d2",
          mb: 2,
        }}
      />

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Conflict Detection
      </Typography>

      <Typography color="text.secondary">
        Detects predefined SAP Segregation of Duties violations and highlights
        conflicting authorization combinations before they become security
        risks.
      </Typography>
    </CardContent>
  </Card>
</Grid>

{/* CARD 2 */}

<Grid item xs={12} md={4}>
  <Card
    sx={{
      height: "100%",
      borderRadius: 4,
      background: "linear-gradient(135deg,#FFF8E1,#ffffff)",
      border: "1px solid #FFE082",
      transition: "0.35s",
      "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: "0 20px 40px rgba(255,152,0,.25)",
      },
    }}
  >
    <CardContent sx={{ p: 4 }}>
      <AssessmentIcon
        sx={{
          fontSize: 50,
          color: "#FB8C00",
          mb: 2,
        }}
      />

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Risk Scoring
      </Typography>

      <Typography color="text.secondary">
        Calculates an overall security risk score for every user based on
        detected conflicts, helping administrators prioritize remediation.
      </Typography>
    </CardContent>
  </Card>
</Grid>

{/* CARD 3 */}

<Grid item xs={12} md={4}>
  <Card
    sx={{
      height: "100%",
      borderRadius: 4,
      background: "linear-gradient(135deg,#F3E5F5,#ffffff)",
      border: "1px solid #CE93D8",
      transition: "0.35s",
      "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: "0 20px 40px rgba(156,39,176,.25)",
      },
    }}
  >
    <CardContent sx={{ p: 4 }}>
      <WarningAmberIcon
        sx={{
          fontSize: 50,
          color: "#8E24AA",
          mb: 2,
        }}
      />

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Risk Classification
      </Typography>

      <Typography color="text.secondary">
        Categorizes users into LOW, MEDIUM, or HIGH risk levels to simplify
        decision-making and compliance reporting.
      </Typography>
    </CardContent>
  </Card>
</Grid>

{/* CARD 4 */}

<Grid item xs={12} md={4}>
  <Card
    sx={{
      height: "100%",
      borderRadius: 4,
      background: "linear-gradient(135deg,#E8F5E9,#ffffff)",
      border: "1px solid #A5D6A7",
      transition: "0.35s",
      "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: "0 20px 40px rgba(46,125,50,.25)",
      },
    }}
  >
    <CardContent sx={{ p: 4 }}>
      <LightbulbIcon
        sx={{
          fontSize: 50,
          color: "#2E7D32",
          mb: 2,
        }}
      />

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Recommendations
      </Typography>

      <Typography color="text.secondary">
        Suggests corrective actions and best practices to eliminate detected
        SoD conflicts while maintaining business continuity.
      </Typography>
    </CardContent>
  </Card>
</Grid>

{/* CARD 5 */}

<Grid item xs={12} md={4}>
  <Card
    sx={{
      height: "100%",
      borderRadius: 4,
      background: "linear-gradient(135deg,#E1F5FE,#ffffff)",
      border: "1px solid #81D4FA",
      transition: "0.35s",
      "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: "0 20px 40px rgba(2,136,209,.25)",
      },
    }}
  >
    <CardContent sx={{ p: 4 }}>
      <CloudDoneIcon
        sx={{
          fontSize: 50,
          color: "#0288D1",
          mb: 2,
        }}
      />

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Cloud Deployment
      </Typography>

      <Typography color="text.secondary">
        Built using Spring Boot and Docker, then deployed on Render Cloud for
        scalable and reliable enterprise demonstrations.
      </Typography>
    </CardContent>
  </Card>
</Grid>

{/* CARD 6 */}

<Grid item xs={12} md={4}>
  <Card
    sx={{
      height: "100%",
      borderRadius: 4,
      background: "linear-gradient(135deg,#FFFDE7,#ffffff)",
      border: "1px solid #FFF59D",
      transition: "0.35s",
      "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: "0 20px 40px rgba(251,192,45,.25)",
      },
    }}
  >
    <CardContent sx={{ p: 4 }}>
      <HistoryIcon
        sx={{
          fontSize: 50,
          color: "#F9A825",
          mb: 2,
        }}
      />

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Report History
      </Typography>

      <Typography color="text.secondary">
        Stores recent analyses locally, enabling quick review of previously
        generated reports during demonstrations.
      </Typography>
    </CardContent>
  </Card>
</Grid>

            </Grid>

          <Divider sx={{ my: 6 }} />

{/* SYSTEM ARCHITECTURE */}

<Box
  sx={{
    borderLeft: "6px solid #1976d2",
    pl: 3,
    mb: 4,
  }}
>
  <Typography variant="h4" fontWeight="bold">
    System Architecture
  </Typography>
</Box>

<Paper
  elevation={0}
  sx={{
    p: 5,
    borderRadius: 4,
    background: "linear-gradient(135deg,#0f172a,#1e3a8a)",
    color: "white",
    mb: 6,
    boxShadow: "0 20px 50px rgba(0,0,0,.25)",
  }}
>
  <Grid container spacing={3} justifyContent="center">

    <Grid item xs={12}>
      <Box textAlign="center">
        <RocketLaunchIcon sx={{ fontSize: 42, mb: 1 }} />
        <Typography variant="h6" fontWeight="bold">
          React Dashboard
        </Typography>
      </Box>
    </Grid>

    <Grid item xs={12}>
      <Typography align="center" sx={{ fontSize: 30 }}>
        ↓
      </Typography>
    </Grid>

    <Grid item xs={12}>
      <Box textAlign="center">
        <StorageIcon sx={{ fontSize: 42, mb: 1 }} />
        <Typography variant="h6" fontWeight="bold">
          Spring Boot REST API
        </Typography>
      </Box>
    </Grid>

    <Grid item xs={12}>
      <Typography align="center" sx={{ fontSize: 30 }}>
        ↓
      </Typography>
    </Grid>

    <Grid item xs={12}>
      <Box textAlign="center">
        <AssessmentIcon sx={{ fontSize: 42, mb: 1 }} />
        <Typography variant="h6" fontWeight="bold">
          Risk Analysis Engine
        </Typography>
      </Box>
    </Grid>

    <Grid item xs={12}>
      <Typography align="center" sx={{ fontSize: 30 }}>
        ↓
      </Typography>
    </Grid>

    <Grid item xs={12}>
      <Box textAlign="center">
        <SecurityIcon sx={{ fontSize: 42, mb: 1 }} />
        <Typography variant="h6" fontWeight="bold">
          SAP SoD Rules
        </Typography>
      </Box>
    </Grid>

    <Grid item xs={12}>
      <Typography align="center" sx={{ fontSize: 30 }}>
        ↓
      </Typography>
    </Grid>

    <Grid item xs={12}>
      <Box textAlign="center">
        <LockIcon sx={{ fontSize: 42, mb: 1 }} />
        <Typography variant="h6" fontWeight="bold">
          Risk Report
        </Typography>
      </Box>
    </Grid>

  </Grid>
</Paper>

<Divider sx={{ my: 6 }} />

{/* TECHNOLOGY STACK */}

<Box
  sx={{
    borderLeft: "6px solid #1976d2",
    pl: 3,
    mb: 4,
  }}
>
  <Typography variant="h4" fontWeight="bold">
    Technology Stack
  </Typography>
</Box>

<Grid container spacing={2} sx={{ mb: 6 }}>

  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Chip label="React" color="primary" sx={{ width: "100%", py: 3 }} />
  </Grid>

  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Chip label="Material UI" color="secondary" sx={{ width: "100%", py: 3 }} />
  </Grid>

  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Chip label="Spring Boot" color="success" sx={{ width: "100%", py: 3 }} />
  </Grid>

  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Chip label="REST APIs" color="warning" sx={{ width: "100%", py: 3 }} />
  </Grid>

  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Chip label="Docker" color="info" sx={{ width: "100%", py: 3 }} />
  </Grid>

  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Chip label="Render Cloud" color="error" sx={{ width: "100%", py: 3 }} />
  </Grid>

  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Chip
      label="SAP Security Concepts"
      sx={{
        width: "100%",
        py: 3,
        bgcolor: "#ECEFF1",
      }}
    />
  </Grid>

</Grid>

<Divider sx={{ my: 6 }} />

{/* FUTURE ROADMAP */}

<Box
  sx={{
    borderLeft: "6px solid #1976d2",
    pl: 3,
    mb: 4,
  }}
>
  <Typography variant="h4" fontWeight="bold">
    Future Roadmap
  </Typography>
</Box>

<Grid container spacing={2} sx={{ mb: 6 }}>

  <Grid item xs={12} sm={6} md={4}>
    <Chip
      icon={<RocketLaunchIcon />}
      label="Live SAP Role Import"
      color="primary"
      sx={{ width: "100%", py: 3 }}
    />
  </Grid>

  <Grid item xs={12} sm={6} md={4}>
    <Chip
      icon={<AssessmentIcon />}
      label="PDF Report Generation"
      color="secondary"
      sx={{ width: "100%", py: 3 }}
    />
  </Grid>

  <Grid item xs={12} sm={6} md={4}>
    <Chip
      icon={<LockIcon />}
      label="User Authentication"
      color="success"
      sx={{ width: "100%", py: 3 }}
    />
  </Grid>

  <Grid item xs={12} sm={6} md={4}>
    <Chip
      icon={<AssessmentIcon />}
      label="Enterprise Dashboard Analytics"
      color="warning"
      sx={{ width: "100%", py: 3 }}
    />
  </Grid>

  <Grid item xs={12} sm={6} md={4}>
    <Chip
      icon={<LightbulbIcon />}
      label="AI-powered Risk Prediction"
      color="error"
      sx={{ width: "100%", py: 3 }}
    />
  </Grid>

  <Grid item xs={12} sm={6} md={4}>
    <Chip
      icon={<CloudDoneIcon />}
      label="Real-time SAP Integration"
      color="info"
      sx={{ width: "100%", py: 3 }}
    />
  </Grid>

</Grid>

<Divider sx={{ my: 6 }} />

{/* FOOTER PANEL */}

<Box
  sx={{
    borderRadius: 5,
    overflow: "hidden",
    background: "linear-gradient(135deg,#1565c0,#42a5f5)",
    color: "white",
    p: 5,
    boxShadow: "0 20px 45px rgba(25,118,210,.35)",
  }}
>

  <Typography
    variant="h4"
    fontWeight="bold"
    gutterBottom
  >
    Why this project matters
  </Typography>

  <Typography
    sx={{
      fontSize: "1.05rem",
      lineHeight: 1.9,
      opacity: .95,
      mb: 4,
    }}
  >
    AccessGuard demonstrates enterprise software engineering,
    SAP security concepts, cloud deployment,
    REST APIs, and modern frontend development.
    Although developed as a portfolio project,
    its architecture closely resembles real
    Governance, Risk and Compliance (GRC)
    solutions used within SAP environments.
  </Typography>

  <Grid container spacing={3}>

    <Grid item xs={12} md={3}>
      <Paper
        sx={{
          p: 3,
          borderRadius: 3,
          textAlign: "center",
          bgcolor: "rgba(255,255,255,.18)",
          color: "white",
          backdropFilter: "blur(10px)",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          React
        </Typography>

        <Typography>
          Frontend
        </Typography>
      </Paper>
    </Grid>

    <Grid item xs={12} md={3}>
      <Paper
        sx={{
          p: 3,
          borderRadius: 3,
          textAlign: "center",
          bgcolor: "rgba(255,255,255,.18)",
          color: "white",
          backdropFilter: "blur(10px)",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          SAP
        </Typography>

        <Typography>
          Security
        </Typography>
      </Paper>
    </Grid>

    <Grid item xs={12} md={3}>
      <Paper
        sx={{
          p: 3,
          borderRadius: 3,
          textAlign: "center",
          bgcolor: "rgba(255,255,255,.18)",
          color: "white",
          backdropFilter: "blur(10px)",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          REST
        </Typography>

        <Typography>
          APIs
        </Typography>
      </Paper>
    </Grid>

    <Grid item xs={12} md={3}>
      <Paper
        sx={{
          p: 3,
          borderRadius: 3,
          textAlign: "center",
          bgcolor: "rgba(255,255,255,.18)",
          color: "white",
          backdropFilter: "blur(10px)",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Cloud
        </Typography>

        <Typography>
          Deployment
        </Typography>
      </Paper>
    </Grid>

  </Grid>

</Box>

</Paper>

</Container>

</Box>

);
}
 
