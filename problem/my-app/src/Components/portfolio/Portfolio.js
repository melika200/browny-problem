import'./Portfolio.css';
function Portfolio(){
    return(
        <>
        <div className="portfolio-title" id='Portfolio'>
            <span>PORTFOLIO</span>
        </div>
        <div className="portfolio">
            <div className="img-lefts aval">
             <div className="img-first moon">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo8w0nrl551v63hyhvrm7ZJ1DHZRnFLCd184N7jx1iUUHDPp9Oe5sIlz03orVOAmyAry8&usqp=CAU"  className="first" />
                <div className="middle ">
                    <div className="text">UI/UX DESIGNER</div>
                </div>
             </div>

             <div className="img-second moon">
                <img src="https://m.media-amazon.com/images/I/61GEMhmXf6L._AC_UF894,1000_QL80_.jpg" className="first" />
                <div className="middle">
                    <div className="text">UI/UX DESIGNER</div>
                </div>
             </div>

            </div>
            <div className="img-between">
                
            <div className="img-third moon">
                <img src="https://olivias.com/cdn/shop/collections/furniture_cat_image.png?v=1682068449"  className="first vasad" />
                <div className="middle">
                    <div className="text">WEB DEVELOPMENT</div>
                </div>
             </div>

            </div>

            <div className="img-rights">
                
            <div className="img-four moon">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw41dzIcgCF0s1Snt1IDPLVz5V9v8tZGOxRzU_r7SWDR_cY3Q8FltW4O7kI2pLVAQkYIg&usqp=CAU"  className="first  akhar" />
                <div className="middle">
                    <div className="text">WEB DESIGNER</div>
                </div>
             </div>
               
                    
            <div className="img-five moon">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMQQXDaa_j4HWrkuopiMLNbsgVziEmZ5p57bH0TOD9TFlZ4rZ36ixruqMvyXxZpLaDSFM&usqp=CAU"  className="first akhar" />
                <div className="middle">
                    <div className="text">WEB DESIGNER</div>
                </div>
             </div>

            </div>
        </div>
        </>
    )
}
export default Portfolio