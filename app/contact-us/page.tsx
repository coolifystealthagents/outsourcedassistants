import {ContactExperience} from '../inner-pages';
import {Header,Footer} from '../components';
import StandardContactForm from './StandardContactForm';
export const metadata={title:'Contact Us',description:"Tell us what would make your day easier.",alternates:{canonical:'/contact-us'}};
export default function Contact(){return <><Header/><main id="main-content"><ContactExperience><StandardContactForm endpoint="/api/contact" encoding="form"/></ContactExperience></main><Footer/></>}
