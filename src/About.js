import React, {Component} from 'react'


class Gallery extends Component {
  render() {
      return(
    <div className="container-fluid">
        <div>
            <img src="images/about-page.png" alt="about-page-pics" className="img-fluid py-5 w-100" />
        </div><br />

        <div className="text-center">
            <h3><u>About the Shop</u></h3>    
        </div>           
            <p>
                Pellentesque varius, dolor id pulvinar aliquam, orci nisi lobortis mauris, in scelerisque risus sem sit amet purus
                . Pellentesque pharetra sem ac porttitor feugiat. Phasellus ac elementum sapien. Sed rutrum pharetra tincidunt.
                Sed vel magna et est porta ultricies. Morbi elementum blandit erat quis iaculis. Aliquam commodo,
                felis et blandit sagittis, lacus tellus interdum leo, quis viverra ligula nulla ut purus. Ut feugiat leo ipsum,
                ac mollis ligula egestas auctor. Proin dictum eros orci, quis fermentum nulla volutpat non.
                Pellentesque dolor nibh, sagittis ut pulvinar quis, vulputate non nunc. Sed arcu urna, blandit quis felis at,
                rutrum varius ligula. Etiam ut ornare sapien, in ultrices diam. Sed in turpis id sem rhoncus vestibulum.<br /><br />

                Vestibulum maximus laoreet enim ut blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Nulla facilisi. Curabitur posuere est ipsum, eu semper tellus sagittis ultricies.
                Pellentesque eget lorem tortor. Maecenas sit amet dignissim augue, non faucibus arcu. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>



                    <div>
                        <h3 className="text-center"><u>About the Team</u></h3>
                    </div>
                <div className="row">

                    <div className="CEO col-md-6 p-5">
                          <img src="images/john-doe-ceo.jpg" alt="" className="img-fluid" />
                          <h3 className="text-center"><u>John</u> Doe - CEO</h3>
                          <p className="text-center">
                              Donec a porttitor elit, pulvinar malesuada ligula.
                              Etiam auctor tristique nisl sed tempor.
                              Phasellus vehicula orci eu dictum fringilla.
                              Fusce in enim et tellus auctor dapibus.
                              In hac habitasse platea dictumst.
                          </p>
                    </div>

                      <div className="DESIGNER col-md-6 p-5">
                            <img src="images/jasmine-doe-designer.jpg " alt="" className="img-fluid" />
                            <h3 className="text-center"><u>Jasmine</u> Doe - Designer</h3>
                            <p className="text-center">
                                Donec a porttitor elit, pulvinar malesuada ligula.
                                Etiam auctor tristique nisl sed tempor.
                                Phasellus vehicula orci eu dictum fringilla.
                                Fusce in enim et tellus auctor dapibus.
                                In hac habitasse platea dictumst.
                            </p>
                      </div>



                </div>

                    <h2 className="text-center">Testemonials</h2>
                  <div className="row">
                      <div className="johanna col-md-4 p-5">
                          <img src="images/johanna-doe.jpg" alt="" className="img-fluid rounded-circle  px-5 mx-5"/>
                          <h3 className="text-center"><u>johanna</u> Doe</h3>
                          <p className="text-center">Quisque sit amet libero purus.
                             Nulla a dignissim quam.
                             In hac habitasse platea dictumst.</p>
                      </div>
                      <div className="james col-md-4 p-5">
                      <img src="images/james-doe.jpg" alt="" className="img-fluid rounded-circle px-5 mx-5"/>
                          <h3 className="text-center"><u>james</u> Doe</h3>
                          <p className="text-center">Quisque sit amet libero purus.
                             Nulla a dignissim quam.
                             In hac habitasse platea dictumst.</p>
                      </div>
                      <div className="missy col-md-4 p-5">
                      <img src="images/missy-doe.jpg" alt="" className="img-fluid rounded-circle px-5 mx-5" />
                          <h3 className="text-center"><u>missy</u> Doe</h3>
                          <p className="text-center">Quisque sit amet libero purus.
                             Nulla a dignissim quam.
                             In hac habitasse platea dictumst.</p>
                      </div>
                  </div>


                  <div className="container-fluid bg-primary px-5 py-5">
                     <h3 className="text-center"><u>Brands</u></h3>
                     <br/>
                       <div className="row">
                        <div className="col-sm-2 md-4"><img src="images/versus.png" alt="" className="img-fliud"/></div>
                        <div className="col-sm-2 md-4"><img src="images/versus.png" alt="" className="img-fliud"/></div>
                        <div className="col-sm-2 md-4"><img src="images/versus.png" alt="" className="img-fliud"/></div>
                        <div className="col-sm-2 md-4"><img src="images/versus.png" alt="" className="img-fliud"/></div>
                        <div className="col-sm-2 md-4"><img src="images/versus.png" alt="" className="img-fliud"/></div>
                        <div className="col-sm-2 md-4"><img src="images/versus.png" alt="" className="img-fliud"/></div>
                       </div>
                       <br />
                 </div>




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
export default Gallery
