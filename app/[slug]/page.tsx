
import { Faq } from "../../components/faq";
import { Page } from "../../components/page";
import { client } from "../../tina/__generated__/databaseClient";
import NotFound from "../not-found";

const ROOT_PAGE_NAME = "home";

export default async function Home(props: { params: {slug: string; }}) {
  const slug = props.params.slug.replace("/", "") || ROOT_PAGE_NAME;

  const faqConnection = await client.queries.faqConnection();
  const pageConnection = await client.queries.pageConnection();
  const home = await client.queries.page({ relativePath: `${ROOT_PAGE_NAME}.mdx` });

  let faq, page;

  if (faqConnection.data.faqConnection.edges?.some((item) => item?.node?._sys.filename === slug)) {
    faq = await client.queries.faq({ relativePath: `${slug}.mdx` });
  } else if (pageConnection.data.pageConnection.edges?.some((item) => item?.node?._sys.filename === slug)) {
    page = await client.queries.page({ relativePath: `${slug}.mdx` });
  }

  if (!faq?.data && !page?.data) {
    return <NotFound />;
  }

  if (faq?.data) {
    return (<Faq
      // https://github.com/vercel/next.js/issues/47447
      data={JSON.parse(JSON.stringify(faq.data))}
      query={faq.query}
      variables={faq.variables}
      homeData={JSON.parse(JSON.stringify(home.data))}
    />);
  }

  return (
    <Page
      // https://github.com/vercel/next.js/issues/47447
      data={JSON.parse(JSON.stringify(page.data))}
      query={page.query}
      variables={page.variables}
      homeData={JSON.parse(JSON.stringify(home.data))}
    />
  );
}
/*
export async function generateStaticParams() {
  const faq = await client.queries.faqConnection();
  const page = await client.queries.pageConnection();

  return [...faq.data.faqConnection.edges ?? [], ...page.data.pageConnection.edges ?? []].map((page) => ({
      params: { slug: page?.node?._sys.filename },
    }));
}
*/