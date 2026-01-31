import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function About() {
    return (
        <div>
            <h1>About</h1>
            <div className="about-wrapper">
                <img src = "/images/IMG_3322.jpg"className = "about-image"></img>
                <div className="about-sentence">
                    <h2>はまがみ ゆうき</h2>
                    <p>経験言語：processing, js, ts, react</p>
                    <p>趣味：hyperpop, アニソン, アイドル曲, DTM, 耳コピ</p>
                    <FontAwesomeIcon icon={faXTwitter} size="2x" className = "X"/>
                </div>
            </div>
        </div>
    )
}