import { Box, Typography } from "@mui/material";
import { Paragraph } from "./AboutMe";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import CodeIcon from "@mui/icons-material/Code";

function AboutMeSummary() {
  return (
    <>
      <Box>
        <Paragraph>
          Hi there <WavingHandIcon /> and welcome to my page.
        </Paragraph>
        <Typography component="h4" variant="h4" sx={{ my: 3 }}>
          My Story
        </Typography>
        <Paragraph>
          I am an experienced digital technology professional, with a solid
          background in both software engineering and product management.
          I&apos;ve worked across a mix of industries like consulting,
          healthcare, finance, and education, bringing together technical
          know-how, business smarts, and strategic thinking. I love tackling
          tough challenges and creating products that really make a difference,
          whether it&apos;s B2B, B2C, or B2B2C.
        </Paragraph>
        <Paragraph>
          I began my career as a backend engineer, developing software
          applications with Python/Django then transitioned to product
          management where I led development teams and championed product
          development strategies to achieve business goals and objectives
        </Paragraph>
        <Paragraph>
          I have recently fallen back in love with solving challenges with code{" "}
          <CodeIcon sx={{ color: "#da0064" }} /> and now, I am refocusing on web
          development where I can leverage my diverse industry background to
          create exceptional web user experiences, drive innovation, and deliver
          customer value.
        </Paragraph>
      </Box>
      <Box>
        <Typography component="h4" variant="h4" sx={{ my: 3 }}>
          So, what&apos;s next for me?
        </Typography>
        <Paragraph>
          I&apos;m excited to dive back into my technical roots and am on the
          lookout for full-stack engineering roles, especially those with a
          front-end focus. I&apos;m eager to put my product and UX skills to
          work, solving complex user and business challenges through code.
        </Paragraph>
      </Box>
    </>
  );
}

export default AboutMeSummary;
