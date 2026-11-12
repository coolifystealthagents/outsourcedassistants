import {Library} from '../library';
import {normalizePosts} from '../library-normalize';
import {blogPostsNewestFirst} from '../data';
import {Header,Footer} from '../components';
export const metadata={title:'Blog',alternates:{canonical:'/blog'}};
export default function Page(){return <><Header/><main id="main-content"><Library kind="blog" posts={normalizePosts(blogPostsNewestFirst,"blog")} pageSize={20} archive/></main><Footer/></>}
