import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header({ cartCount, setactiveUser }) {
	return (
		<header>		
				<Link to='/' className='icon'>
					<FontAwesomeIcon icon={faBookOpen} />
				</Link>
			<button className='header__button' onClick={setactiveUser}>
				Logga ut
			</button>
			<section className='cart'>
				<Link to='/cart' className='cart-title'>
					Cart
				</Link>
				<span className='in-cart'>{cartCount}</span>
			</section>
		</header>
	);
}
export default Header;
