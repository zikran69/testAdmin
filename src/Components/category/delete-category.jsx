import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { global } from "../../assets/context";

export default function DeleteCategory() {
  const dataId = useContext(global).dataId;
  const navigate = useNavigate();
  fetch(`http://localhost:2000/category-delete/${dataId}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => alert(res.message));
  return navigate("/category-page");
  //   setTimeout(() => {
  //     fetch(`http://localhost:2000/categories`)
  //       .then((res) => res.json())
  //       .then(setCategories);
  //   }, 1000);
}
