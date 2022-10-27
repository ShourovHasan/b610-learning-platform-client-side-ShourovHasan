import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div className='mb-5 pb-5'>
            <h2>Here is our Terms and Conditions</h2>
            <ul>
                <li>
                    The website is for the personal use of the members of the American International University-Bangladesh (AIUB) community.
                </li>
                <li>
                    The website may not be used for any commercial purpose.
                </li>
                <li>
                    The website is provided "as is" and AIUB makes no representations or warranties of any kind, express or implied, as to the operation of the website or the information, content, materials, or products included on the website.
                </li>
                <li>
                    To the full extent permissible by applicable law, AIUB disclaims all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose.
                </li>
                <li>
                    AIUB will not be liable for any damages of any kind arising from the use of the website, including, but not limited to, direct, indirect, incidental, punitive, and consequential damages.
                </li>
                <li>
                    The website contains links to other websites. AIUB is not responsible for the content of these linked websites and does not make any representations or warranties regarding the accuracy or completeness of the information on these websites.
                </li>
                <li>
                    The website may be unavailable from time to time.
                </li>
            </ul>
            <p>Go back to: <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;