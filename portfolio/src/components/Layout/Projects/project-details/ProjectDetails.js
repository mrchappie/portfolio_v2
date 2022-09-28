import { useParams } from 'react-router-dom';
import classes from './ProjectDetails.module.css';

const ProjectDetails = () => {
  const params = useParams();
  console.log(params);

  return (
    <div className={classes.container}>
      <div className={classes['container-image']}>
        <h1>{params.projectName.replaceAll('-', ' ').toUpperCase()}</h1>
        <div className={classes.image}>
          <img src="https://picsum.photos/1000/500" alt="" />
        </div>
      </div>
      <div className={classes.info}>
        <div className={classes.name}>
          {params.projectName.replaceAll('-', ' ').toUpperCase()}
        </div>

        <p>
          Writed with:
          <br />
          <br />
        </p>
        <div className={classes.tech}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={classes.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
          adipisci, dicta alias commodi maiores tempore perspiciatis repellat ex
          sit odio.
        </div>
        <div className={classes.photo}></div>
        <div className={classes.photo}></div>
        <div className={classes.photo}></div>
        <div className={classes.authors}></div>
      </div>
    </div>
  );
};

export default ProjectDetails;
