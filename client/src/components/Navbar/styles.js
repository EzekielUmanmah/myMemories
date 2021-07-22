import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 15px', 
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
    marginLeft: '15px',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  image: {
    marginLeft: '15px',
  },
  profile: {
    display: 'flex',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '1.5em',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    marginRight: '.5em'
  },
}));