import Image from "next/image";
import DisplayCampaigns from "./components/DisplayCampaigns";
import { StateContext } from "./context";
import { useContext } from "react";
import { time } from "console";

export default function Home() {
  const campaigns = [
    {
      owner: "0x123456789",
      title: "Blog 1",
      description: "This is a description of Blog 1",
      target: "1000",
      deadline: "2022-12-12",
      timePosted: "2h ago",
      likes: "10",
      amountCollected: "500",
      image: "https://via.placeholder.com/450",
      pId: 1,
    },
    {
      owner: "0x123456789",
      title: "Blog 2",
      description: "This is a description of Blog 2",
      target: "2000",
      deadline: "2022-12-12",
      timePosted: "12min ago",
      likes: "20",
      amountCollected: "1000",
      image: "https://via.placeholder.com/150",
      pId: 2,
    },
    {
      owner: "0x123456789",
      title: "Blog 3",
      description: "This is a description of Blog 3",
      target: "3000",
      deadline: "2022-12-12",
      timePosted: "3days ago",
      likes: "100",
      amountCollected: "2000",
      image: "https://via.placeholder.com/150",
      pId: 3,
    },
    {
      owner: "0x123456789",
      title: "Blog 4",
      description: "This is a description of Blog 4",
      target: "4000",
      deadline: "2022-12-12",
      timePosted: "3days ago",
      likes: "120",
      amountCollected: "3000",
      image: "https://via.placeholder.com/150",
      pId: 4,
    },
    {
      owner: "0x123456789",
      title: "Blog 5",
      description: "This is a description of Blog 5",
      target: "5000",
      deadline: "2022-12-12",
      timePosted: "5days ago",
      likes: "220",
      amountCollected: "4000",
      image: "https://via.placeholder.com/150",
      pId: 5,
    },
  ];
  return (
    <DisplayCampaigns 
    title="All Blogs"
    isLoading={false}
    campaigns={campaigns}
    />
  );
}
