
import { Page } from "../components/page";
import { client } from "../tina/__generated__/databaseClient";

export default async function Home(props) {
  const res = await client.queries.page({ relativePath: `home.mdx` });
  // https://github.com/vercel/next.js/issues/47447
  const data = JSON.parse(JSON.stringify(res.data));

  return (
    <Page
      data={data}
      query={res.query}
      variables={res.variables}
    />
  );
}
