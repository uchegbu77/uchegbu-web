import React, {Component} from 'react'


class Contact extends Component {
  render() {
    return(
        <div className="container-fluid">
          <div className="contact">
            <div className="contact-img">
              <img src="images/contact.png" alt="contact-img" className="img-fluid"/>
            </div>
          </div>
        
        <div className="form-field py-5">
          <div className="row">
            <div className="texts col-sm-6">
              <h4>Support</h4>
                <p><a href="support.html">support@yoursite.com</a></p>

              <h4>Press</h4>
               <p><a href="press.html">press@yoursite.com</a></p>

              <h4>Shipping and Orders</h4>
                <p><a href="orders.html">orders@yoursite.com</a></p>

              <h4>Shop Info</h4>
                <p>
                Phasellus pretium lacinia efficitur. Cras arcu diam, commodo quis est id,<br /> 
                lobortis semper felis. Sed vel arcu ligula. Maecenas pulvinar a ex non mollis.<br /> 
                Integer hendrerit ante tortor, sit amet tristique leo blandit.<br />

                Sed dictum laoreet augue, non mollis nisl tempus sed.<br /> 
                Sed vitae felis eu sapien vulputate viverra. Sed pretium rutrum fermentum.<br />
                Curabitur faucibus aliquam lacus eget gravida.<br />
                </p>
            </div>

            <div className="form col-sm-6">
                <input type="text" className="form-control " id="name" placeholder="Your full name... "></input><br />
                <input type="text" className="form-control round" placeholder="Your email address..."></input><br />
                <textarea id="message" className="form-control " rows="5" placeholder="message"></textarea><br />
                <button type="submit" id="form-submit" className="btn btn-md btn-success btn-rounded">Submit Message</button>
            </div>

          </div>
        </div>
       

          <div className="location">
              <div className="location-heading text-center"><h4>Shop Locations</h4></div>
          </div>

          <div className="row py-5">
            
              <div className="col-sm-4 py-3">
                <img src="images/miami.png" alt="miami-pics" className="img-fluid"/>
              </div>
              <div className="col-sm-4 py-3">
                <img src="images/melbourne.png" alt="melbourne-pics" className="img-fluid"/>
              </div>
             <div className="col-sm-4 py-3">
               <img src="images/london.png" alt="london-pics" className="img-fluid"/>
              </div>
          </div>
       

          <div className="blank-space py-5"><br /></div>
          <div className="blank-space py-5"><br /></div>
          <div className="blank-space py-5"><br /></div>
          <div className="blank-space py-5"><br /></div>
          <div className="blank-space py-5"><br /></div>


          <div className="container-fluid footer">
             <div className="footer bg-dark text-light py-5">
               <div className="container-fluid">
                    <div className="row">

                            <div className="col-sm-2">
                                <h4 className="text-center"><i className="fa fa-shopping-cart fa-1x"></i> inCart</h4>
                                <p className="text-center">
                                    Praesent sed congue ipsum.
                                    Nullam tempus ornare est, non aliquet velit tincidunt elementum.
                                    Nulla at risus ut felis eleifend. Nulla non lacinia. Integer est lacus,
                                    ultricies sed feugiat id, maximus nec.
                                </p>
                            </div>

                            <div className="col-sm-2">
                                <h3 className="text-center"><u>Brands</u></h3>
                                <p className="text-center">
                                <a href="my"><span>Marco REA</span></a><br />
                                <a href="my"><span>3Days</span></a><br />
                                <a href="my"><span>La Barcelona</span></a><br />
                                <a href="my"><span>Lora Towers</span></a><br />
                                <a href="my"><span>Ginney's</span></a>
                                </p>
                            </div>

                            <div className="col-sm-2">
                                <h3 className="text-center"><u>Support</u></h3>
                                <p className="text-center">
                                <a href="my"><span>Privacy Policy</span></a><br />
                                <a href="my"><span>Shipping & Return</span></a><br />
                                <a href="my"><span>Terms & Conditions</span></a><br />
                                <a href="my"><span>FAQ</span></a><br />
                                <a href="my"><span>Contact</span></a>
                                </p>
                            </div>


                            <div className="col-sm-2">
                                <h3 className="text-center"><u>Get in Touch</u></h3>
                                <p className="text-center">
                                <a href="fb"><span><i className="fa fa-map-marker"></i> Miami, S Miami Ave, SW 20th.</span></a><br />
                                <a href="fb"><span><i className="fa fa-phone-square"></i> +0123 456 789</span></a><br />
                                <a href="fb"><span><i className="fa fa-envelope-o"></i> office@yoursite.com</span></a><br />
                                <a href="fb"><span>FAQ</span></a><br />
                                </p>
                                
                         
                              
                                 <div className="row">
                                    <div className="col-md-2"><a href="home.js"><i className="fa fa-facebook-official"></i></a></div>
                                    <div className="col-md-2"><a href="home.js"><i className="fa fa-twitter"></i></a></div>
                                    <div className="col-md-2"><a href="home.html"><i className="fa fa-google-plus"></i></a></div>
                                    <div className="col-md-2"><a href="home.html"><i className="fa fa-pinterest"></i></a></div>
                                    <div className="col-md-2"><a href="home.js"><i className="fa fa-linkedin"></i></a></div>
                                    <div className="col-md-2"><a href="home.html"><i className="fa fa-globe"></i></a></div>
                                </div>
                            
                       

                            </div>

                        </div>
                    </div>
            </div>


                
  
            <div className="footer-bar bg-secondary py-3">
            <div className="row">
                <div className="left-footer-bar col-9">
                <h6> <i className="fa fa-copyright"></i> 2016 - inCart - Responsive Shop Theme</h6>
                </div>
                <div className="right-footer-var col-3 ">
               
                <img src="images/visa1.png" alt="" className="img-fluid" />
                </div>
            </div>
</div>
          </div>
                

        </div>

            
    )
  }
}


export default Contact
