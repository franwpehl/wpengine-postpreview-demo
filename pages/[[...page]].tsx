import { useNextUriInfo } from "@wpengine/headless";
import { Posts } from "../lib/components/Posts";
import { Post } from "../lib/components/Post";


const Page = () => {
    const pageInfo = useNextUriInfo();

    if (!pageInfo) {
        return <></>;
    }
    
if (pageInfo.isPostsPage) {
    return <Posts />;
}

 return <Post />;
};

export default Page;














