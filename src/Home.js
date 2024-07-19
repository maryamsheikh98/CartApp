import React from 'react';
import Itemcard from './Itemcard';
import data from './data';
import './App.css'; 

const Home = () => {
    return (
        <div className="mt-5">
            <h1 className="header text-center mt-3 fs-1">ALL ITEMS</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {data.productData.map((item, index) => {
                        return (
                            <Itemcard
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                                price={item.price}
                                item={item}
                                key={index}
                            />
                        )
                    })}
                </div>
            </section>
        </div>
    );
};

export default Home;