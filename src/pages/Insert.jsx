import React, { useState } from "react";
import Stepper from "awesome-react-stepper";
import { TbTextScan2 } from "react-icons/tb";
import { HiOutlinePencil } from "react-icons/hi";
import { TbPhotoCheck } from "react-icons/tb";
import { TbFlagCheck } from "react-icons/tb";
import { useAuthContext } from "./../hooks/useAuthContext";
import GeneralInformation from "../components/Insert Listing/GeneralInformation";
import ListingDetails from "../components/Insert Listing/ListingDetails";
import Photos from "../components/Insert Listing/Photos";
import Publish from "../components/Insert Listing/Publish";
import { Button, useToast } from "@chakra-ui/react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useCreateListing } from "../hooks/useCreateListing";

function Insert() {
  const { user } = useAuthContext();
  const [category, setCategory] = useState("null");
  const [city, setCity] = useState(user.city);
  const [address, setAddress] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState([]);
  const toast = useToast();

  const { createListing , isPending , fail } = useCreateListing();

  const data = {
    cat: category.name,
    city: city,
    address: address,
    name: title,
    price: price,
    desc: desc,
    photos: photos,
  };

  const checkFields = () => {
    let errors = [];
    if (category === "") {
      errors.push("Select a category");
    }
    if (city === "") {
      errors.push("Select a city");
    }
    if (address === "") {
      errors.push("Add an address");
    }
    if (title === "") {
      errors.push("Add a title");
    }
    if (price === "") {
      errors.push("Add a price");
    }
    if (desc === "") {
      errors.push("Add a description");
    }
    if (photos.length === 0) {
      errors.push("Add photos");
    }
    setError(errors);
  };

  const submit = async () => {
    checkFields();
    if (error.length === 0) {
        try {
            await createListing(data);
            toast({
                title: "Listing created",
                status: "success",
                duration: 1000,
                isClosable: true
            });
            console.log(data);

        } catch (fail) {
            toast({
                title: "Error",
                description: fail.response?.data?.error || "Failed to create listing",
                status: "error",
                duration: 1000,
                isClosable: true
            });
            console.error("Error creating listing:", fail);
        }
    } 
};



  const steps = [
    {
      title: "General Information",
      description: "Fill in the general information for your listing",
      icon: <TbTextScan2 />,
      content: (
        <GeneralInformation
          setCity={setCity}
          category={category}
          city={city}
          setCategory={setCategory}
          address={address}
          setAddress={setAddress}
        />
      ),
    },
    {
      title: "Listing Details",
      description: "Add more details to your listing",
      icon: <HiOutlinePencil />,
      content: (
        <ListingDetails
          price={price}
          setPrice={setPrice}
          desc={desc}
          setDesc={setDesc}
          title={title}
          setTitle={setTitle}
        />
      ),
    },
    {
      title: "Listing Photos",
      description: "Add good quality photos",
      icon: <TbPhotoCheck />,
      content: <Photos photos={photos} setPhotos={setPhotos} />,
    },
    {
      title: "Listing Publication",
      description: "Publish and boost your listing",
      icon: <TbFlagCheck />,
      content: <Publish error={error} listing={data} />,
    },
  ];

  const submitBtn = (
    <Button
      colorScheme="blue"
      leftIcon={<TbFlagCheck className="mr-2 text-2xl" />}
      isDisabled={error.length !== 0 || isPending}
    >
      {isPending ? "Submitting..." : "Publish"}
    </Button>
  );
  const continueBtn = (
    <Button
      colorScheme="green"
      leftIcon={<GrFormNext className="mr-2 text-2xl" />}
      onClick={checkFields}
    >
      Continue
    </Button>
  );
  const prevBtn = (
    <Button
      colorScheme="red"
      leftIcon={<GrFormPrevious className="mr-2 text-2xl" />}
      onClick={checkFields}
    >
      Previous
    </Button>
  );

  return (
    <div className="w-full xl:px-60 md:px-20 items-center text-lg gap-2 justify-between py-4">
      <Stepper
        backBtn={prevBtn}
        continueBtn={continueBtn}
        submitBtn={submitBtn}
        onContinue={checkFields}
        onSubmit={submit}
        allowClickControl={false}
      >
        {steps.map((step, index) => (
          <div key={index}>
            <div className="flex justify-center pt-5 items-center font-[Poppins] text-lg">
              <a className="text-4xl px-4">{step.icon}</a>
              {step.title}
            </div>
            <span className="w-full">{step.content}</span>
          </div>
        ))}
      </Stepper>
    </div>
  );
}

export default Insert;
