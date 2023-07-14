import Layout from "./Layout/page";
import { Header, Footer } from "./components";


export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="max-w-6xl mx-auto">
        <div className="mt-28"><Layout /></div>
      </div>
    </main>
  )
}
