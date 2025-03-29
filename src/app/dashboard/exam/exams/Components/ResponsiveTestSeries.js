"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import MobileHeader from "@/src/Components/MobileHeader/MobileHeader";
import mocks from "@/public/icons/mocks.svg";
import Image from "next/image";
import TestSeries from "./TestSeries";
import PracticeTest from "../../../home/Components/PracticeTest";
import MyClassroom from "../../../myClassroom/page";
import History from "../../history/page";
import ExamHistoryResponsive from "@/src/Components/ExamHistoryResponsive/ExamHistoryResponsive";

export default function ResponsiveTestSeries() {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Stack sx={{ display: { xs: "block", md: "none" } }}>
      <Stack>
        <Stack sx={{ marginBottom: "15px" }}>
          <MobileHeader />
        </Stack>
        <Stack sx={{ padding: "10px", gap: "10px" }}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{
              boxShadow: "none",
              border: "none",
              "&::before": { display: "none" },
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Stack
                sx={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "var(--sec-color-acc-1)",
                  borderRadius: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "15px",
                }}
              >
                <Image src={mocks.src} alt="" width={22} height={22} />
              </Stack>
              <Stack>
                <Typography
                  component="span"
                  sx={{
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  Masters test series
                </Typography>
                <Typography sx={{ fontFamily: "Lato", fontSize: "14px" }}>
                  Tap to see more
                </Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <TestSeries />
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{
              boxShadow: "none",
              border: "none",
              "&::before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Stack
                sx={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "var(--sec-color-acc-1)",
                  borderRadius: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "15px",
                }}
              >
                <Image src={mocks.src} alt="" width={22} height={22} />
              </Stack>
              <Stack>
                <Typography
                  component="span"
                  sx={{
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  Weekly tests
                </Typography>
                <Typography sx={{ fontFamily: "Lato", fontSize: "14px" }}>
                  Tap to see more
                </Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <TestSeries />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            sx={{
              boxShadow: "none",
              border: "none",
              "&::before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Stack
                sx={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "var(--sec-color-acc-1)",
                  borderRadius: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "15px",
                }}
              >
                <Image src={mocks.src} alt="" width={22} height={22} />
              </Stack>
              <Stack>
                <Typography
                  component="span"
                  sx={{
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  Practice test
                </Typography>
                <Typography sx={{ fontFamily: "Lato", fontSize: "14px" }}>
                  Tap to see more
                </Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <PracticeTest />
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Stack>
      <Stack
        sx={{
          backgroundColor: "var(--white)",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      >
        <MyClassroom />
      </Stack>
      <Stack>
        <ExamHistoryResponsive />
      </Stack>
    </Stack>
  );
}
