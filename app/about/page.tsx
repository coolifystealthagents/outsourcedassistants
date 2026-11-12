import {DistinctAbout} from '../distinct-pages';
import d from '../refresh-data.json';
import {Team} from '../inner-pages';
import {Header,Footer} from '../components';
export const metadata={title:'About',alternates:{canonical:'/about'}};
export default function About(){return <><Header/><main id="main-content"><DistinctAbout/></main><Footer/></>}
