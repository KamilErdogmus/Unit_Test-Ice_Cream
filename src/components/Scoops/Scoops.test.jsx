import React from "react";
import { render, screen } from "@testing-library/react";
import Scoops from "./index";
import userEvent from "@testing-library/user-event";

it("Displaying data fetched from the API on the screen.", async () => {
  render(<Scoops />);

  const images = await screen.findAllByAltText("imagee");
  //* Ekrandaki resimlerin (kartların) sayısı 1den fazla mı?
  expect(images.length).toBeGreaterThanOrEqual(4);
});

it("The impact of adding and removing varieties on the total price.", async () => {
  const user = userEvent.setup();

  render(<Scoops />);

  //!  Bütün ekleme butonlarını al
  const addBtn = await screen.findAllByRole("button", { name: "Add" });
  const delBtn = await screen.findAllByRole("button", { name: "Reduce" });

  //* Toplam fiyat elementini çağır
  const total = screen.getByTestId("total");

  //? Toplam fiyat 0 mı kontrol et
  expect(total).toHaveTextContent(/^0$/);

  //& chocolate'ın ekle butonuna tıkla
  await user.click(addBtn[2]);

  //^ Toplam fiyat 5 mi kontrol et
  expect(total.textContent).toBe("5");

  //~ Vanilla nın ekle butonuna çift tıkla
  await user.dblClick(addBtn[1]);

  //* Toplam fiyat 15 mı kontrol et
  expect(total.textContent).toBe("15");

  //! Vanilla'nın azalt butonuna  tıkla
  await user.click(delBtn[1]);

  //? toplam fiyat 10 mı kontrol et
  expect(total.textContent).toBe("10");

  //! Vanilla'nın azalt butonuna tekrar  tıkla
  await user.click(delBtn[1]);

  //^ toplam fiyat 5 mı kontrol et
  expect(total.textContent).toBe("5");

  //& chocolate'ın azalt butonuna çift tıkla
  await user.dblClick(delBtn[2]);

  //* toplam fiyat 0 mı kontrol et
  expect(total.textContent).toBe("0");
});
