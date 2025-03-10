import { Stack, Typography } from "@mui/material";

export default function GoalContents({ activeItem, setActiveItem }) {
  const contents = [
    "Overview",
    "Important dates",
    "Application",
    "Syllabus",
    "Cutoff",
  ];

  return (
    <Stack marginTop="10px">
      {contents.map((item, index) => (
        <Stack
          key={item}
          direction="row"
          alignItems="center"
          padding="10px 20px"
          sx={{
            cursor: "pointer",
            backgroundColor:
              activeItem === item
                ? "var(--primary-color-acc-2)"
                : "transparent",
            borderLeft: {
              xs:
                activeItem === item
                  ? "4px solid var(--primary-color)"
                  : "4px solid var(--border-color)",
              md: "none",
            },
            borderBottom: {
              xs: "none",
              md:
                index !== contents.length - 1
                  ? "1px solid var(--border-color)"
                  : "none",
            },
          }}
          onClick={() => setActiveItem(item)}
        >
          <Typography
            fontSize="14px"
            fontFamily="Lato"
            color={
              activeItem === item ? "var(--primary-color)" : "var(--text3)"
            }
            fontWeight="700"
          >
            {item}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}
