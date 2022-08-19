import { Button } from "components/button";
import { ImageUpload } from "components/img";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/input/Input";
import { toast } from "react-toastify";
import { TopCreators } from "components/creator";
import { useAuth } from "components/contexts/auth-context";
import axios from "axios";

const CreatePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { userInfo } = useAuth();

  const { control, setValue, handleSubmit, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      price: "",
      image: "",
      category: "",
      createby: "",
    },
  });

  const createNFT = async (values) => {
    console.log(values);
    try {
      const response = await axios.post("http://localhost:1337/products", {
        Name: values.name,
        Price: values.price,
        Category: values.category,
        image: values.image,
        createby: values.createby,
      });
      console.log(response);
      reset({
        name: "",
        price: "",
        image: "",
        category: "",
        createby: "",
      });
      setSelectedImage(null);
      toast.success("Create NFT successfully!");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setSelectedImage(null);
    }
  };

  useEffect(() => {
    if (!userInfo.address) return;
    async function fetchUserData() {
      setValue("createby", {
        Address: userInfo.address,
        Avatar: userInfo.avatar,
        Name: userInfo.name,
        Wallet: userInfo.price,
        id: userInfo.id,
      });
    }
    fetchUserData();
  }, [
    setValue,
    userInfo.address,
    userInfo.avatar,
    userInfo.id,
    userInfo.name,
    userInfo.price,
  ]);

  const handleSelectImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelectedImage(file);
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    const response = await axios({
      method: "post",
      url: "https://api.imgbb.com/1/upload?key=ba1f1db043890d6ead7a1b777cb35cd5",
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setValue("image", `${response.data.data.url}`);
  };

  const handleDeleteImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container">
      <div className="text-3xl mt-10 mb-10 mx-auto text-center">Create NFT</div>
      <form onSubmit={handleSubmit(createNFT)}>
        <div className="flex gap-x-10 justify-center">
          <div className="flex flex-col gap-y-5 min-w-[500px]">
            <div>
              <label htmlFor="name">Name</label>
              <Input
                id="name"
                name="name"
                control={control}
                placeholder="Enter a name of NFT"
                className="mt-2"
                required
              ></Input>
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <Input
                id="price"
                name="price"
                control={control}
                placeholder="Enter a price in ICX"
                className="mt-2"
                type="number"
                required
              ></Input>
            </div>
            <div>
              <label htmlFor="category">Category</label>
              <Input
                id="category"
                name="category"
                control={control}
                placeholder="Enter your category"
                className="mt-2"
                required
              ></Input>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <ImageUpload
              name="image"
              image={selectedImage}
              onChange={handleSelectImage}
              handleDeleteImage={handleDeleteImage}
              required
            ></ImageUpload>
          </div>
        </div>
        <Button
          type="submit"
          kind="primary"
          className="mx-auto mt-10"
          width="200px"
        >
          Create
        </Button>
      </form>
      <div className="border-t border-t-zinc-400 border-opacity-20 py-10 mt-20">
        <TopCreators></TopCreators>
      </div>
    </div>
  );
};

export default CreatePage;
