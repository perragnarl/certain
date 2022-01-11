import Layout from "../components/Layout/Layout";
import Widget from "../components/Widget/Widget";

export default function Home({ summaries }) {
  return (
    <Layout>
        {summaries.map((summary) => (
          <div key={summary.id}>
            <Widget cols="1" rows="1" background={summary.color}>
              <div className="flex flex-col justify-center h-full items-center">
                <div className="text-7xl font-bold mb-2">{summary.number}</div>
                <div className="text-center text-lg font-semibold">{summary.text}</div>
              </div>
            </Widget>
          </div>
        ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/summaries`);
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