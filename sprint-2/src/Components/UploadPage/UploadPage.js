import React from 'react';
import './UploadPage.scss';
import UploadPageHero from '../UploadPageHero/UploadPageHero';
import UploadPageInput from '../UploadPageInput/UploadPageInput';

import Header from '../Header/Header';


class UploadPage extends React.Component {
    render () {
        return (
            <section class="main">
                <Header />
                <p className="main__header">Upload Video</p>
                <div className="main--flex">
                    <UploadPageHero />
                    <UploadPageInput />
                </div>
                
            </section>
            
        )
    }
}

export default UploadPage;