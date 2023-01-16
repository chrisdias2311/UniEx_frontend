import React from 'react'
import Product from './Product';
import "./Home.css";
import banner from './banner.jpg'

function Home() {
    return (
        <div>
            <div className="home_container">
                <img className="home_image" src={banner}></img>

                <div className="home_row">
                    <Product
                        id="12321341"
                        title="Drafter and Drawing clips"
                        price={250}
                        image="https://rukminim1.flixcart.com/image/416/416/office-set/d/v/3/omega-1954-original-imadz44gvhzuhv8a.jpeg?q=70"
                    />
                    <Product
                        id="12321341"
                        title="Drawing roll"
                        price={50}
                        image="https://images-na.ssl-images-amazon.com/images/I/61aNeRLbBmL._SY879_.jpg"
                    />
                    <Product
                        id="12321341"
                        title="Drafter and Drawing clips"
                        price={250}
                        image="https://rukminim1.flixcart.com/image/416/416/office-set/d/v/3/omega-1954-original-imadz44gvhzuhv8a.jpeg?q=70"
                    />
                </div>
                <div className="home_row">
                    <Product
                        id="12321341"
                        title="Roller Scale x 2"
                        price={50}
                        image="https://i.ytimg.com/vi/ypBvqaxqnEk/maxresdefault.jpg"
                    />
                    <Product
                        id="12321341"
                        title="Engineering Chemistry-2 Notes"
                        price={0}
                        image="https://pankajcopiers.com/wp-content/uploads/2018/06/olt_2.jpg"
                    />
                </div>
                <div className="home_row">
                    {/* Product */}
                    {/* Product */}
                    {/* Product */}
                </div>
            </div>
        </div>
    )
}

export default Home
