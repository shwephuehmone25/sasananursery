import * as React from "react";
import data from "../data/data.json";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faBullhorn,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const colors = [
  "#fff4e5",
  "#f9e5ff",
  "#e5fff9",
  "#e5f0ff",
];

const iconMap = {
  "fa fa-comments-o": faComments,
  "fa fa-bullhorn": faBullhorn,
  "fa fa-group": faUsers,
};

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: "none",
  borderRadius: "12px",
  marginBottom: "1rem",
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "1rem" }} />}
    {...props}
  />
))(() => ({
  borderRadius: "12px",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  "& .MuiAccordionSummary-content": {
    marginLeft: "8px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: "16px",
  borderTop: "1px solid rgba(0, 0, 0, 0.1)",
}));

export default function How() {
  const [expanded, setExpanded] = React.useState("panel0");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const accordionData = data.How;

  return (
    <div style={{ padding: "2rem", maxWidth: 900, margin: "0 auto" }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{
          color: "#FFCC00",
          fontWeight: 800,
          fontSize: "36px",
          marginBottom: "2rem",
        }}
      >
        သာသနာကို မည်သို့တည်တံ့စေမည်နည်း
      </Typography>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "space-between",
        }}
      >
        {accordionData.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{
              backgroundColor: colors[index % colors.length],
              width: "48%", 
              padding: "1rem",
            }}
          >
            <AccordionSummary
              aria-controls={`panel${index}d-content`}
              id={`panel${index}d-header`}
            >
              <FontAwesomeIcon
                icon={iconMap[item.icon]}
                style={{ fontSize: "24px", color: "#5472d2" }}
              />
              <Typography component="span" sx={{ fontWeight: 600, fontSize: "18px" }}>
                {item.title}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography sx={{ fontWeight: 400, fontSize: "15px" }}>{item.text}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
