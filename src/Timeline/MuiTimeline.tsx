import {
  Timeline,
  TimelineConnector,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
} from "@mui/lab";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { TimelineContent } from "@mui/lab";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";

export const MuiTimeline = () => {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="text.secondary">
            9:30 am
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" component="span">
              Web development
            </Typography>
            <Typography>Develop a new website</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="text.secondary">
            10:00 am
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "primary.main" }} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" component="span">
              Website Design
            </Typography>
            <Typography>Design a new website</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="text.secondary">
            10:30 am
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" component="span">
              Website Testing
            </Typography>
            <Typography>Test a new website</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="text.secondary">
            11:00 am
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="warning">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "warning.main" }} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" component="span">
              Website Deployment
            </Typography>
            <Typography>Deploy a new website</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="text.secondary">
            11:30 am
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="info">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "info.main" }} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" component="span">
              Website Maintenance
            </Typography>
            <Typography>Maintain a new website</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="text.secondary">
            12:00 pm
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="success">
            <LaptopMacIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" component="span">
              Website Maintenance
            </Typography>
            <Typography>Maintain a new website</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
