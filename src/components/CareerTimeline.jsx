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
  return (
    <div>
      <Typography component="h4" variant="h4">
        <ViewTimelineIcon
          sx={{ fontSize: "1.5rem", mr: 1, color: "#da0064" }}
        />
        Career Timeline
      </Typography>
      <Typography sx={{ fontWeight: 200, mb: 2, px: 2 }}>
        Here is a whistle-stop tour of the past decade of my career
      </Typography>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography gutterBottom variant="h6" component="span">
              General Assembly
            </Typography>
            <Typography variant="body2">
              Software Engineering Bootcamp Student
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default CareerTimeline;
