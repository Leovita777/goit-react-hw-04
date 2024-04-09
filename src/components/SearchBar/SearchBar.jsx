import { Formik, Form, Field } from "formik";
import { toast } from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    const formattedSearch = values.search.trim().toLowerCase();

    if (!formattedSearch) {
      toast.error("Enter your search term!");
      return;
    }

    onSubmit(formattedSearch);
    actions.resetForm();
  };

  return (
    <header className={css.header}>
      <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
          />
          <button className={css.button} type="submit">
            Search 🔍
          </button>
        </Form>
      </Formik>
    </header>
  );
};
export default SearchBar;
