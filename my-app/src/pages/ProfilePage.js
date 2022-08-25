import { CopyIcon } from "assets/icons/copyIcon";
import axios from "axios";
import { Button } from "components/button";
import { useAuth } from "components/contexts/auth-context";
import { ImageUpload } from "components/img";
import Input from "components/input/Input";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import copyToClipBoard from "utils/copyToClipBoard";

const ProfilePage = () => {
  const { t } = useTranslation();
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
        avatar: data.avatar,
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
        address: data.address,
        Name: data.name,
        Wallet: userInfo.price,
        avatar: data.avatar,
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
      if (doc.address === userInfo.address) {
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
          if (doc.address === userInfo.address) {
            console.log(doc);
            reset({
              name: userInfo.Name || doc.Name,
              address: userInfo.address,
              wallet: userInfo.price,
            });
            setAvatar(doc.avatar);
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
  }, [imageUrl, reset, userInfo.Name, userInfo.address, userInfo.price]);

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

  useEffect(() => {
    document.title = "Profile Page";
  }, []);

  return (
    <div className="container">
      <div className="text-3xl mt-10 mb-10 mx-auto text-center">
        {t("profile")}
      </div>
      <form onSubmit={handleSubmit(updateProfile)}>
        <div className="flex gap-x-10 justify-center">
          <div className="flex flex-col gap-y-5 min-w-[500px]">
            <div>
              <label htmlFor="name">{t("name")}</label>
              <Input
                id="name"
                name="name"
                control={control}
                placeholder="Enter your name"
                className="mt-2"
              ></Input>
            </div>
            <div>
              <label htmlFor="wallet">{t("wallet")} (ICX)</label>
              <Input
                id="wallet"
                name="wallet"
                control={control}
                className="mt-2 text-gray-400"
                disabled
              ></Input>
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="address">{t("address")}</label>
              <div className="flex justify-center items-center gap-x-2">
                <Input
                  id="address"
                  name="address"
                  control={control}
                  className="text-gray-400"
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
            ></ImageUpload>
          </div>
        </div>
        <Button
          type="submit"
          kind="primary"
          className="mx-auto mt-10"
          width="200px"
        >
          {t("artistPage.updateBtn")}
        </Button>
      </form>
    </div>
  );
};

export default ProfilePage;
