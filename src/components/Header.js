import PropTypes from 'prop-types'; //impt
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  //rafce arrow function/rcc/rce
  return (
    <header className="header">
      <h2>{title}</h2>
      <Button
        color={showAdd ? 'yellowgreen' : 'green'}
        onClick={onAdd}
        text={showAdd ? 'Close' : 'Add'}
      />
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
