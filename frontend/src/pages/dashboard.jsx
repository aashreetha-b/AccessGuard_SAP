import { useState } from "react";
import axios from "axios";

import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Alert,
  Divider,
  Chip,
  CircularProgress,
  Box,
  Card,
  CardContent,
  Stack
} from "@mui/material";

const rolesList = [
  "Create Vendor",
  "Approve Payment",
  "Create User",
  "Assign Admin",
  "Submit Expense",
  "Approve Expense",
  "Create Purchase Order",
  "Approve Purchase Order"
];

export default function Dashboard() {

  const [userId, setUserId] = useState("");
  const [roles, setRoles] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const analyzeRisk = async () => {

    setResult(null);
    setErrorMessage("");

    if (!userId.trim()) {
      setErrorMessage("Please enter Employee ID.");
      return;
    }

    if (roles.length === 0) {
      setErrorMessage("Please select at least one role.");
      return;
    }

    try {

      setLoading(true);

      const response = await axios.post(
    "https://accessguard-sap-1.onrender.com/api/v1/analyze",
    {
        userId,
        roles
    }
);

      setResult(response.data);

      const reports =
        JSON.parse(localStorage.getItem("reports")) || [];

      reports.unshift({
        employeeId: response.data.employeeId,
        riskScore: response.data.riskScore,
        riskLevel: response.data.riskLevel,
        timestamp: response.data.timestamp
      });

      localStorage.setItem(
        "reports",
        JSON.stringify(reports.slice(0, 10))
      );

    } catch (err) {

      setErrorMessage("Backend is not responding.");

    } finally {

      setLoading(false);

    }

  };

  return (

    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>

      <Paper elevation={4} sx={{ p: 5 }}>

        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
        >
          SAP Segregation of Duties Risk Analyzer
        </Typography>

        <Typography
          color="text.secondary"
          mb={4}
        >
          Analyze SAP role assignments and identify Segregation of Duties conflicts.
        </Typography>

        <TextField
          fullWidth
          label="Employee ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          sx={{ mb: 3 }}
        />

        <FormControl fullWidth sx={{ mb: 3 }}>

          <InputLabel>
            Assigned Roles
          </InputLabel>

          <Select
            multiple
            value={roles}
            input={<OutlinedInput label="Assigned Roles" />}
            onChange={(e) => setRoles(e.target.value)}
          >

            {rolesList.map((role) => (

              <MenuItem
                key={role}
                value={role}
              >
                {role}
              </MenuItem>

            ))}

          </Select>

        </FormControl>

        <Button
          fullWidth
          variant="contained"
          size="large"
          onClick={analyzeRisk}
          disabled={loading}
          sx={{ height: 55 }}
        >

          {loading ? (

            <Box
              display="flex"
              alignItems="center"
              gap={2}
            >

              <CircularProgress
                size={22}
                color="inherit"
              />

              Analyzing...

            </Box>

          ) : (

            "Analyze Risk"

          )}

        </Button>

        {errorMessage && (

          <Alert
            severity="error"
            sx={{ mt: 3 }}
          >
            {errorMessage}
          </Alert>

        )}

        {result && (

          <>

            <Divider sx={{ my: 5 }} />

            <Typography
              variant="h5"
              gutterBottom
            >
              Analysis Result
            </Typography>

            <Stack
              spacing={2}
              sx={{ mb: 3 }}
            >

              <Card>

                <CardContent>

                  <Typography color="text.secondary">
                    Employee
                  </Typography>

                  <Typography variant="h6">
                    {result.employeeId}
                  </Typography>

                </CardContent>

              </Card>

              <Card>

                <CardContent>

                  <Typography color="text.secondary">
                    Risk Score
                  </Typography>

                  <Typography variant="h4">
                    {result.riskScore}
                  </Typography>

                </CardContent>

              </Card>

              <Card>

                <CardContent>

                  <Typography color="text.secondary">
                    Risk Level
                  </Typography>

                  <Box mt={1}>

                    <Chip
                      label={result.riskLevel}
                      color={
                        result.riskLevel === "HIGH"
                          ? "error"
                          : result.riskLevel === "MEDIUM"
                          ? "warning"
                          : "success"
                      }
                    />

                  </Box>

                </CardContent>

              </Card>

            </Stack>

            <Typography
              variant="h6"
              gutterBottom
            >
              Conflicts
            </Typography>

            <ul>

              {result.conflicts?.map((conflict, index) => (

                <li key={index}>
                  {conflict}
                </li>

              ))}

            </ul>

            <Divider sx={{ my: 3 }} />

            <Typography
              variant="h6"
              gutterBottom
            >
              Recommendation
            </Typography>

            <Typography>
              {result.recommendation}
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography color="text.secondary">
              Analysis ID: {result.analysisId}
            </Typography>

            <Typography color="text.secondary">
              Generated: {result.timestamp}
            </Typography>

          </>

        )}

      </Paper>

    </Container>

  );

}