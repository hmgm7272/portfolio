import './pages.css'
import Carousel from '../components/Carousel';

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Carousel
                images={["/images/IMG_5959.jpg", "/images/IMG_6790.jpg"]}
                width={600}
                height={320}
            />
        </div>
    );
}