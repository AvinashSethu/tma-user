import GoalHead from "@/src/Components/GoalHead/GoalHead";
import { Stack, Typography } from "@mui/material";

export default function GoalID() {
  return (
    <Stack
      padding="20px"
      gap="20px"
      sx={{ minHeight: "100vh", marginBottom: "40px" }}
    >
      <GoalHead title="GATE CSE" />
      <Stack flexDirection="row" gap="15px">
        <Stack gap="15px">
          <Typography
            sx={{ fontFamily: "Lato", fontSize: "20px", fontWeight: "700" }}
          >
            Overview
          </Typography>

          <Stack flexDirection="row" gap="25px">
            <Stack
              sx={{
                border: "1px solid var(--border-color)",
                backgroundColor: "var(--white)",
                width: { xs: "100%", md: "800px" },
                maxWidth: "950px",
                minHeight: "550px",
                borderRadius: "10px",
                padding: "15px",
                gap: "15px",
                overflowY: "auto",
              }}
            >
              {[
                {
                  title: null,
                  text: `GATE exam is a national-level test organised for asThe Graduate Aptitude Test in Engineering (GATE) 
                is a crucial examination for engineering graduates aspiring to pursue higher education or secure prestigious 
                positions in public sector undertakings (PSUs). Here at The Masters Academy, we provide comprehensive coaching 
                to help you excel in the GATE exam.`,
                },
                {
                  title: "What is GATE?",
                  text: `GATE is a national-level exam that assesses the understanding of various 
                engineering and science subjects. It is jointly conducted by the Indian Institute of Science (IISc) and seven 
                Indian Institutes of Technology (IITs).`,
                },
                {
                  title: "Why Choose GATE?",
                  text: `Higher Education: Qualifying GATE opens doors to postgraduate programs 
                (M.E., M.Tech, Ph.D.) at prestigious institutions in India and abroad. PSU Jobs: Many PSUs consider GATE scores 
                for recruitment, offering attractive salary packages and job security. Scholarships: GATE qualifiers can avail 
                themselves of scholarships and financial assistance during their postgraduate studies.`,
                },
                {
                  title: "Our GATE Coaching Program",
                  text: `1. Expert Faculty: Learn from experienced educators with in-depth 
                knowledge of GATE subjects. 2. Comprehensive Study Material: Access meticulously prepared study materials and 
                practice papers. 3. Regular Assessments: Participate in mock tests and practice sessions to gauge your preparation 
                level. 4. Personalized Attention: Receive individual guidance to address your specific needs and doubts. 5. Strategic 
                Preparation: Learn effective strategies and time management skills to tackle the exam confidently.`,
                },
                {
                  title: null,
                  text: `At The Masters Academy, we are committed to providing the best resources and support to help 
                you succeed in the GATE exam and achieve your academic and professional aspirations. Join us and transform your 
                learning journey with our expert guidance and comprehensive coaching.`,
                },
              ].map(({ title, text }, index) => (
                <Stack key={index} gap="5px">
                  {title && (
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontSize: "14px",
                        fontWeight: "700",
                      }}
                    >
                      {title}
                    </Typography>
                  )}
                  <Typography sx={{ fontFamily: "Lato", fontSize: "14px" }}>
                    {text}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>

          <Stack>
            <Typography>Subjects</Typography>
          </Stack>
        </Stack>

        {/* Sidebar Content */}

        <Stack
          sx={{
            borderRadius: "10px",
            backgroundColor: "var(--white)",
            width: "200px",
            height: "230px",
            maxHeight: "300vh",
            display: { xs: "none", md: "block" },
            marginTop: "43px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Lato",
              fontSize: "18px",
              fontWeight: "700",
              color: "var(--sec-color)",
              padding: "15px",
            }}
          >
            Contents
          </Typography>
          <Stack>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "12px",
                fontWeight: "700",
                borderBottom: "1px solid var(--border-color)",
                padding: "5px 15px",
                minHeight: "35px",
              }}
            >
              Overview
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "12px",
                fontWeight: "700",
                borderBottom: "1px solid var(--border-color)",
                padding: "5px 15px",
                minHeight: "35px",
              }}
            >
              Important dates
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "12px",
                fontWeight: "700",
                borderBottom: "1px solid var(--border-color)",
                padding: "5px 15px",
                minHeight: "35px",
              }}
            >
              Application process
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "12px",
                fontWeight: "700",
                borderBottom: "1px solid var(--border-color)",
                padding: "5px 15px",
                minHeight: "35px",
              }}
            >
              Syllabus
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "12px",
                fontWeight: "700",
                padding: "5px 15px",
                minHeight: "35px",
              }}
            >
              Cutoffs
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
