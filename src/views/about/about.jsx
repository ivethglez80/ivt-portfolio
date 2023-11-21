import React from "react";
import { FormattedMessage } from "react-intl";
import "./../../App.css";
import dots from "./../../img/blueDotsDouble.png";
import avatar from "./../../img/heronight2.png";
import hero from "./../../img/heronight.png";
import hero3 from "./../../img/heronight3.png";
import hero4 from "./../../img/heronight4.png";
import hero5 from "./../../img/heronight5.png";
import hero6 from "./../../img/heronight6.png";
import hero7 from "./../../img/heronight7.png";
import avatarSm from "./../../img/heronight2Sm.png";
import heroSm from "./../../img/heronightSm.png";
import hero3Sm from "./../../img/heronight3Sm.png";
import hero4Sm from "./../../img/heronight4Sm.png";
import hero5Sm from "./../../img/heronight5Sm.png";
import hero6Sm from "./../../img/heronight6Sm.png";
import hero7Sm from "./../../img/heronight7Sm.png";

const About = () => {
    return (
        <div className=" md:grid md:grid-cols-2 animate-fadeIn  md:pt-[80px]">



            <div className="z-1 text-slate-300 text-start md:py-auto md:ml-10 md:mr-10">
                <h2 className="font-title font-bold text-2xl md:text-3xl mt-5 ml-5 md:ml-0 md:mt-0">
                    <FormattedMessage id="about.title" defaultMessage="ACERCA DE MI" />
                </h2>

                <div className="border-t border-sky-500 my-4 border-2 ml-5 mr-10 md:ml-0 md:mr-20 mb-5"></div>

                <div className="mx-5 md:mx-0">
                <p className="font-txt text-xs md:text-base">
                    <FormattedMessage id="about.p1" defaultMessage="Un gran interes por la programación desde joven, me llevó a aprender sobre tecnologías para prosperar en el mundo de la informática." />
                </p><br/>
                <p className="font-txt text-xs md:text-base">
                    <FormattedMessage id="about.p2" defaultMessage="Mientras estudiaba Ciencias de la Computación en la universidad, mi vida dio un giro inesperado, lo que me llevó a alejarme de mi sueño por un tiempo. Exploré otros entornos de trabajo no relacionados al mundo IT, campos diversos en los que conocí personas de las que aprendí mucho, tanto profesional como personalmente. Esta experiencia me llevó a desarrollar muchas de mis habilidades como:  resolucion eficiente de problemas, disciplina y resiliencia por mencionar algunas. Encontré obstáculos que resolví de manera eficiente y satisfactoria para alcanzar mis objetivos y los de las empresas para las que trabaje. Me encantaría contarte más sobre esto en una entrevista." />
                </p><br/>
                <p className="font-txt text-xs md:text-base">
                    <FormattedMessage id="about.p3" defaultMessage="Ahora, después de invertir tiempo y esfuerzo para volver al camino correcto y a través de proyectos autodirigidos, me he convertido en un candidato valioso para ser parte de tu equipo de desarrollo." />
                </p>
                </div>

            </div>

            <div className="absolute top-0 left-0 w-full h-screen z-[-1]">
                <img src={dots} alt="blue dots" className="w-full h-full object-cover" />
            </div>


            <div className="mt-5 hidden md:block md:z-[-1]"> {/*todos los iconos y avatar en lg screen*/}
            
            <div className="absolute top-0 left-0 w-full h-screen">
                <img src={avatar} alt="avatar" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-0 left-0 w-full h-screen">
                <img src={hero} alt="logo1" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-0 left-0 w-full h-screen ">
                <img src={hero3} alt="logo2" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-0 left-0 w-full h-screen">
                <img src={hero4} alt="logo3" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-0 left-0 w-full h-screen">
                <img src={hero5} alt="logo4" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-0 left-0 w-full h-screen">
                <img src={hero6} alt="logo5" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-0 left-0 w-full h-screen">
                <img src={hero7} alt="logo6" className="w-full h-full object-cover" />
            </div>

            </div>

            <div className="md:hidden relative "> {/*iconos +avatar en small screen */}
            <div className="relative h-[380px]">
                <img src={avatarSm} alt="avatar" className="absolute"/>
                <img src={hero} alt="avatar" className="absolute"/>
                <img src={hero3Sm} alt="avatar" className="absolute"/>
                <img src={hero4Sm} alt="avatar" className="absolute"/>
                <img src={hero5Sm} alt="avatar" className="absolute"/>
                <img src={hero6Sm} alt="avatar" className="absolute"/>
                <img src={hero7Sm} alt="avatar" className="absolute"/>
            </div>    
            </div>

        </div>
    )
};

export default About;