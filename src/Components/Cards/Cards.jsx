import React from "react";
import Card from "../../Elements/Card/Card";
import "./cards.css";

const Cards = () => {
  return (
    <div className="container cards__container">
      <Card
        imgLink="https://i.picsum.photos/id/1014/6016/4000.jpg?hmac=yMXsznFliL_Y2E2M-qZEsOZE1micNu8TwgNlHj7kzs8"
        title="Lorem, ipsum dolor"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolorem fugiat libero repellendus sequi veritatis"
      />
      <Card
        imgLink="https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk"
        title="Sit amet consectetur"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolorem fugiat libero repellendus sequi veritatis"
      />
      <Card
        imgLink="https://i.picsum.photos/id/1012/3973/2639.jpg?hmac=s2eybz51lnKy2ZHkE2wsgc6S81fVD1W2NKYOSh8bzDc"
        title="Adipisicing elit"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolorem fugiat libero repellendus sequi veritatis"
      />
    </div>
  );
};

export default Cards;
