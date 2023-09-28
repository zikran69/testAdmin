import { useEffect, useState } from "react";

const [dataHotel, setDataHotel] = useState();
useEffect(() => {
  fetch("https://6507a74b3a38daf4803f9ee4.mockapi.io/kamar")
    .then((res) => res.json())
    .then(setDataHotel);
});

export const store = {
  dataHotel: dataHotel,
};
