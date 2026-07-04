import { useState } from "react";
import axios from "axios";

import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Divider,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Alert
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

function App() {
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
        "https://accessguard-sap.onrender.com/api/v1/analyze",
        {
          userId: userId,
          roles: roles
        }
      );

      setResult(response.data);

    } catch (error) {

      console.log("========== AXIOS ERROR ==========");
      console.log(error);

      if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Response:", error.response.data);

        setErrorMessage(
          `Backend Error (${error.response.status}): ${JSON.stringify(
            error.response.data
          )}`
        );
      } else if (error.request) {
        console.log("No response received.");
        setErrorMessage("Backend is not responding.");
      } else {
        console.log(error.message);
        setErrorMessage(error.message);
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <Paper elevation={5} sx={{ p: 4 }}>

        <Typography variant="h4" fontWeight="bold">
          🛡 AccessGuard
        </Typography>

        <Typography color="text.secondary" mb={4}>
          SAP Role Risk Analysis Dashboard
        </Typography>

        <TextField
          fullWidth
          label="Employee ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          sx={{ mb: 3 }}
        />

        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Assigned Roles</InputLabel>

          <Select
            multiple
            value={roles}
            input={<OutlinedInput label="Assigned Roles" />}
            onChange={(e) => setRoles(e.target.value)}
          >
            {rolesList.map((role) => (
              <MenuItem key={role} value={role}>
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
        >
          {loading ? "Analyzing..." : "Analyze Risk"}
        </Button>

        {errorMessage && (
          <Alert severity="error" sx={{ mt: 3 }}>
            {errorMessage}
          </Alert>
        )}

        {result && (
          <>
            <Divider sx={{ my: 4 }} />

            <Typography variant="h5" gutterBottom>
              Analysis Result
            </Typography>

            <Typography>
              <strong>Analysis ID:</strong> {result.analysisId}
            </Typography>

            <Typography>
              <strong>Employee:</strong> {result.employeeId}
            </Typography>

            <Typography>
              <strong>Risk Score:</strong> {result.riskScore}
            </Typography>

            <Box mt={2}>
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

            <Typography mt={3} fontWeight="bold">
              Conflicts
            </Typography>

            <ul>
              {result.conflicts?.map((conflict, index) => (
                <li key={index}>{conflict}</li>
              ))}
            </ul>

            <Typography fontWeight="bold">
              Recommendation
            </Typography>

            <Typography>{result.recommendation}</Typography>

            <Typography mt={3}>
              <strong>Timestamp:</strong> {result.timestamp}
            </Typography>
          </>
        )}

      </Paper>
    </Container>
  );
}

export default App;