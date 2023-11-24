/* eslint-disable react/prop-types */
const VehicleCard = ({ imageUrl, model, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col h-[350px] ml-4 mb-2">
      {" "}
      {/* Fixed height for the card */}
      <img
        src={imageUrl}
        alt={`Car ${model}`}
        className="rounded-lg mb-4 w-full h-52 object-cover"
      />{" "}
      {/* Fixed height for the image */}
      <div className="flex-grow">
        {" "}
        {/* Content will grow to fill the container */}
        <h3 className="text-lg font-semibold">{model}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default VehicleCard;
