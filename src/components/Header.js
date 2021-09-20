import PropTypes from 'prop-types'
//import Button from './Button'
const Header = ({ title }) => {
    // const onClick = () => {
    //     console.log('Click')
    // }

    return (
        <header >
            <h5>{ title}</h5>
            {/* <text='To-do-list'  /> */}

        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}
//block css
const headingStyle = {
    color: 'purple',
}

export default Header;


//line 11 onClick={onClick} 