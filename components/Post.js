import Link from "next/link";
const Post = ({ post }) => {
  const { cover_image, date, title, excerpt } = post.frontmatter;
  return (
    <div className="card">
      <img src={cover_image} alt="cover image" />
      <div className="post-date">Posted on {date}</div>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <Link href={`/blog/${post.slug}`}>
        <a className="btn">Read more</a>
      </Link>
    </div>
  );
};

export default Post;
