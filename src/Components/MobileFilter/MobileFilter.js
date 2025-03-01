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

  const handleClearAll = () => {
    setFilters({ goals: "", exams: "", dateRange: "" });
  };

  return (
    <>
      <IconButton
        onClick={openDrawer}
        sx={{
          backgroundColor: "white",
          boxShadow: 2,
          borderRadius: "10px",
        }}
      >
        <FilterListIcon />
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
            marginBottom: "60px",
          },
        }}
      >
        <Stack gap={2}>
          <Typography variant="h6" fontWeight="bold">
            Filters
          </Typography>
          {[
            { label: "Sort by goals", key: "goals" },
            { label: "Sort by exams", key: "exams" },
            { label: "Select date range", key: "dateRange" },
          ].map(({ label, key }) => (
            <Select
              key={key}
              value={filters[key]}
              onChange={(e) => handleFilterChange(key, e.target.value)}
              displayEmpty
              fullWidth
              sx={{ backgroundColor: "white", borderRadius: "8px" }}
            >
              <MenuItem value="">{label}</MenuItem>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
            </Select>
          ))}
          <Stack flexDirection="row" justifyContent="space-between" mt={2}>
            <Button
              variant="outlined"
              onClick={handleClearAll}
              sx={{
                borderRadius: "4px",
                padding: "10px 20px",
                width: "160px",
                borderColor: "var(--primary-color)",
                color: "var(--primary-color)",
              }}
            >
              Clear all
            </Button>
            <Button
              variant="contained"
              onClick={closeDrawer}
              sx={{
                borderRadius: "4px",
                padding: "10px 20px",
                backgroundColor: "var(--primary-color)",
                width: "160px",
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
