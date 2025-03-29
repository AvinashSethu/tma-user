import CustomTabs from "@/src/Components/CustomTabs/CustomTabs";
import Header from "@/src/Components/Header/Header";
import SearchBox from "@/src/Components/SearchBox/SearchBox";
import { Stack, Typography } from "@mui/material";
import Store from "./Components/Store";
import MyCourses from "./Components/MyCourses";
import MobileHeader from "@/src/Components/MobileHeader/MobileHeader";

export default function Courses() {
  const tabData = [
    { label: "Store", content: <Store /> },
    {
      label: "My Courses",
      content: <MyCourses />,
    },
  ];
  return (
    <Stack>
      <MobileHeader />
      <Stack
        padding={{ xs: "5px", md: "20px" }}
        paddingBottom={"30px"}
        gap="20px"
      >
        <Stack sx={{ display: { xs: "none", md: "block" } }}>
          <Header button={[<SearchBox key={"search"} />]} />
        </Stack>
        <Stack flexDirection="row" sx={{ display: { xs: "none", md: "flex" } }}>
          <CustomTabs tabs={tabData} />
        </Stack>
      </Stack>
      <Stack
        sx={{
          display: { xs: "flex", md: "none" },
          padding: "10px",
          gap: "20px",
        }}
      >
        <SearchBox />
        <Stack gap="10px">
          <Typography
            sx={{ fontFamily: "Lato", fontSize: "16px", fontWeight: "700" }}
          >
            My Courses
          </Typography>
          <MyCourses />
        </Stack>
        <Stack gap="10px" sx={{ marginBottom: "60px" }}>
          <Typography
            sx={{ fontFamily: "Lato", fontSize: "16px", fontWeight: "700" }}
          >
            Browse Courses
          </Typography>
          <Store />
        </Stack>
      </Stack>
    </Stack>
  );
}
