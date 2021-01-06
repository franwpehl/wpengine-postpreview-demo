import { usePost } from "@wpengine/headless";

export const Post = () => {
    const post = usePost();

    return (
        <article>
            <h1>{post?.title}</h1>
            <div dangerouslySetInnerHTML={{__html: post?.content && ""}} />

        </article>


    );




};