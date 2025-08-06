import { Categories } from "./Categories";
import { FoodCategories } from "./FoodCategories";
import { SearchContent } from "./SearchContent";

export const MainContent = () => {
    return (
        <section className="mailContent">
            <SearchContent></SearchContent>
            <Categories></Categories>
            <FoodCategories></FoodCategories>
        </section>
    );
};