import React from 'react';
import Banner from '../Banner/Banner';
import Works from '../Works/Works';
import Service from '../Service/Service';
import Reands from '../Brands/Reands';
import Feature from '../Feature/Feature';
import Location from '../Location/Location';
import Review from '../Review/Review';
import FAQ from '../FAQ/FAQ';

const reviewsPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Works></Works>
            <Service></Service>
            <Reands></Reands>
            <Feature></Feature>
            <Location></Location>
            <Review reviewsPromise={reviewsPromise}></Review>
            <FAQ></FAQ>

            
        </div>
    );
};

export default Home;