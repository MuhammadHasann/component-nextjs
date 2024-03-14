import CategoryList from "./CategoryList";

const Category = () => {
  return (
    <section className="w-full h-dvh bg-light">
      <div className="container">
        <ul className="flex flex-col justify-center items-center w-full h-dvh">
          <CategoryList title="Google" href="#" />
          <CategoryList title="Facebook" href="#" />
          <CategoryList title="Youtube" href="#" />
          <CategoryList title="Twitter" href="#" />
          <CategoryList title="Instagram" href="#" />
        </ul>
      </div>
    </section>
  );
};

export default Category;
