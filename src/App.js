import Navbar from "./components/Navbar/Navbar"
import TourList from "./components/TourList/TourList"

export default function App() {
  return (
    <div className="bg-gray-800 h-screen">
      <Navbar />
      <TourList />
    </div>
  )
}