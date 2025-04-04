import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import {useState} from "react";
import {calculateSizes} from "../constants/index.js";
import {useMediaQuery} from "react-responsive";
import {Canvas} from "@react-three/fiber";

const About = ()=>{
        const [hasCopied, setHasCopied] = useState(false);
        const handleCopy = () =>{
        navigator.clipboard.writeText('sagarraj200008@gmail.com');
        setHasCopied(true);
        setTimeout(()=>{
            setHasCopied(false);
    },2000)
    }
    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src = "/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Hi, I'm Sagar Raj.</p>
                            <p className="grid-subtext">I specialize in building scalable applications, designing efficient database solutions, and leveraging AI to create impactful tech solutions.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <div className="w-full sm:h-[276px] h-fit flex justify-center items-center flex-wrap gap-10 p-5 rounded-xl bg-black/30 backdrop-blur-md shadow-2xl">
                            {['js','react','nodejs','java','spring','python','oracle'].map((tech, index) => (
                                <img key={index} src={`/assets/${tech}.png`} alt={tech.alt} className="w-14 h-14 object-contain rounded-2xl" />
                            ))}
                        </div>
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I specialize in JavaScript, React, Oracle, Python, and PL/SQL and ETL Development. with hands-on experience in Node.js, Java, Spring Boot</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[400px] h-fit flex justify-center items-center object-contain">
                            <Globe
                                height={400}
                                width={400}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat:19.0760,
                                    lng:72.8777,
                                    size: 20,
                                    color: "red",
                                    text:"Hey! I'm here"
                                }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">Open to work from anywhere</p>
                            <p className="grid-subtext">Based in Mumbai, India, I am open to remote, hybrid, and on-site opportunities worldwide.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container h-fit">
                        <img src = "/assets/grid3.png" alt="grid-3" className="w-full sm:h-[326px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">My passion for coding.</p>
                            <p className="grid-subtext">Coding isn't just my profession, it's my passion. I love solving complex problems, optimizing workflows, and architecting seamless user experiences through innovative solutions.</p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src = "/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact Me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
                                <p className="lg-text-2xl md-text-xl font-medium text-gray_gradient text-white">sagarraj200008@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;