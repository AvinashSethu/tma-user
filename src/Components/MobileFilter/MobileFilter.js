"use client";
import { useState } from "react";
import {
  Drawer,
  IconButton,
  Stack,
  Button,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

export default function MobileFilter() {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState({
    goals: "",
    exams: "",
    dateRange: "",
  });

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const handleClearAll = () =>
    setFilters({ goals: "", exams: "", dateRange: "" });
  const handleFilterChange = (key, value) =>
    setFilters((prev) => ({ ...prev, [key]: value }));

  const filterOptions = [
    { label: "Sort by goals", key: "goals" },
    { label: "Sort by exams", key: "exams" },
    { label: "Select date range", key: "dateRange" },
  ];

  return (
    <>
      <IconButton
        onClick={openDrawer}
        sx={{
          backgroundColor: "white",
          boxShadow: 2,
          borderRadius: "10px",
          width: { xs: "36px", sm: "40px" },
          height: { xs: "36px", sm: "40px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FilterListIcon fontSize="small" />
      </IconButton>

      <Drawer
        anchor="bottom"
        open={open}
        onClose={closeDrawer}
        PaperProps={{
          sx: {
            borderRadius: "15px 15px 0 0",
            padding: "20px",
            backgroundColor: "var(--white)",
            maxWidth: "500px",
            margin: "auto",
            width: "100%",
          },
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight="bold" textAlign="center">
            Filters
          </Typography>

          {filterOptions.map(({ label, key }) => (
            <Select
              key={key}
              value={filters[key]}
              onChange={(e) => handleFilterChange(key, e.target.value)}
              displayEmpty
              fullWidth
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                fontSize: { xs: "14px", sm: "16px" },
                padding: { xs: "8px", sm: "10px" },
              }}
            >
              <MenuItem value="">{label}</MenuItem>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
            </Select>
          ))}

          <Stack flexDirection="row" gap={2} justifyContent="center" mt={2}>
            <Button
              variant="outlined"
              onClick={handleClearAll}
              sx={{
                borderRadius: "8px",
                padding: { xs: "8px 16px", sm: "10px 20px" },
                flexGrow: 1,
                borderColor: "var(--primary-color)",
                color: "var(--primary-color)",
                fontSize: { xs: "12px", sm: "14px" },
              }}
            >
              Clear all
            </Button>
            <Button
              variant="contained"
              onClick={closeDrawer}
              sx={{
                borderRadius: "8px",
                padding: { xs: "8px 16px", sm: "10px 20px" },
                flexGrow: 1,
                backgroundColor: "var(--primary-color)",
                fontSize: { xs: "12px", sm: "14px" },
              }}
              disableElevation
            >
              Apply
            </Button>
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
}
