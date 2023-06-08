export const getStaticPaths = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  const paths = data.map((element) => {
    return {
      params: { pageno: element.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.pageno;
  // const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const res = await fetch(`https://fakestoreapi.com/products/` + id);
  const data = await res.json();
  console.log('DATA', data);
  return {
    props: {
      data,
    },
  };
};
const myData = ({ data }) => {
  const { id, category, description } = data;
  return (
    <>
      <h4>{category}</h4>
      <div
        style={{
          textAlign: 'center',
          padding: '50px',
          cursor: 'pointer',

          border: '2px solid white',
        }}
      >
        <div key={id}>
          <h4>{description}</h4>
        </div>
      </div>
    </>
  );
};

export default myData;
