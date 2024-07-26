import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Toppings from ".";

test("Adding and removing toppings.", async () => {
  const user = userEvent.setup();

  render(<Toppings />);
  //* Bütün sos checkboxlarını al
  const toppings = await screen.findAllByRole("checkbox");

  //^ toplam span al
  const total = screen.getByTestId("total");

  //& tüm checkboxların tiksiz olduğunu kontrol et
  toppings.forEach((i) => expect(i).not.toBeChecked);

  //! toplam ücret 0 mı
  expect(total.textContent).toBe("0");

  //*soslardan birine tıkla
  await user.click(toppings[2]);

  //? toplam ücret 1.5 mu?
  expect(total.textContent).toBe("1.5");

  //^ farklı bir sosa tıkla
  await user.click(toppings[4]);

  //~ toplam ücret 3 mü?
  expect(total.textContent).toBe("3");

  //& soslardan birinin tikini kaldır
  await user.click(toppings[4]);

  //? toplam ücret 1.5 mu?
  expect(total.textContent).toBe("1.5");

  //& soslardan birinin tikini kaldır
  await user.click(toppings[2]);

  //! toplam ücret 0 mı
  expect(total.textContent).toBe("0");
});
