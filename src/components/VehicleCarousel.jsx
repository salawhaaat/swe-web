import Slider from "react-slick";
import VehicleCard from "./VehicleCard";

const VehicleCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const vehicles = [
    {
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470951917131-VO6KK2XIFP4LPLCYW7YU/McQueen15.jpg",
      model: "Sedan Excellence",
      description: "A luxurious experience with state-of-the-art technology.",
    },
    {
      imageUrl:
        "data:image/jpeg;base64,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",
      model: "Coupe Performance",
      description: "A sporty ride with exceptional performance and style.",
    },
    {
      imageUrl: "https://robbreport.com/wp-content/uploads/2022/03/1-8.jpg",
      model: "SUV Adventure",
      description: "Rugged and ready for off-road adventures.",
    },
    {
      imageUrl:
        "https://i.pinimg.com/474x/33/c5/8d/33c58d6ad25aa300ca235917f73d512b.jpg",
      model: "Hatchback Compact",
      description: "Compact and efficient, perfect for city driving.",
    },
    {
      imageUrl:
        "https://i.pinimg.com/originals/79/5b/2f/795b2f3de578770c19e6a9fb3add3231.jpg",
      model: "Electric Innovator",
      description: "Leading the charge in electric vehicle technology.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <Slider {...settings}>
        {vehicles.map((vehicle, index) => (
          <VehicleCard
            key={index}
            imageUrl={vehicle.imageUrl}
            model={vehicle.model}
            description={vehicle.description}
          />
        ))}
      </Slider>
    </div>
  );
};

export default VehicleCarousel;
