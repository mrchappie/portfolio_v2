import classes from './VideoBackground.module.css';
import videoBackground from '../../../assets/video.mp4';

const VideoBackground = () => {
  return (
    <div className={classes['video-container']}>
      <div className={classes.content}></div>
      <video autoPlay muted loop className={classes.video}>
        <source src={videoBackground} type="video/mp4" />
      </video>
    </div>
  );
};
export default VideoBackground;
