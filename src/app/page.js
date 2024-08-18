import Image from "next/image";
import Banner from "./component/homepage/Banner/banner";
import Movie from "@/app/component/homepage/productslider"
export default function Home() {
  return (
      <>
      <Banner/>
      <h5 className='heading-left container-fluid pt-5'>Movies & Tv shows </h5>
      <Movie/>
      <h5 className='heading-left container-fluid pt-5'>International Tv Comedies</h5>
      <Movie/>
      <h5 className='heading-left container-fluid pt-5'>Only on Netflix</h5>
      <Movie/>
      <h5 className='heading-left container-fluid pt-5'>New on Netflix</h5>
      <Movie/>
      <h5 className='heading-left container-fluid pt-5'>International Tv Comedies</h5>
      <Movie/>
      </>
  );
}
