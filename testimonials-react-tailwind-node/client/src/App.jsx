import { useEffect, useState } from "react"
import Testimonial from "./Testimonial";


function App() {
  const [testimonialData, setTestimonialData] = useState([]);
  const URL = import.meta.env.VITE_APP_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(URL);
        const data = await result.json();
        setTestimonialData(data.testimonials);
        console.log(data.testimonials)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="mx-6 my-10 xl:flex xl:items-center xl:justify-center xl:min-h-screen xl:w-full">
      <div className="xl:w-[75%]">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-4 opacity-1">
          {testimonialData.map((item) => {
            return (
              <Testimonial item={item} key={item.id} />
            )
          })}
        </div>
      </div>
    </main>
  );
}


export default App
