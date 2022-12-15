import { useRouter } from "next/router";

// * Nesse caso podemos ter um conjunto de rotas ao mesmo tempo para carregar esse component
// * EX: /blog/2020/12
export default function BlogPostsPage() {
  const router = useRouter();
  console.log(router.query); // * >> { slug: ['2020', '12'] }
  return <h1>The Blog Posts</h1>;
}
