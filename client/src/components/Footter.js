import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

const Footter = () => {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-left'>
            <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                &copy; {new Date().getFullYear()} Copyright:{' '}
                <a className='text-dark' href='https://www.instagram.com/bratanov._/'>
                   Братанов Михаил
                </a>
            </div>
        </MDBFooter>
    );
};

export default Footter;