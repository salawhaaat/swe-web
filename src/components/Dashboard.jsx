const Dashboard = () => {
  return (
    <div className="bg-gray-100 p-6 flex-grow">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-5">
          Dashboard Overview
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {/* Metric 1: Total Number of Vehicles */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-semibold text-lg">Total Vehicles</p>
            <p className="text-3xl">150</p>
          </div>

          {/* Metric 2: Upcoming Maintenance */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-semibold text-lg">Upcoming Maintenance</p>
            <p className="text-3xl">30</p>
          </div>

          {/* Metric 3: Recent Activities */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-semibold text-lg">Recent Activities</p>
            <ul className="list-disc list-inside">
              <li>Vehicle #123 serviced</li>
              <li>Vehicle #456 inspected</li>
              {/* Add more activities here */}
            </ul>
          </div>

          {/* Add more metrics as needed */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
