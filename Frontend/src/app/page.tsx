import DisplayCampaigns from "./components/campaign/DisplayCampaigns"

export default function Home() {
  const campaigns = [
    {
      owner: "0x123456789",
      title: "Blog 1",
      description: "Quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte",
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
      description: "Quand un imprimeur anonyme",
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
      description: "Quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte ...more 3",
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
      description: "Quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte ...more 4",
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
      description: "Quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte jajajajjajajajajjaajajjajajajaj aaj uhqhs q sq oiq oqhioqiqi 5",
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
