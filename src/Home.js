import React, {Component} from 'react'


class Home extends Component {
  render() {
    return(


      <div className="home-page">

        <div className="image-header">
          <img src="images/home-page.png" alt="" className="img-fluid"/>
        </div>
        <br />

        <div className="shop-category">
          <h2 className="text-center">Shop Categories</h2>
          <p className="text-center">
            Proin malesuada commodo magna, eu porta nulla luctus id.
            Integer bibendum dolor id mi dignissim<br /> pulvinar.
            Proin tincidunt elit in augue congue efficitur.
          </p>
          <div className="row">
            <div className="image-left col-md-4 py-2">
               <img src="images/fashion.png" alt="fashion" className="img-fluid"/>
            </div>
            <div className="image-center col-md-4 py-2">
               <img src="images/furniture.png" alt="furniture" className="img-fluid"/>
            </div>
            <div className="image-right col-md-4 py-2">
               <img src="images/Art.png" alt="Art" className="img-fluid"/>
            </div>
          </div>
        </div>

        <div className="featured- products">
            <h2 className="text-center">Featured Products</h2>
            <div className="row">
            <div className="img-0ne">
              <img src="images/bag.png" alt="bag" className="img-fluid" />
            </div>
            <div className="img-tw0">
            <img src="images/woman-jean.png" alt="woman-jean" className="img-fluid" />
            </div>
            <div className="img-three">
            <img src="images/woman-shirt.png" alt="woman-shirt" className="img-fluid" />
            </div>
            <div className="img-four">
            <img src="images/woman-shirt1.png" alt="woman-shirt1" className="img-fluid" />
            </div>
            </div>
        </div>

          <div className="new-arrivals">
              <h2 className="text-center">New Arrivals</h2>
              <div className="row">
                <div className="img-one col-md-4">
                  <img src="images/1.png" alt="1" className="img-fluid" />
                </div>
                <div className="img-one col-md-4">
                 <img src="images/2.png" alt="2" className="img-fluid" />
                </div>
                <div className="img-one col-md-4">
                <img src="images/3.png" alt="3" className="img-fluid" />
                </div>
                <div className="img-one col-md-4">
                <img src="images/4.png" alt="4" className="img-fluid" />
                </div>
                <div className="img-one col-md-4">
                <img src="images/5.png" alt="5" className="img-fluid" />
                </div>
                <div className="img-one col-md-4">
                <img src="images/6.png" alt="6" className="img-fluid" />
                </div>
                <div className="img-one col-md-4">
                <img src="images/7.png" alt="7" className="img-fluid" />
                </div>
                <div className="img-one col-md-4">
                <img src="images/8.png" alt="8" className="img-fluid" />
                </div>
                <div className="img-one col-md-4">
                <img src="images/9.png" alt="9" className="img-fluid" />
                </div>
              </div>
          </div>
          <hr />

              <div className="way-billing py-3">
                <div className="row">

                  <div className="shippin col-md-4">
                  <img src="images/free-shipping.png" alt="free-shippin" className="img-fluid" />
                  </div>
                  <div className="delivery col-md-4">
                  <img src="images/fast-delivery.png" alt="fast-delivery" className="img-fluid" />
                  </div>
                  <div className="money col-md-4">
                  <img src="images/money-back.png" alt="money-back" className="img-fluid" />
                  </div>
                </div>
              </div>
              <hr />


            <div className="news-channel py-5">
             <div className="container">
              <h3 className="text-center ">Subscribe for Newsletter</h3>
              <div className="input-group">
                <input type="text" className="form-control round" placeholder="Your email address..."></input>
                  <span className="input-btn px-1">
                    <button className="btn btn-primary btn-left btn-newsletter btn-rounded" type="button"><i className="fa fa-arrow-circle-right"></i>Subscribe</button>
                  </span>

              </div>
             </div>
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


export default Home
