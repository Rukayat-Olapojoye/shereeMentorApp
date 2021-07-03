import SocialMediaIcons from '../social-media-icons';
import './footer.css';
import { Link } from 'react-router-dom';


function Footer() {
	return (
		<footer>
			<div className="footer">
				<h1 className="foot-head">FindAMentor.com</h1>
				<p className="head-para">
					Get mentors to inspire powerful conversations and
					collaborations among experts worldwide so we can change the
					world together.
				</p>
				<hr />
				<div className="SM-Links">
					<SocialMediaIcons />
				</div>
				<hr />
				<div className="bold list">
					<ul>
						<li><Link to='/mentors'>
							<span className="span">Find a mentor
							</span>
						</Link></li>

						<li><Link to='/registermentor'><span className="span">Become a mentor</span></Link></li>
					</ul>
				</div>
				<div className="list">
					<ul>
						<li>Join FindAMentor</li>
						<li>FAQs</li>
						<li>Community standards</li>
						<li>Partnerships</li>
						<li>Support us</li>
					</ul>
				</div>
				<div className="inline-list">
					<ul>
						<li>Contact us</li>
						<li>Privacy Policy</li>
						<li>Terms of Use</li>
						<li>Sitemap</li>
					</ul>
				</div>
				<p className="copyright">&copy;2021 FindAMentor</p>
			</div>
		</footer>
	);
}

export default Footer;
