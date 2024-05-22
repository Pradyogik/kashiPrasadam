import React from "react";


// images
import footerLogo from '../../images/Group 120.png';
import contact from '../../images/Phone.png';
import mail from '../../images/mail.png';
import social from '../../images/Social Icons.png';
import address from '../../images/buildings.png';
import footerImg from '../../images/Group 223.png'

// css
import '../../components/Footer/Footer.css';

function Footer(){



    return(<>
	
    <footer>
    
	<div class="footer-wrap">
	<div className="footerImg">
        <img src={footerImg}/>
    </div>
	{/* <div class="container first_class">
			<div class="row">
				<div class="col-md-4 col-sm-6">
					<h3>BE THE FIRST TO KNOW</h3>
					<p>Get all the latest information on  Triedge Services, Events, Jobs
						and Fairs. Sign up for our newsletter today.</p>
				</div>
				<div class="col-md-4 col-sm-6">
				<form class="newsletter">
					 <input type="text" placeholder="Email Address"/> 
                                                        <button class="newsletter_submit_btn" type="submit"><i class="fa fa-paper-plane"></i></button>	
				</form>
				
				</div>
				<div class="col-md-4 col-sm-6">
				<div class="col-md-12">
					<div class="standard_social_links">
				<div>
					<li class="round-btn btn-facebook"><a href="#"><i class="fab fa-facebook-f"></i></a>

					</li>
					<li class="round-btn btn-linkedin"><a href="#"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>

					</li>
					<li class="round-btn btn-twitter"><a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a>

					</li>
					<li class="round-btn btn-instagram"><a href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a>

					</li>
					<li class="round-btn btn-whatsapp"><a href="#"><i class="fab fa-whatsapp" aria-hidden="true"></i></a>

					</li>
					<li class="round-btn btn-envelop"><a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a>

					</li>
				</div>
			</div>	
				</div>
					<div class="clearfix"></div>
				<div class="col-md-12"><h3 style="text-align: right;">Stay Connected</h3></div>
				</div>
			</div>
	</div> */}
		<div class="second_class">
			<div class="container-fluid second_class_bdr">
			<div class="row mr-0">
				<div class="col-md-3 col-sm-6 footerLogo">
					<div class="footer-logo"><img src={footerLogo} alt="logo"/>
					<div class="">
					<h3>Contact</h3>
					<ul class="footer-links contact-links">
						<li><a href="#">
                           <h6>
						   <i> <img src={contact} /></i>
                            +91-542-2400045
						   </h6>
                        </a>
						</li>

						<li>
                            <a href="#">
							<h6>
							<i> <img src={social} /> </i>
                            +91-63931-31608
							</h6>
                            </a>
						</li>

                        <li><a href="#">
                            <h6>
							<i> <img src={mail} /> </i>
                            skvthelpdesk@gmail.com
							</h6>
                        </a>
						</li>

                        <li><a href="#">
                            <h6>
							<i> <img src={address} /> </i>
                            Shri Kashi Vishwanath TempleTrust Helpdesk
                            Near Shapuri Mall, Bansfatak, Varanasi- 221001
							</h6>
                        </a>
						</li>
					</ul>
				</div>
					</div>
				</div>
				<div class="col-md-2 col-sm-6">
					<h3>Quick  Links</h3>
					<ul class="footer-links">
						<li><a href="#"><h6>Sugam Darshan</h6></a>
						</li>
						<li><a href="#"><h6>How To Donate</h6></a>
						</li>
						<li><a href="#"><h6>Shri Kashi Vishwanath App</h6></a>
						</li>
						<li><a href="#"><h6>Live Darshan</h6></a>
						</li>
						<li><a href="#" target="_blank"><h6>Guest House</h6></a>
						</li> 
						{/*  */}
						<li><a href="#"><h6>Pooja Items</h6></a>
						</li>
						<li><a href="#"><h6>Religious Statues</h6></a>
						</li>
						<li><a href="#"><h6>Brass Decor</h6></a>
						</li>
						<li><a href="#"><h6>Rudraksha Beads</h6></a>
						</li>
						<li><a href="#"><h6>Spiritual Clothing</h6></a>
						</li>
						{/*  */}
						<li><a href="#"><h6>Sacred Paintings</h6></a>
						</li>
						<li><a href="#"><h6>Kashi Vishwanath Prasad</h6></a>
						</li>
						<li><a href="#"><h6>Handcrafted Wooden Items</h6></a>
						</li>
						<li><a href="#"><h6>Attar and Fragrances</h6></a>
						</li>
						<li><a href="#"><h6>Religious Gifts</h6></a>
						</li>
						
					</ul>
				</div>
				{/*  */}
				<div class="col-md-2 col-sm-6">
					<h3>Products</h3>
					<ul class="footer-links">
						<li><a href="#"><h6>Hindu Religious Artifacts</h6></a>
						</li>
						<li><a href="#"><h6>Traditional Indian Decor</h6></a>
						</li>
						<li><a href="#"><h6>Spiritual Accessories</h6></a>
						</li>
						<li><a href="#"><h6>Vedic Rituals Supplies</h6></a>
						</li>
						<li><a href="#"><h6>Divine Clothing</h6></a>
						</li> 
						{/*  */}
						<li><a href="#"><h6>Ethnic Indian Paintings</h6></a>
						</li>
						<li><a href="#"><h6>Kashi Vishwanath Prasad</h6></a>
						</li>
						<li><a href="#"><h6>Artisanal Indian Crafts</h6></a>
						</li>
						<li><a href="#"><h6>Aromatic Indian Fragrances</h6></a>
						</li>
						<li><a href="#"><h6>Temple Accessories</h6></a>
						</li>
						{/*  */}
						<li><a href="#"><h6>Spiritual Jewellery</h6></a>
						</li>
						<li><a href="#"><h6>Sacred Incense</h6></a>
						</li>
						<li><a href="#"><h6>Yantras and Talismans</h6></a>
						</li>
						<li><a href="#"><h6>Religious Idols</h6></a>
						</li>
						
					</ul>
				</div>
				<div class="col-md-2 col-sm-6">
					<h3>Information</h3>
					<ul class="footer-category">
						<li><a href="#"><h6>Refund &amp; Return Policy</h6></a>
						</li>
						<li><a href="#"><h6>Privacy Policy</h6></a>
						</li>
						<li><a href="#"><h6>FAQs</h6></a>
						</li>
						<li><a href="#"><h6>Contact Us</h6></a>
						</li>
						
					</ul>
					<div class="clearfix"></div>
				</div>
				{/* <div class="col-md-3 col-sm-6">
					<h3>Contact</h3>
					<ul class="footer-links contact-links">
						<li><a href="#">
                            <i> <img src={contact} /></i>
                            +91-542-2400045
                        </a>
						</li>

						<li>
                            <a href="#"><i> <img src={social} /> </i>
                            +91-63931-31608
                            </a>
						</li>

                        <li><a href="#">
                            <i> <img src={mail} /> </i>
                            skvthelpdesk@gmail.com
                        </a>
						</li>

                        <li><a href="#">
                            <i> <img src={address} /> </i>
                            Shri Kashi Vishwanath TempleTrust Helpdesk
                            Near Shapuri Mall, Bansfatak,     Varanasi- 221001
                        </a>
						</li>
					</ul>
				</div> */}
			</div>
			
		</div>
		</div>
		
		<div class="row">
			
			<div class="container-fluid p-0 m-0">
			<div class="copyright"> © 2024 3i Consulting Pvt. Ltd. All rights reserved.</div>
			</div>
			
		</div>
	</div>
	
	</footer>
    </>)
}


export default React.memo(Footer);