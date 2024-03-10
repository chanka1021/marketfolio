import Stepper from "awesome-react-stepper";
import React from "react";
import { TbTextScan2 } from "react-icons/tb";
import { HiOutlinePencil } from "react-icons/hi2";
import { TbPhotoCheck } from "react-icons/tb";
import { TbFlagCheck } from "react-icons/tb";
import { Categories } from "./../data/categories";
import { useAuthContext } from "./../hooks/useAuthContext";
import GeneralInformation from "../components/Insert Listing/GeneralInformation";
import ListingDetails from "../components/Insert Listing/ListingDetails";
import Photos from "../components/Insert Listing/Photos";
import Publish from "../components/Insert Listing/Publish";

function Insert() {
  const { user } = useAuthContext();
  const [category, setCategory] = React.useState(Categories[0]);
  const [city, setCity] =  React.useState(user.city);
  const [address, setAddress] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [photos, setPhotos] = React.useState([]);

  const data = {
    cat : category,
    city : city,
    address : address,
    title : title,
    price : price,
    desc : desc,
    photos : photos
  }

  const GeneralInformationx = (
   <div>
    s
   </div>
  );

  const steps = [
    {
      title: "General Information",
      description: "Fill in the general information for your listing",
      icon: <TbTextScan2 />,
      content: <GeneralInformation setCity={setCity} category={category} city={city} setCategory={ setCategory} address={address} setAddress={setAddress} />,
    },
    {
      title: "Listing Details",
      description: "Add more details to your listing",
      icon: <HiOutlinePencil />,
      content: <ListingDetails price={price}  setPrice = {setPrice} desc = {desc} setDesc = {setDesc} title = {title} setTitle = {setTitle} />,
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
      content: <Publish listing={data}/>,
    },
  ];

  return (
    <div className="w-full xl:px-60 md:px-20 items-center text-lg gap-2 justify-between py-4 ">
      <Stepper>
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
      <button className="bg-red-500" onClick={() => console.log(data)}>res</button>

    </div>
  );
}

export default Insert;
