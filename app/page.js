import Navbar from './components/Navbar';
import Footer from './components/Footer';


async function fetchData() {
  const data = { user: "John Doe", role: "Admin" };
  return data;
}

export default async function Home() {
  const data =  await fetchData();
  console.log(data);
  return (
    <div className="dashboard">
      <Navbar />
      <main className="main-content">
        <h1>Dashboard</h1>
        <h2>Welcome, {data.user}</h2>
        <p>Role: {data.role}</p>
      </main>
      <Footer />
    </div>
  );
}