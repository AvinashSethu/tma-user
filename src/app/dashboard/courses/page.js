import CustomTabs from "@/src/Components/CustomTabs/CustomTabs";
import Header from "@/src/Components/Header/Header";
import SearchBox from "@/src/Components/SearchBox/SearchBox";
import { Stack } from "@mui/material";
import Store from "./Components/Store";
import MyCourses from "./Components/MyCourses";

export default function Courses() {
  const tabData = [
    { label: "Store", content: <Store /> },
    {
      label: "My Courses",
      content: <MyCourses />,
    },
  ];
  return (
    <Stack padding="20px" gap="20px">
      <Header button={[<SearchBox key={"search"} />]} />
      <Stack flexDirection="row">
        <CustomTabs tabs={tabData} />
      </Stack>
    </Stack>
  );
}
