import { Box, Typography, Link } from "@mui/material";
import { Paragraph } from "./AboutMe";
import PeopleIcon from "@mui/icons-material/People";
import GamesIcon from "@mui/icons-material/Games";
import DrawIcon from "@mui/icons-material/Draw";

function Interests() {
  return (
    <div className="interest-section">
      <Box>
        <Typography component="h4" variant="h4">
          My Interests
        </Typography>
        <Typography sx={{ fontWeight: 200, mb: 2 }}>
          Want to chat about something fun? Here are a few of my favourite
          activities outside of work!
        </Typography>
        <Box>
          <Paragraph variant="h6">
            <PeopleIcon sx={{ color: "#da0064" }} /> Volunteering
          </Paragraph>
          <Paragraph>
            I love volunteering with groups that unite people with shared
            interests, helping each other grow and learn. Over the years,
            I&apos;ve had the chance to support communities focused on product
            management and DEI, where I enjoy giving back and helping others
            succeed.
          </Paragraph>
          <Paragraph>
            Here are some of my recent volunteering activities:
          </Paragraph>
          <ul>
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
              Programme on product management strategies and best practices (Feb
              2023)
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
          <Paragraph variant="h6">
            <GamesIcon sx={{ color: "#da0064" }} /> Games (puzzles and video)
          </Paragraph>
          <Paragraph>
            I love to unwind with a mix of games, from the relaxing and
            brain-teasing puzzles like Sudoku and crosswords on the New York
            Times Games app to the more action-packed experience of video games
            like the Insomniac Spider-Man series on PS5.
          </Paragraph>
          <Paragraph>
            A fun fact about me: I only really enjoy Sudoku when it&apos;s set
            to the highest difficulty level!
          </Paragraph>
        </Box>
        <Box>
          <Paragraph variant="h6">
            <DrawIcon sx={{ color: "#da0064" }} />
            Blogging/Writing
          </Paragraph>
          <Paragraph>
            I love sharing my insights and life experiences through my blog on{" "}
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
    </div>
  );
}

export default Interests;
