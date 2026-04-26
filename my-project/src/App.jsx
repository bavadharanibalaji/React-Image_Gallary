import "./App.css";
import images from "./data";
import ImageCollect from "./ImageCollect";


function App() {
  return(
    <div className="min-h-screen bg-grey-100 p-5 bg-black text-white md:pt-20">
      <h1 className="text-2xl font-bold text-center mb-6 md:text-3xl">Image Gallery</h1>

     <div className="grid grid-cols-1 min-w-max lg:min-w-full sm:grid-cols-1 md:grid-cols-5 h-full gap-4">
      {images.map(function (img){
        return <ImageCollect key={img.id} image={img}/>;
      })}
     </div>
    </div>
  )
}

export default App;
