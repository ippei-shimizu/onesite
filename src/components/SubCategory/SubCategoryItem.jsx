export const SubCategoryItem = (value = { props: subCategory }) => {
  return (
    <>
      <section className="w-11/12 max-w-7xl mx-auto">
        <ul>
            {value.value.map((sub) => {
              return <li key={sub.id}>
                <p>{sub.name}</p>
              </li>;
            })}
          </ul>
      </section>
    </>
  );
};
