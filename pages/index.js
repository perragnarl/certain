import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Widget from "../components/Widget/Widget";

export default function Home() {
  const summaries = [
    {
      id: 1,
      number: 2,
      text: "About to expire",
      color: "green",
    },
    {
      id: 2,
      number: 4,
      text: "Recently renewed",
      color: "sky",
    },
    {
      id: 3,
      number: 12,
      text: "Active certificates",
      color: "purple",
    },
    {
      id: 4,
      number: 7,
      text: "Employees registered",
      color: "rose",
    },
  ]
  return (
    <Layout>
      <Head>
        <title>Certain</title>
      </Head>
      {summaries.map((summary) => (
        <div key={summary.id}>
          <Widget cols="1" rows="1" background={summary.color}>
            <div className="flex flex-col justify-center h-full items-center">
              <div className="text-7xl font-bold mb-2">{summary.number}</div>
              <div className="text-center text-lg font-semibold">
                {summary.text}
              </div>
            </div>
          </Widget>
        </div>
      ))}
    </Layout>
  );
}

// export async function getStaticProps() {
//   const baseUrl = `${window.location.protocol}//${window.location.host}`
//   const res = await fetch(baseUrl+process.env.NEXT_PUBLIC_API_SUMMARY);
//   const data = await res.json();

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       summaries: data,
//     },
//   };
// }
