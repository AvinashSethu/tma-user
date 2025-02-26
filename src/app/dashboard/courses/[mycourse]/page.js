import Header from "@/src/Components/Header/Header";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import defaultThumbnail from "@/public/images/defaultThumbnail.svg";

export default function MyCourse() {
  return (
    <Stack padding="20px" gap="20px" >
      <Header />
      <Stack flexDirection="row" gap="20px">
      <Stack gap="15px" >
        <Typography
          sx={{ fontFamily: "Lato", fontSize: "20px", fontWeight: "700" }}
        >
          General Aptitude
        </Typography>
        <img
          src={defaultThumbnail.src}
          alt="thumbnail"
          width={800}
          style={{ borderRadius: "10px" }}
        />
        <Typography
          sx={{ fontFamily: "Lato", fontSize: "18px", fontWeight: "500" }}
        >
          About this course
        </Typography>
        <Typography
          sx={{
            width: "800px",
            fontFamily: "Lato",
            fontSize: "16px",
            color: "var(--text3)",
            lineHeight: "29px",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry`s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </Stack>
      <Stack>general Aptitude</Stack>
      </Stack>
    </Stack>
  );
}
