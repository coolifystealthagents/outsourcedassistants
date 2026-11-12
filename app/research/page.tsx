import {Library} from '../library';
import {normalizePosts} from '../library-normalize';
import {researchPostsNewestFirst} from '../data';
import {Header,Footer} from '../components';
export const metadata={title:'Research',alternates:{canonical:'/research'}};
export default function Page(){return <><Header/><main id="main-content"><Library kind="research" posts={normalizePosts(researchPostsNewestFirst,"research")}/></main><Footer/></>}
