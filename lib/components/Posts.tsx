import { usePosts } from "@wpengine/headless";
import Link from "next/link";

export const Posts = () => {
  const posts = usePosts();

  return (
    <main>
      {posts?.map((post) => (
        <div>
          <Link href={`${post.uri}`}>
            <a href={`${post.uri}`}>
              <h2>{post?.title}</h2>
            </a>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: post?.excerpt ?? "" }} />
        </div>
      ))}
    </main>
  );
};
