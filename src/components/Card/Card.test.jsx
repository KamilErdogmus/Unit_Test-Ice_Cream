import React from "react";
import { screen, render } from "@testing-library/react";
import Card from ".";
import userEvent from "@testing-library/user-event";
const item = {
  name: "Mint chip",
  imagePath: "/images/mint-chip.png",
  id: "6ccc",
};

//* Prop alan bileşeni tes ediyorsak bileşenin aldığı propları da teste göndermemiz gerekir.
test("The quantity, title, and photo are displayed on the screen according to the received prop.", () => {
  render(
    <Card
      i={item}
      amount={3}
      addToBasket={() => {}}
      removeFromBasket={() => {}}
    />
  );

  //* miktar spanını çağırww
  const amount = screen.getByTestId("amount");

  //! span içeriği 3 mi kontrol et
  expect(amount.textContent).toBe("3");

  //? Chocolate yazısı ekrana geldi mi kontrol et
  screen.getByText("Mint chip");

  //& resim elementini çağır
  const image = screen.getByAltText("imagee");

  //^ resmin kaynağı doğru mu kontrol et
  expect(image).toHaveAttribute("src", "/images/mint-chip.png");
});

test("When the buttons are clicked, the functions work with the correct parameters.", async () => {
  const user = userEvent.setup();
  //! prop olarak gönderilen fonsiyonu test edeceksek jest aracılığla mock func oluşturulur

  const addMockFunc = jest.fn();
  const removeMockFunc = jest.fn();
  render(
    <Card
      i={item}
      amount={5}
      addToBasket={addMockFunc}
      removeFromBasket={removeMockFunc}
    />
  );

  //* Butonları al

  const addBtn = screen.getByRole("button", { name: /add/i });
  const delBtn = screen.getByRole("button", { name: /reduce/i });

  //? ekle butonuna tıkla

  await user.click(addBtn);

  //& addToBasket methodu doğru parametreler ile çalışıyor mu?
  expect(addMockFunc).toHaveBeenCalledWith(item);

  //^ azalt butonuna tıkla
  await user.click(delBtn);

  //! Remove from basket methodu çalışıyor mu?
  expect(removeMockFunc).toHaveBeenCalledWith(item.id);
});

describe("AThe 'Reduce' button is tested for functionality", () => {
  test("Miktar 1 den fazla ise buton aktiftir", () => {
    render(<Card i={item} amount={3} />);

    const button = screen.getByRole("button", { name: /reduce/i });

    expect(button).toBeEnabled();
  });
  test("If the quantity is greater than 0, the button is disabled.", () => {
    render(<Card i={item} amount={0} />);

    const button = screen.getByRole("button", { name: /reduce/i });

    expect(button).toBeDisabled();
  });
});
