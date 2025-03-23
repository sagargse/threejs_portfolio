import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import {useState} from "react";
import ReactLogo from "../components/ReactLogo.jsx";
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
                            <p className="grid-subtext">Full Stack Developer, AI Enthusiast, and a Tech Enthusiast.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        {/*<img src = "/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/>*/}
                        <Canvas>
                            <group>
                        <ReactLogo scale={-0.2} position={[0,0,0]}/>
                            </group>
                        </Canvas>
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I Specialized in Javascript, React, Oracle.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
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
                            <p className="grid-subtext">I am based in Mumbai, India, with remote work available.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src = "/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">My passion for coding.</p>
                            <p className="grid-subtext">I am a passionate coder who thrives on solving complex problems and creating innovative solutions.</p>
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