import axios from "axios";
import { ArtistCard } from "components/artist-card";
import { Card } from "components/card";
import { useAuth } from "components/contexts/auth-context";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ArtistDetailPage = () => {
  const { userInfo } = useAuth();
  const params = useParams();
  const [creatorInfo, setCreatorInfo] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `http://localhost:1337/creators/${params.id}`
      );
      setCreatorInfo(response.data);
      setProducts(response.data.create);
    }
    fetchData();
  }, [params.id]);
  console.log(products);
  return (
    <div className="my-10 mx-auto">
      <h1 className="font-semibold !text-center text-xl mb-10">
        {creatorInfo.Name}'s products collection
      </h1>
      <div className="container flex">
        <div className="flex-1 max-w-[320px]">
          <ArtistCard
            name={creatorInfo.Name}
            address={creatorInfo.address}
            avatar={creatorInfo.avatar}
            products={creatorInfo?.create?.length}
            isYou={creatorInfo.id === userInfo.id}
          ></ArtistCard>
        </div>
        <div className="flex-1 gap-4 flex-wrap flex">
          {products.map((item) => (
            <Card
              key={item.id}
              to={`/buy/${item.id}`}
              title={item.Name}
              image={item.image}
              price={item.Price}
              address={creatorInfo.address}
              avatar={creatorInfo.avatar}
            ></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistDetailPage;
