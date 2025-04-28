import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';


async function fetchData() {
  const data = { user: "John Doe", role: "Admin" };
  return data;
}

export default async function Home() {
  const data =  await fetchData();
  return (
    <div className="dashboard">
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
}