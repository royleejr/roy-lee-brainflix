import React from 'react';
import './UploadPage.scss';
import UploadPageHero from '../UploadPageHero/UploadPageHero';

import Header from '../Header/Header';


class UploadPage extends React.Component {
    render () {
        return (
            <>  
                <Header />
                <section className="upload-main">
                    <p className="upload-main__header">Upload Video</p>
                    <UploadPageHero />
                </section>
            </>
            
        )
    }
}

export default UploadPage;