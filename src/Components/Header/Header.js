"use client";
import { Autocomplete, Stack, TextField } from "@mui/material";
import { ArrowBackIosRounded, ExpandMore } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function Header({ button = [], back }) {
  const movieOptions = [
    { label: "GATE CSE", id: 1 },
    { label: "Placemets", id: 2 },
  ];
  const router = useRouter();
  return (
    <Stack
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        border: "1px solid",
        borderColor: "var(--border-color)",
        backgroundColor: "var(--white)",
        padding: "0px 25px",
        borderRadius: {xs:"0px",md:"10px"},
        height: "60px",
      }}
    >
      <Stack flexDirection="row" alignItems="center" gap="15px">
        {back && (
          <ArrowBackIosRounded
            onClick={() => {
              router.back();
            }}
            sx={{
              fontSize: "20px",
              cursor: "pointer",
              fontWeight: "700",
            }}
          />
        )}
        <Autocomplete
          options={movieOptions}
          size="small"
          getOptionLabel={(option) => option.label}
          popupIcon={<ExpandMore sx={{ color: "var(--text2)" }} />}
          sx={{ width: "200px" }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Select Goal"
              sx={{
                "& .MuiInputBase-input::placeholder": {
                  color: "var(--text2)",
                  opacity: 1,
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "4px",
                  "& fieldset": {
                    borderColor: "var(--border-color)",
                  },
                  "&:hover fieldset": {
                    borderColor: "var(--sec-color)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "var(--sec-color)",
                  },
                },
              }}
            />
          )}
        />
      </Stack>
      <Stack flexDirection="row" gap="15px" alignItems="center">
        <Stack flexDirection="row" gap="10px" alignItems="center">
          {button.map((buttons, index) => (
            <Stack key={index}>{buttons}</Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
