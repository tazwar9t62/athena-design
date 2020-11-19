import React from 'react';
import MainNav from './MainNav/MainNav';

const Header = () => {
    return (
        <section className="header-container">
            <MainNav/>
            <div className="row">
                <div className="col-md-6 col-sm-12 px-4">
                    <div className="div p-5">
                    <h2 className="display-2 brand-title">Florence agency</h2>
                    <>
                    <small className="text-muted">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</small> <br/>
                    <button className="btn btn-brand  my-4">See Pricing</button>
                    </>
                    </div>
                </div>
                <div className="col-md-6 px-4">
                <img src="https://i.ibb.co/LNS0QgY/16-Converted-2x.png" className="fluid p-4 w-100" />
            </div>
            </div>
        </section>
    );
};

export default Header;