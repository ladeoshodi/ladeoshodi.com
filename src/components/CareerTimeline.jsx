import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  timelineItemClasses,
} from "@mui/lab";
import { Typography } from "@mui/material";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";

function CareerTimeline() {
  const careerTimeline = [
    {
      company: "General Assembly",
      location: "London, UK",
      position: "Software Engineering Bootcamp Student",
      dates: "Jul 2024 - Present",
      summary:
        "A 12-week immersive software engineering program where I developed a varied portfolio of individual and group projects, such as a Vanilla JavaScript version of MineSweeper, an API-driven quiz app using ReactJS and Bulma CSS, a party games library developed with the MERN stack, and a full-stack task management application using ReactJS, Django, and PostgreSQL showcasing skills in front-end, back-end, and full-stack development, as well as API integration.",
    },
    {
      company: "ProductDive UK",
      location: "London, UK",
      position: "Program Manager | Growth & Community",
      dates: "Oct 2023 - Jun 2024",
      summary:
        "Led ProductDive's expansion into the UK in 2024 by launching the first UK product management program cohort. Additionally, organised community events that grew ProductDive's UK community by 400% over six months.",
    },
    {
      company: "EngineerBetter",
      location: "London, UK",
      position: "Product Manager",
      dates: "Sep 2021 - Feb 2023",
      summary:
        "Led a team of engineers to enhance operational efficiency by 50% and developed over five product management and agile delivery playbooks to support client operations.",
    },
    {
      company: "Codat",
      location: "London, UK",
      position: "Product Manager",
      dates: "Jan 2021 - Aug 2021",
      summary:
        "Optimised the customer onboarding process and payment flow, while providing ongoing support to over 100 customers through monthly developer communications and campaigns.",
    },
    {
      company: "Babylon Health",
      location: "London, UK",
      position: "Product Manager",
      dates: "Oct 2019 - Dec 2020",
      summary:
        "Led a team of engineers to optimise clinical and non-clinical process pathways for Babylon Clinical Operations to enhance patient safety and operational efficiency.",
    },
    {
      company: "Andela",
      location: "Lagos, Nigeria",
      position: "Associate Product Manager",
      dates: "May 2018 - May 2019",
      summary:
        "Led weekly user research, requirements gathering, and product strategy sessions to shape the product roadmap. Developed and supported learn-tech products that enhanced the skills of over 1,000 technologists from emerging markets at Andela.",
    },
    {
      company: "Andela",
      location: "Lagos, Nigeria",
      position: "Software Developer",
      dates: "Jun 2015 - May 2018",
      summary:
        "Designed and coded high-performance Python web applications in Django, adhering to agile and TDD principles.",
    },
  ];
  return (
    <div>
      <Typography component="h4" variant="h4">
        <ViewTimelineIcon
          sx={{ fontSize: "1.5rem", mr: 1, color: "#da0064" }}
        />
        Career Timeline
      </Typography>
      <Typography sx={{ fontWeight: 200, mb: 2, px: 2 }}>
        Here is a whistle-stop tour of my career over the past decade
      </Typography>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {careerTimeline.map((career, key) => {
          return (
            <TimelineItem key={key}>
              <TimelineSeparator>
                <TimelineDot color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" component="span">
                  {career.company} | {career.location}
                </Typography>
                <Typography variant="body1">{career.position}</Typography>
                <Typography variant="caption" sx={{ fontStyle: "italic" }}>
                  {career.dates}
                </Typography>
                <Typography variant="body2" sx={{ py: 2 }}>
                  {career.summary}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </div>
  );
}

export default CareerTimeline;
