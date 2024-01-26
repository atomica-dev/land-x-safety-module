
// import "../app/globals.css";
// import databaseClient from '../tina/__generated__/databaseClient'
// import { Page } from "../components/page";
// import { Faq } from "../components/faq";


// enum Template {
//   Page,
//   Faq,
// }
export default function P() { return <>No</>; }
// export default function HomePage(
//   props: AsyncReturnType<typeof getStaticProps>['props']
// ) {
//   console.log('rop', props.template, props.home);
//   if (props.template === Template.Faq) {
//     return (<Faq
//       // https://github.com/vercel/next.js/issues/47447
//       data={JSON.parse(JSON.stringify(props.data))}
//       query={props.query}
//       variables={props.variables}
//       pageData={props.pageData}
//     />);
//   }

//   return (
//     <Page
//       // https://github.com/vercel/next.js/issues/47447
//       data={JSON.parse(JSON.stringify(props.data))}
//       query={props.query}
//       variables={props.variables}
//     />
//   );
// }

// export const getStaticProps = async ({ params }) => {
//   console.log('para', params);

//   const pathname = params.filename;

//   const faq = await databaseClient.queries.faq({ relativePath: `${pathname}.md` }).catch();
//   const page = await databaseClient.queries.page({ relativePath: `${!pathname ? "home" : pathname}.md` }).catch();
//   const home = await databaseClient.queries.page({ relativePath: `home.md` });
// console.log('fa', faq);
//   const result = faq || page;
//   const resultTemplate = faq ? Template.Faq : Template.Page;

//   if (!result) {
//     return { fallback: true };
//   }

//   return {
//     props: {
//       data: result.data,
//       query: result.query,
//       variables: result.variables,
//       template: resultTemplate,
//       pageData: home.data,
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   const pagesListData = await databaseClient.queries.pageConnection();

//   return {
//     paths: pagesListData?.data.pageConnection.edges?.map((page) => ({
//       params: { filename: page?.node?._sys.filename },
//     })),
//     fallback: false,
//   }
// }

// export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
//   T extends (...args: any) => Promise<infer R> ? R : any