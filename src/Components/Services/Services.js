import React from 'react';
import serviceData from '../../fakeData/servicesData';
import SingleService from './SingleService';

const Services = () => {
    return (
        <section>
            <div className="my-5 text-center">
                <h2 className="brand-title text-center">What we do</h2>
                <h6 className="text-muted p-3">Our main focus is to make the User Experience very 
simple and easy. Simplicity is our Strength.</h6>
<div className="row">
{         serviceData.map((sData) =>(
                    <SingleService sData={sData} key={sData.id}/>
                ))}
</div>

            </div>
            
            
        </section>
    );
};

export default Services;