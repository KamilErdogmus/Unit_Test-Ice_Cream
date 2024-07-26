import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";

test("The button's enabled state depends on the condition's approval status.", () => {
  //* 1-Test edilecek bieleşen render edilir
  render(<Form />);

  //? 2-Gerekli elementler çağrılır(checkbox||button)
  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  //^ 3- Checkbox tiklenmemiş mi kontrol et
  expect(checkbox).not.toBeChecked();

  //~ 4- Buton inaktif mi kontrol et
  expect(button).toBeDisabled();

  //& 5- Checkbox'ı tikle
  fireEvent.click(checkbox);

  //! 6- Buton aktif mi kontrol et
  expect(button).toBeEnabled();

  //* 7-Checkbox tikini kaldır
  fireEvent.click(checkbox);

  //? 8-Buton inaktif mi kontrol et
  expect(button).toBeDisabled();
});

test("The notification is displayed based on the button's hover state.", () => {
  //* 1-Formu renderla
  render(<Form />);
  //? 2-Gerekli elementleri al
  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");
  const notify = screen.getByText(/deliver anything/i);

  //& 3- Bildirim ekranda olmadığını kontrol et
  expect(notify).not.toBeVisible();

  //^ 4- Checkbox'ı tikle
  fireEvent.click(checkbox);

  //~ 5- Mouse butonunu üzerine getir
  fireEvent.mouseEnter(button);

  //! 6- Ekranda bildirim var mı kontrol et
  expect(notify).toBeVisible();

  //* 7- Mouse butondan çek
  fireEvent.mouseLeave(button);

  //? 8- Bildirimlerin ekranda olmadığını kontrol et
  expect(notify).not.toBeVisible();
});
