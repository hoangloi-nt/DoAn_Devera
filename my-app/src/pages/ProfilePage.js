import { CopyIcon } from "assets/img/icons/copyIcon";
import axios from "axios";
import { Button } from "components/button";
import { useAuth } from "components/contexts/auth-context";
import { ImageUpload } from "components/img";
import Input from "components/input/Input";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import copyToClipBoard from "utils/copyToClipBoard";

const ProfilePage = () => {
  const { userInfo } = useAuth();
  const [selectedImage, setSelectedImage] = useState(null);
  const [avatar, setAvatar] = useState("");

  const { control, setValue, getValues, handleSubmit, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      address: "",
      avatar: "",
      wallet: "",
      products: "",
    },
  });

  const imageUrl = getValues("avatar");

  async function updateCreator(id, data) {
    try {
      await axios.put(`http://localhost:1337/creators/${id}`, {
        Name: data.name,
        Avatar: data.avatar,
        Wallet: userInfo.price,
      });
      // console.log(response);
      toast.success("Update information successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Update failed!", error.message);
    }
  }

  async function createCreator(data) {
    try {
      await axios.post(`http://localhost:1337/creators`, {
        Address: data.address,
        Name: data.name,
        Wallet: userInfo.price,
        Avatar: data.avatar,
      });
      // console.log(response);
      toast.success("Update information successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Update failed!", error.message);
    }
  }

  const updateProfile = async (values) => {
    console.log(values);
    let checkCreator = false;
    const response = await axios.get("http://localhost:1337/creators");
    response.data.forEach((doc) => {
      if (doc.Address === userInfo.address) {
        updateCreator(doc.id, values);
        checkCreator = true;
      }
    });
    if (!checkCreator) {
      createCreator(values);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:1337/creators");
        response.data.forEach((doc) => {
          if (doc.Address === userInfo.address) {
            reset({
              name: doc.Name,
              address: userInfo.address,
              wallet: userInfo.price,
            });
            setAvatar(doc.Avatar);
          } else {
            reset({
              address: userInfo.address,
              wallet: userInfo.price,
            });
          }
        });
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [imageUrl, reset, userInfo.address, userInfo.price]);

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
    setValue("avatar", `${response.data.data.url}`);
  };

  const handleDeleteImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container">
      <div className="text-3xl mt-10 mb-10 mx-auto text-center">Profile</div>
      <form onSubmit={handleSubmit(updateProfile)}>
        <div className="flex gap-x-10 justify-center">
          <div className="flex flex-col gap-y-5 min-w-[500px]">
            <div>
              <label htmlFor="name">Name</label>
              <Input
                id="name"
                name="name"
                control={control}
                placeholder="Enter your name"
                className="mt-2"
              ></Input>
            </div>
            <div>
              <label htmlFor="wallet">Wallet (ICX)</label>
              <Input
                id="wallet"
                name="wallet"
                control={control}
                className="mt-2"
                disabled
              ></Input>
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="address">Address</label>
              <div className="flex justify-center items-center gap-x-2">
                <Input
                  id="address"
                  name="address"
                  control={control}
                  className=""
                  disabled
                ></Input>
                <Button
                  type="button"
                  kind="secondary"
                  className="!mb-0"
                  height={"48px"}
                  onClick={() => copyToClipBoard(userInfo.address)}
                >
                  <CopyIcon></CopyIcon>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <ImageUpload
              name="avatar"
              image={selectedImage}
              onChange={handleSelectImage}
              handleDeleteImage={handleDeleteImage}
              avatar={avatar}
              // required
            ></ImageUpload>
          </div>
        </div>
        <Button
          type="submit"
          kind="primary"
          className="mx-auto mt-10"
          width="200px"
        >
          Update
        </Button>
      </form>
    </div>
  );
};

export default ProfilePage;
