import { Box, Typography, Avatar, makeStyles } from '@material-ui/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

// chamando a extensões
dayjs.extend(relativeTime);

// colocando os estilos
const useStyles = makeStyles(() => ({
  img: {
    width: '100%',
  },
  caption: {
    fontWeight: 500,
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
}));

function VideoCard({ item }) {
  // instanciando os estilos
  const classes = useStyles();


  return (
    // Box principal
    <Box>
      <img alt={item.title} src={item.thumb} className={classes.img} />
      <Box display="flex" mt="1">
        {/* box para esquerda */}
        <Box>
          <Avatar alt={item.autorName} src={item.autorAvatar}>
            SS
          </Avatar>
        </Box>

        {/* box para direita */}
        <Box>
          <Typography className={classes.caption} gutterBottom variant="body1" color="textPrimary">
            {item.title}
          </Typography>

          <Typography display="block" variant="body2" color="textSecondary">
            {item.authorName}
          </Typography>

          <Typography variant="body2" color="textSecondary">
            {`${item.views} • ${dayjs(item.updatedAt).fromNow()}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default VideoCard;