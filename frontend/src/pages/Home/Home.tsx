import Hero from "../../components/Hero/Hero";
import { PageLayout } from "../../layouts/PageLayout";
export const HomePage = () => {
  return (
    <PageLayout>
      <Hero image="http://theartoffilm.herokuapp.com/images/home.jpg" />
    </PageLayout>
  );
};
