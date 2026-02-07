import { AvatarGroup, Badge, Button, ButtonGroup, Divider } from '@mui/material';
import YoutubeSearchedForTwoTone from '@mui/icons-material/YoutubeSearchedForTwoTone';
import ZoomIn from '@mui/icons-material/ZoomIn';
import SaveIcon from '@mui/icons-material/Save';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Avatar from '@mui/material/Avatar';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MailIcon from '@mui/icons-material/Mail';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';



function App() {
  return (
    <>
      <div>
        {/* //Buttons example */}
        <h1>Buttons</h1>
        <Button variant="text" color='dark'>Text</Button>
        <Button variant="contained" color='warning'>Contained</Button>
        <Button variant="outlined" color='success'>Outlined</Button>
        <br />
        <Button color='primary'>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons" color='info'>Link</Button>
        <br />
        <Button variant="contained" disableElevation color='secondary'>
          Disable elevation
        </Button>
        <br />
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
        <br />
        <Button startIcon={<span>👍</span>}>Like</Button>
        <Button endIcon={<span>👍</span>}>Dislike</Button>
        <br />
        {/* Button Group */}
        <h1>Button Group</h1>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <br />
        <ButtonGroup variant="outlined" aria-label="Loading button group">
          <Button>Submit</Button>
          <Button>Fetch data</Button>
          <Button loading loadingPosition="start" startIcon={<SaveIcon />}>
            Save
          </Button>
        </ButtonGroup>
        <br />
        {/* Icons Example */}
        <h1>Icons Exaple</h1>
        <YoutubeSearchedForTwoTone />
        <ZoomIn color="action" />
        <AccessAlarmIcon color="primary" sx={{ fontSize: 40 }} />

        {/* Data Display Exaple */}
        <h1>Data Display Exaple</h1>
        {/* Avatar */}
        <Avatar alt="Example" src="https://mui.com/static/images/avatar/1.jpg" />
        <Avatar sx={{ bgcolor: 'primary.light', width: 40, height: 40 }}>JS</Avatar>
        <Avatar variant="square" sx={{ width: 40, height: 40 }}>
          <AssignmentIcon />
        </Avatar>
        <AvatarGroup max={4} total={6}>
          <Avatar alt="Mahmudov Husniddin" src="https://mui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Mahmudov Javlon" src="https://mui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Jurayeva Gulnoza" src="https://mui.com/static/images/avatar/3.jpg" />
          <Avatar alt="Mahmudov Husniddin" src="https://mui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Mahmudov Javlon" src="https://mui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Jurayeva Gulnoza" src="https://mui.com/static/images/avatar/3.jpg" />
        </AvatarGroup>

        {/* Badge Example */}
        <h1>Badge Example</h1>
        <Badge badgeContent={4} color="primary">
          <MailIcon color="action" />
        </Badge>
        <Badge color="secondary" badgeContent={0} showZero>
          <MailIcon />
        </Badge>
        <Badge color="secondary" badgeContent={1000} max={999}>
          <MailIcon />
        </Badge>
        {/* Divider Example */}
        <h1>Divider Example</h1>
        <FormatBoldIcon />
        <Divider orientation="vertical" variant="middle" flexItem />
        <FormatItalicIcon />
      </div>
    </>
  );
}

export default App;
