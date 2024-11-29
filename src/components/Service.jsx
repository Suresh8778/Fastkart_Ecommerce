import React from 'react';
// import service1 from './images/service1.jpeg';
// import service2 from './images/service2.jpeg';
import feature1 from './images/feature-1.png';
import feature2 from './images/feature-2.png';
import feature3 from './images/feature-3.png';
import feature4 from './images/feature-4.png';

function Service() {
  return (
    <>
        <div className='container my-5'>
            {/* <div className="row">
                <div className="col-lg-6">
                    <img src={service1} alt='ServiceImage1' className='service-img w-100'></img>
                </div>
                <div className="col-lg-6">
                    <img src={service2} alt='ServiceImage2' className='service-img w-100'></img>
                </div>
            </div> */}
            <div className="row mt-5">
                <div className="col-12 col-md-3 col-lg-3 p-3 d-flex justify-content-sm-center justify-content-center">
                    <div className="card justify-content-center ">
                        <img src={feature1} className="img-fluid m-auto pt-3" alt="" width="50px" height="50px"></img>
                        <div className="card-body justify-content-center ">
                            <h5 className="text-dark text-center"><b>Free Shipping</b></h5>
                            <p className='text-center'>Free shipping on all US order or order above Rs.500</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 col-lg-3 p-3 d-flex justify-content-sm-center justify-content-center">
                    <div className="card justify-content-center ">
                        <img src={feature2} className="img-fluid m-auto pt-3" alt="" width="50px" height="50px"></img>
                        <div className="card-body justify-content-center ">
                            <h5 className="text-dark text-center"><b>24x7 Support</b></h5>
                            <p className='text-center'>Contact us 24 hours a day, 7 days a week</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 col-lg-3 p-3 d-flex justify-content-sm-center justify-content-center">
                    <div className="card justify-content-center ">
                        <img src={feature3} className="img-fluid m-auto pt-3" alt="" width="50px" height="50px"></img>
                        <div className="card-body justify-content-center ">
                            <h5 className="text-dark text-center"><b>30 Days return</b></h5>
                            <p className='text-center'>Simply return it within 30 days for an exchange</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 col-lg-3 p-3 d-flex justify-content-sm-center justify-content-center">
                    <div className="card justify-content-center ">
                        <img src={feature4} className="img-fluid m-auto pt-3" alt="" width="50px" height="50px"></img>
                        <div className="card-body justify-content-center ">
                            <h5 className="text-dark text-center"><b>Payment secure</b></h5>
                            <p className='text-center'>Payment support 24 hours a day, 7 days a week</p>
                        </div>
                    </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Service