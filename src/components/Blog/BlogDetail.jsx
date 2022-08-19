import { useRouter } from "next/router";
import { useFetch } from "src/hooks/useFetch";
import { API_URL_M_CMS } from "src/utils/const";

export const BlogDetail = () => {
  const router = useRouter();
  const { data, error, isLoading } = useFetch(
    router.query.id
      ? `${API_URL_M_CMS}/blogs/${router.query.id}`
      : null
  );

  if (isLoading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  console.log(data);
  return (
    <main>
      <h1>{data.title}</h1>
      <p>{data.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${data.body}`,
        }}
      />
    </main>
  );
};
