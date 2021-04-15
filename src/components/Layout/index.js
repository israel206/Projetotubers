// trabalhando com css dentro do javaScript
import { makeStyles } from '@material-ui/core';
// importação do pacote next
import Head from 'next/head';

// importando as páginas TopBar
import TopBar from './TopBar';
// importando as páginas NavBar
import NavBar from './NavBar';

// criando um styles com objeto
// recuperando o objeto theme
const useStyles = makeStyles((theme) => ({
  // colocando propriedade
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
    width: '100vw',
  },
  // wrapper ele controlo o corpo da página
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256,
    },
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
  },
}));
// renderizando o component
// própriedade children significa filho
// recebendo title como própriedade
function Layout({ children, title }) {
  // chamando o objeto
  const classes = useStyles();
  return (
    // pode ser colocado assim <div> ou vazio <>
    <>
      {/* colocando uma TAG Head, que veem do próprio pacote next */}
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* // formatação da página completa */}
      <div className={classes.root}>

        {/* rodapé do layout, chamando TopBar*/}
        <TopBar />

        {/* barra lateral */}
        <NavBar />

        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            {/* vídeos da páginas */}
            <div className={classes.content}>
              {children}
            </div>
          </div>
        </div>
        
      </div>
    </>
    
  );
}

export default Layout;