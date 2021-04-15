import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, InputBase, Paper, Button, Hidden} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    // tirando o sublinhado 
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    minHeight: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    cursor: 'pointer',
    height: 18,
    marginLeft: theme.spacing(3),
  },
  search: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    height: 35,
    width: 700,
  },
  input: {
    flex: 1,
  },
}));
function topBar() {
  // instanciando
  const classes = useStyles();


  return (
    <AppBar className={classes.root} color="default">
      <Toolbar className={classes.toolbar}>
        {/* box da logo na esquerda*/}
        <Box display="flex" alignItems="center">
          <MenuIcon />
          <img src="/new-youtube-logo.svg" alt="logo" className={classes.logo} />
        </Box>

        {/* renderizando página para ficar responsivel */}
        <Hidden mdDown>
          {/* box de input de pesquisa, no meio*/}
          <Box>
            <Paper component="form" className={classes.search}>
              <InputBase
                className={classes.input}
                placeholder="Pesquisar"
                inputProps={{ 'arial-label': 'search google maps' }}
              />
              <IconButton
                type="submit"
                className={classes.IconButton}
                arial-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
        </Hidden>

        {/* box de login a direita */}
        <Box display="flex">
          {/* add videos ver etc */}
          <IconButton className={classes.icons}>
            <VideoCall />
          </IconButton>
          {/* icons de aplicações disponivel */}
          <IconButton className={classes.icons}>
            <Apps />
          </IconButton>
          <IconButton className={classes.icons}>
            <MoreVert />
          </IconButton>
          {/* botão de login */}
          <Button
              color="secondary"
              component="a"
              variant="outlined"
              startIcon={<AccountCircle />}
              // onClick={() => signIn('google')}
            >
              Fazer Login
            </Button>
        </Box>
       
      </Toolbar>
    </AppBar>
  )
}

export default topBar;