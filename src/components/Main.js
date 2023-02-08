import React from "react"
 

function Main(){
    return (
        <div className="section-features">
            <section >  
            <div className="row sec-desc">
                <h2 id="about">About Us</h2>
                <p className="long-copy">
                Our focus is to create a memorable experience when selling or buying an affordable home! Moreover, we forge
                trust and provide great service while at the same time helping communities generate goodwill. We look at the
                entire spectrum of options, from a sale by owner (fsbo) home, to Realtor and Dealer listed homes in your desired
                market area. If you need finance assistance, we work with all the major lending institutions that can provide
                you with the best rates possible based on your qualifications and credit history.
                </p>
            </div>
            <div className="row col-media">
                <div className="col span-1-of-5 box">
                <div className="sec-item">
                    <img id="ivras" className="img-big" src={"./img/I-btn1.svg"} alt="Investment" />
                    <h3 className="i-line">Investment</h3>
                </div>
                <p className="sec-desc">
                    Creating value for our clients through the purchase or sale of a home is our goal. We cater to first time
                    homeowners, seniors, and military service members. We provide a free consultation to better understand your
                    needs and assist you in finding the right lender. All buyers and sellers are provided a comparative market
                    analysis (CMA), so they can know the value their investment.
                </p>
                </div>
                <div className="col span-1-of-5 box">
                <div className="sec-item">
                    <img className="img-big" src="./img/V-btn1.svg" alt="Valuation" />
                    <h3 className="v-line">Valuation</h3>
                </div>
                <p className="sec-desc">
                    We know the importance of the valuation process. When buying or selling a home, it's important to know the
                    difference between a comparative market analysis (CMA) and an appraisal. We perform a CMA at no cost to the
                    buyers or sellers. The appraisal is generated mainly for lenders to measure their risk in the transaction by a
                    State licensed or certified appraiser.
                </p>
                </div>
                <div className="col span-1-of-5 box">
                <div className="sec-item">
                    <img className="img-big" src="./img/R-btn1.svg" alt="Realty" />
                    <h3 className="r-line">Realty</h3>
                </div>
                <p className="sec-desc">
                    We have over 20 years of experience and pride ourselves in a no pressure consultation! We are a specialty
                    Realty service provider that caters to chattel real homes such as manufactured or mobile homes, and park
                    models. We are also affiliated with investors ready to buy your home. We also buy and sell real property,
                    mainly single family and 2-4 units.
                </p>
                </div>
                <div className="col span-1-of-5 box">
                <div className="sec-item">
                    <img className="img-big" src="./img/A-btn1.svg" alt="Affordable Housing" />
                    <h3 className="a-line">Affordable</h3>
                </div>
                <p className="sec-desc">
                    Home prices appear to be on the rise! Finding affordable housing is what we pride ourselves in doing for our
                    buyers and sellers. Call us for a consultation, so we can get to understand your needs and find you the home
                    that best fits your budget. And if selling your home, consider listing with us, we can assist you in preparing
                    your home to sell for top dollar.
                </p>
                </div>
                <div className="col span-1-of-5 box">
                <div className="sec-item">
                    <img className="img-big" src="./img/S-btn1.svg" alt="Sustainable Living" />
                    <h3 className="s-line">Sustainable</h3>
                </div>
                <p className="sec-desc">
                    Sustainable living is a lifestyle choice with a heighten awareness by individuals, society, and our
                    government. Ask us to help address your concerns when buying or selling a home. What degree of energy
                    conservation or use of natural resources are you looking to achieve? Is the home that you're buying or selling
                    have any energy efficient items? We are always eager to help!
                </p>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Main