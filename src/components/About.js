import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const About = () => {
  return (
    <div>
      <h4>Click add then finish the form to add a new task</h4>
      <h4>
        Click <FaTimes style={{ color: 'darkgreen' }} /> on the right to delete
        a task
      </h4>
      <h4>Double click to toggle reminder on/off</h4>
      <br></br>
      <hr></hr>
      <h4>Version 1.0.0</h4>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default About;
