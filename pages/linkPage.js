import MyNav from "../Components/myNav";
import MyFooter from "../Components/footer";
import Testimonial from "../Components/testimonial";

export default function LinkPage() {
  return (
    <div>
      <main>
        <MyNav />
        <Testimonial />
      </main>
      <MyFooter />
    </div>
  );
}
