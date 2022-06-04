import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  background: {
    width: '100vw',
    height: 500,
    maxWidth: '100%',
    backgroundColor: theme.palette.background.default,
    backgroundImage: `url(https://images.unsplash.com/photo-1635405074683-96d6921a2a68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '100%'

  },
  overlay: {
      width: '100%',
      height: '100%',
      background: "rgba(0,0,0,0.5)",
      position: 'relative'
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white'
  },
  root: {
    flexGrow: 1,
  },
}));
