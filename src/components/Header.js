import PropTypes from 'prop-types'//impt


const Header = (props) => {
    return (
        <div>
            <h2>Task Tracker {props.name}</h2>
        </div>
    )
}

Header.propTypes = {//lower case propTypes
    name:PropTypes.string.isRequired,
}

//CSS styling const headingStyle = {color:'red', backgroundColor:'yellow'}

export default Header
