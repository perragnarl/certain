import Layout from "../components/Layout/Layout";
import Summary from "../components/widgets/Summary/Summary";

export default function Home({ summaries }) {
  return (
    <Layout>
      {summaries.map((summary) => (
        <Summary number={summary.number} background="bg-lime-200">{summary.text}</Summary>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/summary`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      summaries: data,
    },
  };
}