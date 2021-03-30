import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { InfoContext } from '../Login/Login';
import './Header.css';

const Header = () => {
	// const [loggedInInfo, setLoggedInInfo] = useContext(InfoContext);
	const [user, serUser] = useContext(UserContext);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#7ac8ff'}}>
				<div className="container-fluid">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarTogglerDemo03"
						aria-controls="navbarTogglerDemo03"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<Link className="navbar-brand" to="/home">
                        <img src="https://i.ibb.co/K5NPkg2/Logo.png" className="img-fluid" alt="Logo" border="0"></img>
					</Link>
					<div className="collapse navbar-collapse" id="navbarTogglerDemo03">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/home">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/login">
									Login
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/destination">
									Destination
								</Link>
							</li>
							
						</ul>
						<form className="d-flex">
							<Link className="navbar-brand" to="/home">
								{/* <h3>{loggedInInfo?.name}</h3> */}
								<h3>{user.name}</h3>
							</Link>	
						</form>
					</div>
				</div>
			</nav> 

        </div>
    );
};

export default Header;