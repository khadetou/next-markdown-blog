import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "../components/Post";
import { sortByDate } from "../utils";

export default function Home({ posts }) {
  return (
    <div className="posts">
      {posts.map((post, idx) => (
        <Post key={idx} post={post} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("post"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    // Get front matter
    const markDownWithMeta = fs.readFileSync(
      path.join("post", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markDownWithMeta);

    return { slug, frontmatter };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
