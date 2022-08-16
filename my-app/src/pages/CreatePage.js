import { Button } from "components/button";
import { ImageUpload } from "components/img";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/input/Input";
import { toast } from "react-toastify";
import { TopCreators } from "components/creator";

const CreatePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const { control, setValue, handleSubmit, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      price: "",
      image: "",
    },
  });

  const createNFT = async (values) => {
    try {
      console.log(values);
      reset({
        name: "",
        price: "",
        image: "",
      });
      toast.success("Create NFT successfully!");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleSelectImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelectedImage(file);
    setValue("image", file);
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
