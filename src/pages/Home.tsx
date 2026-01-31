import './pages.css'
import Carousel from '../components/Carousel';

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Carousel
                images={["/images/inu1.jpg", "/images/inu2.png", "/images/inu3.jpg"]}
                width={600}
                height={320}
            />
        </div>
    );
}