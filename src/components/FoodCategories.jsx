import { ActiveUsers } from "./ActiveUsers";
import { AnimalIcons } from "./AnimaIcons";
import { ImgAnimal } from "./ImgAnimal";
import { TitleAnimals } from "./TitleAnimals";
import Cat from '../assets/Cat.svg';
import Dog from '../assets/Dog.svg';
import Parrot from '../assets/Parrot.svg';
import Fish from '../assets/Fish.svg';
import Horse from '../assets/Horse.svg';
import Rabbit from '../assets/Rabbit.svg';
import Hen from '../assets/Hen.svg';
import Tortoise from '../assets/Tortoise.svg';

export const FoodCategories = () => (
    <section className="Categories">
        <TitleAnimals></TitleAnimals>
        <AnimalIcons>
            <ImgAnimal img={Cat} />
            <ImgAnimal img={Dog} />
            <ImgAnimal img={Parrot} />
            <ImgAnimal img={Fish} />
            <ImgAnimal img={Horse} />
            <ImgAnimal img={Rabbit} />
            <ImgAnimal img={Hen} />
            <ImgAnimal img={Tortoise} />
        </AnimalIcons>
        <ActiveUsers></ActiveUsers>
    </section>
)