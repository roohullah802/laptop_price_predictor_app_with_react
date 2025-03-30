import { useEffect, useState } from "react";
import { Laptop2, Weight } from "lucide-react";
import axios from "axios";

export default function LaptopPricePredictor() {
  const [predicted, setPredicted] = useState("")
  const [loading, setLoading] = useState(false)
  const [inputData, setInputData] = useState({
    Company: "Apple",
    TypeName: "Ultrabook",
    Weight: 1.86,
    cpu_brand: "",
    Ram: 8,
    gpu: "",
    os: "",
    Touch_screen: "No",
    IPS_Panel: "Yes",
    screenSize: 15.6,
    screenResolution: "",
    ssd: 0,
    hdd: 0,

  });


  const handleChange = (e) => {
    const { name, value } = e.target;

    const numericFields = ["Weight", "screenSize", "Ram", "hdd", "ssd"];

    setInputData((prev) => ({
      ...prev,
      [name]: numericFields.includes(name) ? (value ? Number(value) : 0) : value,
    }));
  };





  const clickHandle = async () => {
    for (const key in inputData) {
      if (inputData[key] === "" || inputData[key] === undefined) return alert("please fill all the fields")

    }

    try {
      setLoading(true)
      const { data } = await axios.post(
        "https://laptop-price-predictor-5-g38g.onrender.com/predict",
        inputData
      );
      if (data) {
        setPredicted(data.predicted_price)
        setLoading(false)
      }
    } catch (error) {
      console.error("API Error:", error);
      setLoading(false)
    }
  };






  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold flex items-center gap-2 mb-6">
        Laptop Price Predictor <Laptop2 size={40} />
      </h1>
      <div className="w-full max-w-4xl bg-gray-800 mt-6 p-8 rounded-xl shadow-xl">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-lg mb-2">Brand</label>
            <select onChange={handleChange} name="Company" className="Brand p-3 bg-gray-700 rounded-lg w-full text-lg">
              <option>Apple</option>
              <option>HP</option>
              <option>Acer</option>
              <option>Asus</option>
              <option>Dell</option>
              <option>Lenovo</option>
              <option>Chuwi</option>
              <option>MSI</option>
              <option>Microsoft</option>
              <option>Toshiba</option>
              <option>Huawei</option>
              <option>Xiaomi</option>
              <option>Vero</option>
              <option>Razer</option>
              <option>Mediacom</option>
              <option>Samsung</option>
              <option>Google</option>
              <option>Fujitsu</option>
              <option>LG</option>

            </select>
          </div>
          <div>
            <label className="block text-lg mb-2">Type</label>
            <select onChange={handleChange} name="TypeName" className="Type p-3 bg-gray-700 rounded-lg w-full text-lg">
              <option value="Ultrabook">Ultrabook</option>
              <option value="Notebook">Notebook</option>
              <option value="Netbook">Netbook</option>
              <option value="Gaming">Gaming</option>
              <option value="2 in 1 Convertible">2 in 1 Convertible</option>
              <option value="Workstation">Workstation</option>
            </select>
          </div>
          <div>
            <label className="block text-lg mb-2">Weight (kg)</label>
            <input onChange={handleChange} name="Weight" className="p-3 bg-gray-700 rounded-lg w-full text-lg" type="number" defaultValue={1.86} />
          </div>
          <div>
            <label className="block text-lg mb-2">Screen Size (inches)</label>
            <input onChange={handleChange} name="screenSize" className="p-3 bg-gray-700 rounded-lg w-full text-lg" type="number" defaultValue={15.6} />
          </div>
          <div>
            <label className="block text-lg mb-2">Screen Resolution</label>
            <select
              onChange={handleChange}
              name="screenResolution"
              className="p-3 bg-gray-700 rounded-lg w-full text-lg"
            >
              <option value="" selected disabled>Select Resolution</option>
              <option value="1366x768">1366x768</option>
              <option value="1600x900">1600x900</option>
              <option value="1920x1080">1920x1080</option>
              <option value="2560x1440">2560x1440</option>
              <option value="3200x1800">3200x1800</option>
              <option value="3840x2160">3840x2160</option>
              <option value="5120x2880">5120x2880</option>
              <option value="6016x3384">6016x3384</option>
            </select>
          </div>
          <div>
            <label className="block text-lg mb-2">Touchscreen</label>
            <select onChange={handleChange} name="Touch_screen" className="p-3 bg-gray-700 rounded-lg w-full text-lg">
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>
          <div>
            <label className="block text-lg mb-2">IPS Display</label>
            <select onChange={handleChange} name="IPS_Panel" className="p-3 bg-gray-700 rounded-lg w-full text-lg">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div>
            <label className="block text-lg mb-2">CPU</label>
            <select onChange={handleChange} name="cpu_brand" className="p-3 bg-gray-700 rounded-lg w-full text-lg">
              <option value="" selected disabled>select cpu</option>
              <option value="Intel Core i5" defaultValue={"Intel Core i5"}>Intel Core i5</option>
              <option value="Intel Core i7">Intel Core i7</option>
              <option value="AMD Processor">AMD Processor</option>
              <option value="Intel Core i3">Intel Core i3</option>
              <option value="Other Inter Processor">Other Inter Processor</option>
            </select>
          </div>
          <div>
            <label className="block text-lg mb-2">RAM (GB)</label>
            <select onChange={handleChange} name="Ram" className="p-3 bg-gray-700 rounded-lg w-full text-lg">
              <option value="" selected disabled>Select RAM</option>
              <option value="8">8</option>
              <option value="16">16</option>
              <option value="4">4</option>
              <option value="2">2</option>
              <option value="12">12</option>
              <option value="6">6</option>
              <option value="32">32</option>
              <option value="24">24</option>
              <option value="64">64</option>
            </select>
          </div>
          <div>
            <label className="block text-lg mb-2">HDD (GB)</label>
            <select onChange={handleChange} name="hdd" className="p-3 bg-gray-700 rounded-lg w-full text-lg">
              <option value="0" selected>0</option>
              <option value="64">64</option>
              <option value="128">128</option>
              <option value="256">256</option>
              <option value="512">512</option>
              <option value="1024">1024</option>
              <option value="2048">2048</option>
            </select>
          </div>
          <div>
            <label className="block text-lg mb-2">SSD (GB)</label>
            <select onChange={handleChange} name="ssd" className="p-3 bg-gray-700 rounded-lg w-full text-lg">
              <option value="0">0</option>
              <option value="128">128</option>
              <option value="256">256</option>
              <option value="512">512</option>
              <option value="1024">1024</option>
            </select>
          </div>
          <div>
            <label className="block text-lg mb-2">GPU</label>
            <select onChange={handleChange} name="gpu" className="p-3 bg-gray-700 rounded-lg w-full text-lg">
              <option value="" selected disabled>Select GPU</option>
              <option>Nvidia</option>
              <option>AMD</option>
              <option>Intel</option>
            </select>
          </div>
          <div>
            <label className="block text-lg mb-2">Operating System</label>
            <select onChange={handleChange} name="os" className="p-3 bg-gray-700 rounded-lg w-full text-lg">
              <option value="" selected disabled>select OS</option>
              <option value="mac">Mac</option>
              <option value="Other/ no OS/ Linux">Other / No OS / Linux</option>
              <option value="Window">Windows</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button onClick={clickHandle} className="bg-blue-500 hover:bg-blue-600 px-8 py-3 text-lg rounded-lg">
            {loading && <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>}
            Predict Price
          </button>
        </div>
      </div>
      {predicted && <h2 className="text-3xl font-bold mt-6">The Predicted Price of Laptop = {predicted}</h2>}
    </div>
  );
}
