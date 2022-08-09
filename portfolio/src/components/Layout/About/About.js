import classes from './About.module.css';
import profileImage from '../../../assets/profile_image.png';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button/Button';

const About = () => {
  return (
    <div className={classes.about}>
      <Card className={classes['profile-image']}>
        <img src={profileImage} alt="Marian Alexandru Boscu profile" />
      </Card>
      <Card className={classes.profile}>
        <div className={classes.name}>
          Alexandru <span>BOSCU</span>
        </div>
        <div className={classes.job}>WEB DEVELOPER</div>
        <hr />
        <div className={classes.description}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            recusandae sit corrupti nobis nesciunt cupiditate fugiat molestias
            dolorum possimus quos voluptatum aliquam pariatur repudiandae
            consequuntur at itaque sequi excepturi impedit doloremque, nulla
            quam molestiae exercitationem aliquid voluptates. Molestiae eos
            delectus obcaecati quia dolores alias dolorum, nostrum commodi? At
            dolorem fugit itaque, explicabo amet aperiam, quod, expedita ipsum
            quos velit assumenda beatae eius obcaecati culpa. Quo veritatis esse
            commodi, animi assumenda at tempora libero, facere, accusantium
            quidem eius numquam veniam aspernatur.
          </p>
        </div>
        <Button>Learn More</Button>
      </Card>
    </div>
  );
};

export default About;
