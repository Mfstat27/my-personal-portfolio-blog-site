import React from 'react';
import PageTitleBanner from '../components/PageTitleBanner';
import { FaGithub } from "react-icons/fa";
import { projects } from "../Data/projects"
import Carousel, {CarouselItem} from '../components/Carousel';


const Projects = () => {
    // const [cards, setCards] = useState(projects)

    return (  
        <section className="website-pages-look-projects">
            <div className='overlay projects'>
                <PageTitleBanner titleName="My Projects" />
                <div className="cards">
                    <Carousel> 
                        {projects.map(({ id, title, desc, github, image, weblink }) => (
                                <CarouselItem>
                                    <div key={id} className="project-info">
                                        <img src={image} alt={title} />
                                        <h4>{title}</h4>
                                        <p className="project-description">{desc}</p>
                                       
                                                <a href={weblink}
                                                target="_blank"
                                                rel="noopenner noreferrer"
                                                className="weblink"
                                                >
                                                    {title}
                                                </a>
                                           
                                            <a
                                                href={github}
                                                target="_blank"
                                                rel="noopenner noreferrer"
                                                className="github"
                                            >
                                                <FaGithub style={{ marginRight: 5 }} /> GitHub
                                            </a>
                                            
                                        
                                        
                                    </div>
                                </CarouselItem> 
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
 
export default Projects;
