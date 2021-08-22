import PropTypes from 'prop-types'; //impt
import Button from './Button';

const Header = ({ title }) => {
  //rafce arrow function/rcc/rce
  const onButtonClick = () => {
    console.log('Clicked+1');
  };

  return (
    <header className="header">
      <h2>{title}</h2>
      <Button color="yellowgreen" onClick={onButtonClick} />
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  //lower case propTypes /type script with react
  title: PropTypes.string.isRequired,
};

//CSS styling const headingStyle = {color:'red', backgroundColor:'yellow'}

export default Header;
