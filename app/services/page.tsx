import {ServicesExperience} from '../refresh-experience';
import {Header,Footer} from '../components';
export const metadata={title:'Services',description:"Explore twelve ways an assistant can make your day more manageable. Each service has a clear scope, a useful output, and room for the preferences that make support feel like part of your team.",alternates:{canonical:'/services'}};
export default function Page(){return <><Header/><main id="main-content"><ServicesExperience/></main><Footer/></>}
