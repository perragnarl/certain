import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Widget from "../components/Widget/Widget";

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>People</title>
      </Head>
      <Widget cols="4" rows="1" background="black">
        people
      </Widget>
    </Layout>
  );
}