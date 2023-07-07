import CardTemplate from '../components/CardTemplate';
import carte from '../assets/portfolio/miniatures/miniaCarte.png';

const Home = () => {
    return (
        <div className='flex flex-col flex-wrap w-full max-w-full gap-8 m-auto max-w-screen-2xl'>
            <CardTemplate index={0} image={carte}>
                <p>children</p>
            </CardTemplate>
            <CardTemplate index={1} image={carte}>
                <p>children</p>
            </CardTemplate>
        </div>
    );
};

export default Home;
