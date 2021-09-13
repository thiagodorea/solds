import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import Navbar from "components/Navbar";

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h2 className="text-primary py-3">Dashboard de Vendas</h2>
                <div className="row px3">
                    <div className="col-sm-6">
                        <h5 className="text-secondary">Taxa de Sucesso (%)</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-secondary">Taxa de Sucesso (%)</h5>
                        <DonutChart />
                    </div>
                </div>
                <div className="py-3">
                    <h2 className="text-primary">Todas as Vendas</h2>
                <DataTable />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;