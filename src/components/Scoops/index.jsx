import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card";

const Scoops = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3013/scoops").then((res) => setData(res.data));
  }, []);
  const addToBasket = (item) => {
    //* Sepette eleman var mı kontrol et
    const found = basket.find((i) => i.id === item.id);

    if (found) {
      //? Güncel nesneyi oluştur
      const updated = { ...found, amount: found.amount + 1 };
      //& diziyi güncelle
      const temp = basket.map((i) => (i.id === found.id ? updated : i));
      //! State güncelle
      setBasket(temp);
    } else {
      //^ Yoksa sepete ekle
      setBasket([...basket, { ...item, amount: 1 }]);
    }
  };

  const removeFromBasket = (id) => {
    //* Sepette eleman var mı kontrol et
    const found = basket.find((i) => i.id === id);

    if (found && found.amount > 1) {
      //? Güncel nesneyi oluştur
      const updated = { ...found, amount: found.amount - 1 };
      //& diziyi güncelle
      const temp = basket.map((i) => (i.id === found.id ? updated : i));
      //! State güncelle
      setBasket(temp);
    } else {
      //^ Yoksa sepetten çıkar
      setBasket(basket.filter((i) => i.id !== id));
    }
  };

  //* 'basket' dizisindeki her bir öğenin miktarını ve fiyatını toplamak için reduce fonksiyonunu kullanıyoruz
  const total = basket.reduce((total, i) => {
    //! 'total' birikimli toplamı temsil eder, başlangıç değeri 0'dır
    //? 'i' ise 'basket' dizisindeki her bir öğeyi temsil eder
    //& 'i.amount' öğenin miktarını ifade eder
    //^ Her öğenin miktarını 5 ile çarparak toplam değeri elde ederiz
    //~ Bu değeri 'total' birikimli toplamına ekleriz
    return total + i.amount * 5;
  }, 0); //* '0' reduce fonksiyonunun başlangıç değeridir

  return (
    <div className="mt-3 ">
      <div className="bg-dark fit p-4 border m-auto rounded">
        <h1>Ice Cream Flavors</h1>
        <p>
          Per Scoop Price: <span className="text-success">$5</span>
        </p>
        <h3>
          Total Scoop Price: <span className="text-success">$</span>
          <span data-testid="total" className="text-success">
            {total}
          </span>
        </h3>
      </div>

      <div className="row gap-5 p-3 mt-4 justify-content-evenly ">
        {data.map((i) => {
          const found = basket.find((item) => item.id === i.id);
          return (
            <Card
              addToBasket={addToBasket}
              amount={found?.amount || 0}
              removeFromBasket={removeFromBasket}
              key={i.id}
              i={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Scoops;
