import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div className="posts">
      {posts.map((post, idx) => (
        <h3 key={idx}>{post.frontmatter.title}</h3>
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
      posts,
    },
  };
}
