import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="mr">
            <h2>This is Header</h2>
            <NavLink className='mr-6' to='/'>Home</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </div>
    );
};

export default Header;