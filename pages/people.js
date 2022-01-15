import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Table from "../components/Table/Table";
import Widget from "../components/Widget/Widget";

export default function Home({ peopleColumns, peopleData }) {
  console.log(peopleColumns.columns, peopleData.data);
  return (
    <Layout>
      <Head>
        <title>People</title>
      </Head>
      <Widget cols="4" rows="1" background="white">
        <Table columns={peopleColumns.columns} data={peopleData.data} />
      </Widget>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/people`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      peopleData: data[0],
      peopleColumns: data[1]
    },
  };
}
