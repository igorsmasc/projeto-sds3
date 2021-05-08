import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";

const Dashboard = () => {
  return (
    <div className="container">
      <h1 className="text-primary py-3">Sales dashboard!</h1>

      <div className="row px-3">
        <div className="col-sm-6">
          <h5 className="text-center text-secondary">Success rate (%)</h5>
          <BarChart />
        </div>
        <div className="col-sm-6">
          <h5 className="text-center text-secondary">Sales share (%)</h5>
          <DonutChart />
        </div>
      </div>

      <div className="py-3">
        <h2 className="text-primary">All Sales</h2>
      </div>

      <DataTable />
    </div>
  );
};

export default Dashboard;
