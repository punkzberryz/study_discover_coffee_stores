import { GetStaticProps, InferGetStaticPropsType } from "next";
import coffeeStoresData from "../../data/coffee-stores.json";

export async function getStaticProps(context: GetStaticProps) {
  const params = context.name;
  console.log("context =", context);
  return {
    props: {
      // coffeeStores:coffeeStoresData.find(coffeeStore=>{
      //   return coffeeStore.id===//dynamic id
      // })
    }, // will be passed to the page component as props
  };
}
const CoffeeStore = () => {
  return <div>Coffee Store Page</div>;
};
export default CoffeeStore;
