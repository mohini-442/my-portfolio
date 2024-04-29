import Headersec from "./components/Headersec";
import Mynav from "./components/Mynav";
import Myskills from "./components/Myskills";
import "./globals.css";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Mynav />
        <Headersec />
        <Myskills/>
      </div>
    </>
  );
}
