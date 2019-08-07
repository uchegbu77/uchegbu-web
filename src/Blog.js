import React, {Component} from 'react'


class Blog extends Component {
  render() {
    return(

        <div className="container-fluid">
            <div className="blog-img">
                <img src="images/blog.png" alt="blog-pics" className="img-fluid" />
            </div>

           <div className="row ">
           <div className="blog-body col-sm-8 py-5">
            <img src="images/whole-page.png" alt="blog-pics" className="img-fluid" />
            </div>

            <div className="blog-body col-sm-4">
            <img src="images/about-author.png" alt="blog-pics" className="img-fluid" />
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


export default Blog
