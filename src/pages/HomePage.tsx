import CardExample from "../components/CardExample/CardExample";
import CarouselHome from "../components/CarouselHome/CarouselHome";

const HomePage = () => {
  return (
    <div className="text-center">
      <CarouselHome />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <CardExample />
          </div>
          <div className="col-md-4">
            <CardExample />
          </div>
          <div className="col-md-4">
            <CardExample />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

