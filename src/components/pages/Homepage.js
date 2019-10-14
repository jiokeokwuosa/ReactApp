import React, {Component} from "react";
import FeaturedBusiness from "../includes/FeaturedBusinesses";
import TrustedBusiness from "../includes/TrustedBusiness";
import BusinessOwnerForum from "../includes/BusinessOwnerForum";
import Article from "../includes/Articles";

import image1 from "../../assets/img/1.jpg";
import image2 from "../../assets/img/2.jpg";
import image3 from "../../assets/img/3.png";
import image4 from "../../assets/img/4.png";
import image5 from "../../assets/img/5.png";
import image6 from "../../assets/img/6.png";
import image7 from "../../assets/img/7.png";
import image8 from "../../assets/img/8.png";
import image9 from "../../assets/img/9.png";
import image10 from "../../assets/img/10.png";
import image11 from "../../assets/img/11.png";
import image12 from "../../assets/img/12.png";
import image13 from "../../assets/img/13.png";
import image14 from "../../assets/img/14.png";
import image15 from "../../assets/img/15.png";
import image16 from "../../assets/img/16.png";
import image17 from "../../assets/img/17.png";
import image18 from "../../assets/img/18.png";
import image19 from "../../assets/img/19.jpg";
import image20 from "../../assets/img/20.jpg";
import image21 from "../../assets/img/21.jpg";
import image22 from "../../assets/img/22.jpg";
import image23 from "../../assets/img/23.jpg";
import image24 from "../../assets/img/24.jpg";
import image25 from "../../assets/img/25.jpg";
import image26 from "../../assets/img/26.jpg";
import image27 from "../../assets/img/27.jpg";
import image28 from "../../assets/img/28.jpg";
import image29 from "../../assets/img/29.jpg";

 
class Homepage extends Component{
    render(){
        return(
            <span>
                <div id="indexFirstSection" className="container-fluid">
                    <a name="top"></a>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-12 relative partOne">
                                    <img src={image1} alt=""/>
                                    <div>
                                        <h2>Welcome to FCMB FC!!</h2>
                                        <p>We are a community that create room for growth, collaboration and trade  between individual to individual, individual to business, business to business. Meet people of like interests, exchange ideas, get value as you trade with authentic businesses and get consumer credit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row relative">
                                <div className="col-md-12 relative partTwo">
                                    <img src={image2} alt=""/>                  
                                <div className="overlay"></div>
                                <div className="writeUp">
                                    <h3>Features</h3>
                                    <p>Share ideas, seek advice, grow, build business relationship, get your business verified, collaborate, meet people of like interests, get consumer credit and trade with discount.<br/>Get Acquainted!! <br/><br/><span>Trade with confidence, make friends, build partnership, let people know what you do,  share your thoughts and passion.<br/> Collaborate and grow.</span></p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h3>Featured Businesses</h3>
                            <div className="row">
                                <div className="col-md-12">
                                    <FeaturedBusiness image={image3} title='Hitech Building and Construction' contact='Contact: Karan Kobacom' image9={image9} image10={image10} image11={image11} image12={image12}/>
                                    <FeaturedBusiness image={image4} title='Wakanow Tours and Travels' contact='Contact: Nenpan Gowon' image9={image9} image10={image10} image11={image11} image12={image12}/>
                                    <FeaturedBusiness image={image5} title='Okoli Automobile' contact='Contact: Karan Kobacom' image9={image9} image10={image10} image11={image11} image12={image12}/>
                                    <FeaturedBusiness image={image6} title='Arm Consulting Serivces' contact='Contact: Sandwich Feedback'image9={image9}  image10={image10} image11={image11} image12={image12}/>
                                    <FeaturedBusiness image={image7} title='GIGM  Couries Services' contact='Contact: Karan Kobacom' image9={image9} image10={image10} image11={image11} image12={image12}/>
                                    <FeaturedBusiness image={image8} title='PrimeWater Ville Limited' contact='Contact: Maxwell Sandwell' image9={image9} image10={image10} image11={image11} image12={image12}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="indexSecondSection" className="container-fluid">
                    <div className="row">
                        <div className="col-md-7">
                            <h3>TRUSTED & VERIFIED BUSINESS</h3>
                            <div className="row">
                                <TrustedBusiness image={image13} title='Network' description='Meet business owners nearby'/>
                                <TrustedBusiness image={image14} title='Quality Referrals' description='Find new referrals opportunities'/>
                                <TrustedBusiness image={image15} title='Build Relationships' description='Get customers from people you trust'/>                               
                            </div>  
                            <div className="row">
                                <TrustedBusiness image={image16} title='Get Recommended' description='By other trusted business owners'/>
                                <TrustedBusiness image={image17} title='Customer Service' description='Complaints from customers & solutions'/>
                                <TrustedBusiness image={image18} title='Reviews' description='Find in-depth reviews on products'/>
                            </div>           
                        </div>
                        <div className="col-md-5">
                            <iframe src="https://www.youtube.com/embed/tiagNhAMWoo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div id="indexThirdSection">
                    <h3>BUSINESS OWNER FORUM</h3>
                    <div className="container-fluid">
                        <div className="row">
                            <BusinessOwnerForum image1={image19} image2={image22} content='Connect with like minds and people that help complement your business'/>
                            <BusinessOwnerForum image1={image20} image2={image23} content="Get help to scale business and share experience of<br/> success story"/>
                            <BusinessOwnerForum image1={image21} image2={image24} content="Meet people within your community and  niche, exchange ideas and build  relationship"/>                             
                        </div>
                    </div>
                </div>
                <div id="indexFourthSection" className="container-fluid">
                    <h3>Articles and Upcoming Event</h3>
                    <div className="row">
                        <Article image={image25} title='POWER AND ENERGY' date='Tue, 15 - Thu, 17 Oct 2019' content='FCMB Climate Finance Workshop and Exhibition 2019 Lagos' tickets={true}/>
                        <Article image={image26} title='WELLNESS, HEALTH & FITNESS' date='Thu, 17 Oct 2019' content='The Future of Health Conference Abuja' tickets={true}/>                                            
                    </div>
                    <div className="row">
                        <Article image={image27} title='BUSINESS SERVICE' date='Thu, 07 - Fri, 08 Nov 2019' content='How to make your brand explode  rather than your brain' tickets={false}/>
                        <Article image={image28} title='INFOMATION & TECHNOLOGY' date='Tue,12 - Thu, 14 Nov 2019' content='eNigeria International Conference Abuja' tickets={true}/>
                    </div>
                </div>
                <div id="indexFifthSection" className="relative">
                    <img src={image29} alt=""/>    
                    <div>
                        <h1>Exclusive Flight Offers for<br/> Premium Banking Customers</h1>
                        <p>Discover the world and create special memories with exclusive discounts on international flights with Virgin Atlantic, Ethiad, Lufthansa, Ethopia and Delta Airlines</p>
                        <button className="button3">Apply Now</button>
                    </div>  
                </div>
                <div id="indexSixthSection" className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <a href="#top">Back to Top!</a> 
                        </div>
                    </div>
                </div>
           </span>
        );
    }
}
export default Homepage;
