import Footer from "./Footer";
import { Typography, Breadcrumbs, Box, styled, Link } from "@mui/material";
import { Link as AnchorLink } from "react-router-dom";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import CodeIcon from "@mui/icons-material/Code";
import PeopleIcon from "@mui/icons-material/People";
import GamesIcon from "@mui/icons-material/Games";
import DrawIcon from "@mui/icons-material/Draw";

import ladeBackground from "../assets/lade-oshodi.jpg";

const Paragraph = styled(Typography)({
  marginBottom: "8px",
  fontSize: "1.2rem",
});

function AboutMe() {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" sx={{ p: 2 }}>
        <AnchorLink to="/" style={{ color: "white" }}>
          Home
        </AnchorLink>
        <Typography sx={{ color: "text.primary" }}>About Me</Typography>
      </Breadcrumbs>
      <div className="body-content">
        <Box sx={{ p: 2 }}>
          <Typography component="h1" variant="h1">
            Lade Oshodi
          </Typography>
          <Typography
            component="h5"
            variant="h5"
            sx={{ fontWeight: 300, mb: 2, color: "#da0064" }}
          >
            Software Engineering | Product Management | User Experience
          </Typography>
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
              tough challenges and creating products that really make a
              difference, whether it&apos;s B2B, B2C, or B2B2C.
            </Paragraph>
            <Paragraph>
              I began my career as a backend engineer, developing software
              applications with Python/Django then transitioned to product
              management where I led development teams and championed product
              development strategies to achieve business goals and objectives
            </Paragraph>
            <Paragraph>
              I have recently fallen back in love with solving challenges with
              code <CodeIcon sx={{ color: "#da0064" }} /> and now, I am
              refocusing on web development where I can leverage my diverse
              industry background to create exceptional web user experiences,
              drive innovation, and deliver customer value.
            </Paragraph>
          </Box>
          <Box>
            <Typography component="h4" variant="h4" sx={{ my: 3 }}>
              So, what&apos;s next for me?
            </Typography>
            <Paragraph>
              I&apos;m excited to dive back into my technical roots and am on
              the lookout for full-stack engineering roles, especially those
              with a front-end focus. I&apos;m eager to put my product and UX
              skills to work, solving complex user and business challenges
              through code.
            </Paragraph>
          </Box>
          <Box
            sx={{
              background: `no-repeat url(${ladeBackground})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "40vh",
              margin: "16px -16px 40px -16px",
              "@media (min-width:768px)": {
                height: "60vh",
              },
            }}
          ></Box>
          <Box>
            <Typography component="h4" variant="h4">
              My Interests
            </Typography>
            <Typography sx={{ fontWeight: 200, mb: 2 }}>
              Want to chat about something fun? Here are a few of my favorite
              activities outside of work!
            </Typography>
            <Box>
              <Paragraph sx={{ fontWeight: 600 }}>
                <PeopleIcon sx={{ color: "#da0064" }} /> Volunteering
              </Paragraph>
              <Paragraph>
                I love volunteering with groups that unite people with shared
                interests, helping each other grow and learn. Over the years,
                I&apos;ve had the chance to support communities focused on
                product management and DEI, where I enjoy giving back and
                helping others succeed.
              </Paragraph>
              <Paragraph>
                Here are some of my recent volunteering activities:
              </Paragraph>
              <ul style={{ fontSize: "1.2rem" }}>
                <li>
                  Organised community events with{" "}
                  <Link
                    href="https://productdive.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ProductDive UK
                  </Link>{" "}
                  as a volunteer community organiser (Oct 2023 - Jun 2024)
                </li>
                <li>
                  Gave a virtual talk on{" "}
                  <Link
                    href="https://docs.google.com/presentation/d/17AdSS6gqvTeFTMsXydLJ0qvdu8jWAU6SgoL1dlD3HoM/edit?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    The art of critical thinking and problem solving{" "}
                  </Link>
                  to graduates of the Intrapreneurs Club network (Sept 2023)
                </li>
                <li>
                  Published a company blog on{" "}
                  <Link
                    href="https://blog.container-solutions.com/facilitator-hacks"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facilitating better Product workshops
                  </Link>{" "}
                  (Jan 2023)
                </li>
                <li>
                  Mentored and trained 5 aspiring product managers at Univelcity
                  Product Management BootCamp (April 2023)
                </li>
                <li>
                  Coached 7 participants in the Axa Mansard Innovation Exchange
                  Programme on product management strategies and best practices
                  (Feb 2023)
                </li>
                <li>
                  Gave a talk at{" "}
                  <Link
                    href="https://agilecambridge.net/programme/how-make-internal-experiments-work"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Agile Cambridge 2022
                  </Link>{" "}
                  on the topic{" "}
                  <Box component="span" sx={{ fontWeight: "bold" }}>
                    “How to make internal experiments work”
                  </Box>{" "}
                  (Jun 2022)
                </li>
                <li>
                  Assisted in organising weekly community meetups and yearly
                  conferences with{" "}
                  <Link
                    href="https://productschool.com/pl/product-school"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Product School London
                  </Link>{" "}
                  (2019 - 2023)
                </li>
              </ul>
            </Box>
            <Box>
              <Paragraph sx={{ fontWeight: 600 }}>
                <GamesIcon sx={{ color: "#da0064" }} /> Games (puzzles and
                video)
              </Paragraph>
              <Paragraph>
                I love to unwind with a mix of games, from the relaxing and
                brain-teasing puzzles like Sudoku and crosswords on the New York
                Times Games app to the more action-packed experience of video
                games like the Insomniac Spider-Man series on PS5.
              </Paragraph>
              <Paragraph>
                A fun fact about me: I only really enjoy Sudoku when it&apos;s
                set to the highest difficulty level!
              </Paragraph>
            </Box>
            <Box>
              <Paragraph sx={{ fontWeight: 600 }}>
                <DrawIcon sx={{ color: "#da0064" }} />
                Blogging/Writing
              </Paragraph>
              <Paragraph>
                I love sharing my insights and life experiences through my blog
                on{" "}
                <Link
                  href="https://medium.com/lades-stories"
                  target="_blank"
                  rel="noreferrer"
                >
                  Medium
                </Link>{" "}
                — it&apos;s my creative outlet for everything I&apos;m learning
                along the way.
              </Paragraph>
            </Box>
          </Box>
        </Box>
      </div>

      <Footer />
    </>
  );
}

export default AboutMe;
