import { useRouter } from "next/router";
import Header from "../../../components/header";
import Link from "next/link";
const Blog = () => {
  const router = useRouter();
  // define a router query with query parameter as 'id'
  // the routing will takes place based on the route query value
  const { id } = router.query;
  return (
    <>
      <Header />
      <h1>The Blog Post id is = {id}</h1>
      <ul>
        {/* first-discussion: is the value passed for
                 query parameter [discussion] 
           the 'as' is a prop that will execute the 'href'
           and will decide where to navigate based on the
           query parameters values          
        */}
        <li>
          <Link
            href="/blog/[id]/[discussion]"
            as={`/blog/${id}/first-discussion`}
          >
            <a>First Discussion Comment</a>
          </Link>
        </li>
        <li>
          <Link
            href="/blog/[id]/[discussion]"
            as={`/blog/${id}/second-discussion`}
          >
            <a>Second Discussion Comment</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Blog;