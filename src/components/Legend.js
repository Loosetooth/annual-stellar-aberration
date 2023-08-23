import styled from "@emotion/styled"
import { Link, Paper, Typography } from "@mui/material"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const MyPaper = styled(Paper)`
  position: absolute;
  padding: 1rem;
  margin: 1rem;
  z-index: 10;
`

const LegendItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const Legend = (props) => {
  return <MyPaper>
    <LegendItem>
      <ArrowRightAltIcon sx={{ color: "royalblue", fontSize: 50 }} />
      <Typography>
        Star's actual position
      </Typography>
    </LegendItem>
    <LegendItem>
      <ArrowRightAltIcon sx={{ color: "green", fontSize: 50 }} />
      <Typography>
        Star's apparent position
        (aberration)
      </Typography>
    </LegendItem>
    <LegendItem>
      <ArrowRightAltIcon sx={{ color: "red", fontSize: 50 }} />
      <Typography>
        Expected parallax
      </Typography>
    </LegendItem>
    <LegendItem>
      <ArrowRightAltIcon sx={{ color: "magenta", fontSize: 50 }} />
      <Typography>
        Earth's velocity
      </Typography>
    </LegendItem>
    <LegendItem>
      <Typography>
        Press space bar to pause
      </Typography>
    </LegendItem>
    <LegendItem>
      <Typography>
        Click and drag to rotate camera
      </Typography>
    </LegendItem>
    <LegendItem>
      <Typography>
        Right-click and drag to pan camera
      </Typography>
    </LegendItem>
    <LegendItem>
      <Typography>
        See <Link href="https://explainingscience.org/2019/05/28/stellar-aberration/">this website</Link> for more information.
      </Typography>
    </LegendItem>
  </MyPaper>
}