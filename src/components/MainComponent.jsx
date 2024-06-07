import { ProductCardComponent } from "./ProductCardComponent";
import { CTACardComponent } from "./CTACard";

const MainComponent = () => {
  return (
    <main className="py-10">
      <section className="flex flex-wrap justify-center gap-5 my-4">
        <ProductCardComponent />
        <ProductCardComponent />
        <ProductCardComponent />
        <ProductCardComponent />
        <ProductCardComponent />
        <ProductCardComponent />
      </section>
      <section className="flex flex-wrap justify-center gap-5 my-4">
        <CTACardComponent/>
        <CTACardComponent/>
        <CTACardComponent/>
        <CTACardComponent/>
        <CTACardComponent/>
        <CTACardComponent/>
      </section>
    </main>
  );
};

export default MainComponent;
