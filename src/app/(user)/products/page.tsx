// app/products/page.tsx or similar (server component) example of searchParams
import PageList from "./pageList";
interface Props {
  searchParams: {
    category?: string;
    sort?: string;
    page?: string;
  };
}

const Products = async ({ searchParams }: Props) => {
  const { category, sort, page } = searchParams || {};

  return (
    <>
      <PageList />
      <h1>
        category: {category} and sorting order is: {sort} and is in page no:{" "}
        {page}
      </h1>
    </>
  );
};

export default Products;
