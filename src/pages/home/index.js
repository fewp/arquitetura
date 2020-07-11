import React from 'react';
import Header from '../../components/header';
import './styles.css';
import Carousel from 'react-bootstrap/Carousel'
import house1 from '../../assets/img/houses/house1.png'
import house2 from '../../assets/img/houses/house2.png'
import house3 from '../../assets/img/houses/house3.png'
import construction1 from '../../assets/img/constructions/construction1.png'
import construction2 from '../../assets/img/constructions/construction2.png'
import construction3 from '../../assets/img/constructions/construction3.png'
import houseplan1 from '../../assets/img/constructions/houseplan1.jpg'
import houseplan2 from '../../assets/img/constructions/houseplan2.jpg'
import houseplan3 from '../../assets/img/constructions/houseplan3.jpg'
import lottie from 'lottie-web';
import about from '../../assets/animations/about.json';
import plan from '../../assets/animations/plan.json';
import message from '../../assets/animations/message.json';

const Home = () => {
    let animationContainer = React.createRef();
    let animationContainerTwo = React.createRef();
    let animationContainerThree = React.createRef();
    
    React.useEffect(() => {
        lottie.loadAnimation({
            container: animationContainer.current,
            animationData: about,
        });
        
        const animacao = lottie.loadAnimation({
            container: animationContainerTwo.current,
            animationData: plan,
        });
        animacao.setSpeed(0.5);
        lottie.loadAnimation({
            container: animationContainerThree.current,
            animationData: message,
        });
    })
    return (
        <main >
            <Header></Header>
            <div id="carousel-section">
                <Carousel >
                    <Carousel.Item>
                        <img
                        src={house1}
                        alt="Casa 1"
                        />
                        <Carousel.Caption >
                            <h3>Instituto Random</h3>
                            <hr/>
                            <p>Projetado por Lorem Ipsum, <strong>2010</strong>.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        src={house2}
                        alt="Casa 2"
                        />
                        <Carousel.Caption >
                            <h3>Clube 2100</h3>
                            <hr/>
                            <p>Projetado por Lycs, <strong>2019</strong>.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        src={house3}
                        alt="Casa 3"
                        />
                        <Carousel.Caption >
                            <h3>Casa de luxo</h3>
                            <hr/>
                            <p>Projetado por Cleiton Brabo, <strong>2020</strong>.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div id="about">
                <div className="about-container">
                    <div>
                        <h1 className="outlined-text transparent stroke-white">SOBRE</h1>
                        <h1 className="main-text blue">SOBRE</h1>
                    </div>
                    <div id="about-animation" ref={animationContainer}></div>
                </div>
                <div className="about-block">
                    <h2 className="secondary-text">Objetivo</h2>
                    <p>Promover a formação de profissionais com capacidade de compreender e manifestar as necessidades de indivíduos, grupos sociais e comunidade, com relação à concepção, à organização e à construção do espaço interior e exterior, abrangendo o urbanismo, a edificação, o paisagismo, além da conservação e valorização do patrimônio construído, proteção do equilíbrio ambiental e a utilização coerente dos recursos existentes.</p>

                    <h1 className="secondary-text">CAMPOS DE ATUAÇÃO</h1>
                    <p>O Arquiteto Urbanista atua nas áreas de edificações, conjuntos arquitetônicos e monumentos, arquitetura paisagística e de interiores. Exerce atividades de planejamento físico, local, urbano e regional. Suas atividades incluem: supervisão, coordenação e orientação técnicas; - estudo, planejamento, projeto e especificação; estudo de viabilidade técnicoeconômica; assistência, assessoria e consultoria; direção, execução e fiscalização de obra e serviço técnico; vistoria, perícia, avaliação, arbitramento, laudo e parecer técnico. Desempenha cargos e funções técnicas, elaborar orçamentos e cuidar de padronização, mensuração e controle de qualidade. Coordena equipes de instalação, montagem, operação, reparo e manutenção. Executa desenho técnico, e responsabiliza-se por análise, experimentação, ensaio, divulgação e produção técnica especializada.</p>
                    
                    <h1 className="secondary-text">PERFIL DO PROFISSIONAL</h1>
                    <p>O Curso de Bacharelado em Arquitetura e Urbanismo forma arquiteto e urbanista aptos a compreender e traduzir as necessidades de indivíduos, grupos sociais e comunidade, com relação à concepção, organização e construção do espaço exterior e interior, abrangendo a edificação, o urbanismo e o paisagismo nos conceitos da sustentabilidade. A conservação e a valorização do patrimônio construído, proteção do equilíbrio do ambiente natural e à utilização racional dos recursos disponíveis, orientados para a projetação arquitetônica e urbanística.</p>
                    
                    <h1 className="secondary-text">DURAÇÃO DE 5 ANOS</h1>
                    <p>Regime Regular Noturno, de segunda a sexta-feira e aos sábados nos períodos matutino e vespertino. Haverá possibilidades de serem realizadas atividades no período vespertino, durante a semana.</p>
                </div>
            </div>
            
            <div id="achievements">
                <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="184.363" viewBox="0 0 1920 184.363">
                    <g id="Group_3" data-name="Group 3" transform="translate(0)">
                        <path id="Path_6" data-name="Path 6" d="M1920,65.693s-49.439,29.122-94.815,31.153c-46.053,2.032-85.333,0-141.545-10.159-76.529-13.545-224.169-68.4-302.73-38.6s-81.947,31.153-121.9,50.116c-44.7,21.672-135.45,65.016-247.873,62.984C891.259,159.153,673.862,48.762,584.466,54.18c-9.482.677-44.7,5.418-71.111,13.545-25.736,8.127-63.661,25.735-115.132,31.831-21.672,2.709-56.212,7.45-96.169,6.1a574.869,574.869,0,0,1-81.27-10.836c-38.6-8.127-74.5-20.995-107.005-25.058C44.021,62.307,0,73.143,0,73.143V0H1920ZM1766.265,76.529c-4.741-6.772-13.545-2.709-29.122-2.709s-41.312-8.127-39.281-7.45,20.995,10.159,40.635,12.868C1758.815,82.624,1770.328,83.3,1766.265,76.529ZM1641.651,58.243a322.338,322.338,0,0,1-37.926-6.1c-21.672-5.418-69.757-18.963-102.265-23.7-55.534-7.45-107.005,0-102.265.677,5.418.677,65.016-4.063,119.2,7.45,22.349,4.741,62.984,14.9,83.979,18.286A198.915,198.915,0,0,0,1641.651,58.243Zm-387.386-.677c11.513-4.741-90.074,31.831-125.291,41.312-14.222,4.063-41.989,10.836-67.725,13.545-26.413,2.709-60.275,2.709-59.6,3.386,0,1.355,39.28,5.418,75.852,0s35.217-7.45,51.471-10.836C1154.709,99.556,1242.751,62.307,1254.265,57.566ZM1348.4,46.73c1.354,0-5.418-2.709-32.508,7.45s-45.376,23.7-46.73,25.058c-1.354.677,23.7-12.19,44.7-20.317C1334.18,50.794,1347.725,46.73,1348.4,46.73Zm568.212-6.1c-.677.677-12.868,7.45-32.508,16.931s-46.73,18.963-45.376,18.286c1.354,0,23.7-4.063,50.116-16.931S1917.291,39.958,1916.614,40.635ZM211.979,78.561c.677-1.354-12.868-1.354-30.476-8.127S144.931,59.6,128.677,56.889c-27.09-5.418-79.238.677-76.529,1.354,2.032.677,55.534-2.032,84.656,4.741,14.9,3.386,16.254,3.386,38.6,10.836S211.3,80.593,211.979,78.561ZM494.392,62.307C497.1,61.63,518.1,51.471,551.28,44.7c33.185-7.45,60.275-3.386,60.275-5.418s-6.773-6.1-41.989-2.032S491.683,62.984,494.392,62.307ZM484.91,45.376c1.354.677,23.026-8.8,38.6-11.513,15.577-2.032,12.868-3.386,12.868-4.063s-7.45-1.354-18.286,1.354C506.582,34.54,483.556,44.7,484.91,45.376ZM633.9,29.8c.677,1.354,23.7,5.418,37.926,12.19s12.19,4.063,12.868,3.386-5.418-5.418-16.254-8.8C657.608,32.508,633.227,28.444,633.9,29.8ZM442.921,75.175c-.677,2.032,2.032,3.386,12.868-1.354s17.608-8.8,14.9-8.127-6.1,2.709-16.931,5.418C442.243,73.82,443.6,73.143,442.921,75.175Zm-209.27,8.8c-1.355,0,14.222,5.418,22.349,6.1s13.545.677,13.545-1.354-.677-3.386-10.836-2.709C247.873,86.688,235.005,83.979,233.651,83.979ZM1030.772,142.9c-.677.677-16.254-2.032-50.794-2.032-33.862,0-92.106-16.254-116.487-23.7s67.725,26.413,111.746,27.767S1031.45,142.222,1030.772,142.9Z" transform="translate(0)" fill="#fdb733"/>
                        <path id="Path_7" data-name="Path 7" d="M407.055,34.884c-.677-.677-31.153,2.032-48.762,0-49.439-4.741-115.132-21.672-112.423-19.64S338.652,36.238,361,37.593C394.187,40.3,407.732,34.884,407.055,34.884Z" transform="translate(1418.808 87.021)" fill="#fdb733"/>
                        <path id="Path_8" data-name="Path 8" d="M353.327,21.506c-1.354-.677-30.476-6.772-64.339-8.127s-86.011,4.063-83.3,3.386c2.032-.677,39.958-12.19,90.074-8.127S354.681,22.183,353.327,21.506Z" transform="translate(1186.737 44.864)" fill="#fdb733"/>
                        <path id="Path_9" data-name="Path 9" d="M204.52,19.966c-.677-.677,13.545-6.772,21.672-7.45s13.545,0,13.545,2.032-.677,3.386-10.836,2.709C217.388,16.58,205.2,20.643,204.52,19.966Z" transform="translate(1180.454 70.785)" fill="#fdb733"/>
                        <path id="Path_10" data-name="Path 10" d="M272.589,10.631c0-.677-29.8,8.127-42.667,14.9-12.868,6.1-41.989,20.995-41.312,20.995.677.677,28.444-10.836,42.667-17.608S272.589,11.309,272.589,10.631Z" transform="translate(1088.681 61.157)" fill="#fdb733"/>
                        <path id="Path_11" data-name="Path 11" d="M291.954,43.584c-.677-.677-31.153,2.032-48.762,0-49.439-4.741-115.132-21.672-112.423-19.64S223.552,44.938,245.9,46.293C279.087,49,292.632,44.261,291.954,43.584Z" transform="translate(754.395 137.242)" fill="#fdb733"/>
                        <path id="Path_12" data-name="Path 12" d="M41.9,30.863a59.958,59.958,0,0,1,19.64-.677c11.513,1.355,39.28,6.1,55.534,4.741,28.444-2.709,50.116-18.286,47.407-17.608-2.709,0-29.122,14.9-58.243,12.868-12.19-.677-34.54-3.386-45.376-2.709A82.608,82.608,0,0,0,41.9,30.863Z" transform="translate(241.867 99.846)" fill="#fdb733"/>
                        <path id="Path_13" data-name="Path 13" d="M75.6,23c1.355.677,13.545-5.418,29.122-7.45,15.577-1.354,14.222-2.032,14.222-3.386,0-.677-12.19-2.709-23.026,0C85.08,15.553,74.244,22.326,75.6,23Z" transform="translate(435.725 62.33)" fill="#fdb733"/>
                        <path id="Path_14" data-name="Path 14" d="M15.6,13.4c0-.677,29.122,0,45.376,3.386S94.838,29.655,94.838,30.332,76.552,24.914,60.3,20.851C44.722,16.787,16.277,14.078,15.6,13.4Z" transform="translate(90.051 75.996)" fill="#fdb733"/>
                    </g>
                </svg>

                <div className="achievements-content">
                    <h1 className="outlined-text transparent stroke-white">EMPREENDIMENTOS</h1>
                    <h1 className="main-text yellow">EMPREENDIMENTOS</h1>
                    <div className="achievements-content-flex">
                        <div className="card-content">
                            <div className="card">
                                <h3 className="title">Completos</h3>
                                <div>
                                    <h1>100</h1>
                                    <h2>Empreendimentos completos</h2>
                                </div>
                                <div className="bar hundred"></div>
                            </div>
                            <div className="card">
                                <h3 className="title">Em Construção</h3>
                                <div>
                                    <h1>75</h1>
                                    <h2>Empreendimentos em construção</h2>
                                </div>
                                <div className="bar seventy-five"></div>
                            </div>
                            <div className="card">
                                <h3 className="title">Na planta</h3>
                                <div>
                                    <h1>50</h1>
                                    <h2>Empreendimentos na planta</h2>
                                </div>
                                <div className="bar fifty"></div>
                                
                            </div>
                            <div className="card">
                                <h3 className="title">Iniciados</h3>
                                <div>
                                    <h1>25</h1>
                                    <h2>Empreendimentos inciados</h2>
                                </div>
                                <div className="bar twenty-five"></div>
                                
                            </div>
                        </div>
                        <div className="second-box">
                            <div>
                                <h1><span>250</span> projetos!</h1>
                                <h2>Confira como está o andamento dos empreendimentos realizados pelos alunos do nosso curso!</h2>
                            </div>
                            <h2><span>Temos 888 alunos participando de projetos.</span></h2>
                        </div>
                    </div>
                    
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="184.363" viewBox="0 0 1920 184.363"> 
                    <g id="Group_5" data-name="Group 5" transform="translate(0)">
                        <path id="Path_6" data-name="Path 6" d="M0,95.561S49.439,66.439,94.815,64.408c46.053-2.032,85.333,0,141.545,10.159,76.529,13.545,224.169,68.4,302.73,38.6s81.947-31.153,121.9-50.116C705.693,41.381,796.445-1.963,908.868.069c119.873,2.032,337.27,112.423,426.667,107.005,9.481-.677,44.7-5.418,71.111-13.545,25.735-8.127,63.661-25.735,115.132-31.831,21.672-2.709,56.212-7.45,96.169-6.1a574.871,574.871,0,0,1,81.27,10.836c38.6,8.127,74.5,20.995,107.005,25.058C1875.979,98.947,1920,88.111,1920,88.111v73.143H0ZM153.735,84.725c4.741,6.772,13.545,2.709,29.122,2.709s41.312,8.127,39.281,7.45S201.143,84.725,181.5,82.016C161.185,78.63,149.672,77.953,153.735,84.725Zm124.614,18.286a322.342,322.342,0,0,1,37.926,6.1c21.672,5.418,69.757,18.963,102.265,23.7,55.534,7.45,107.005,0,102.265-.677-5.418-.677-65.016,4.064-119.2-7.45-22.349-4.741-62.984-14.9-83.979-18.286A198.913,198.913,0,0,0,278.349,103.011Zm387.386.677c-11.513,4.741,90.074-31.831,125.291-41.312,14.222-4.063,41.989-10.836,67.725-13.545,26.413-2.709,60.275-2.709,59.6-3.386,0-1.355-39.28-5.418-75.852,0s-35.217,7.45-51.471,10.836C765.291,61.7,677.249,98.947,665.736,103.688ZM571.6,114.524c-1.354,0,5.418,2.709,32.508-7.45s45.376-23.7,46.73-25.058c1.355-.677-23.7,12.19-44.7,20.317C585.82,110.461,572.275,114.524,571.6,114.524Zm-568.212,6.1c.677-.677,12.868-7.45,32.508-16.931S82.624,84.725,81.27,85.4c-1.354,0-23.7,4.063-50.116,16.931S2.709,121.3,3.386,120.619ZM1708.021,82.693c-.677,1.354,12.868,1.354,30.476,8.127s36.571,10.836,52.825,13.545c27.09,5.418,79.238-.677,76.529-1.355-2.032-.677-55.534,2.032-84.656-4.741-14.9-3.386-16.254-3.386-38.6-10.836S1708.7,80.662,1708.021,82.693ZM1425.608,98.947c-2.709.677-23.7,10.836-56.889,17.608-33.185,7.45-60.275,3.386-60.275,5.418s6.772,6.1,41.989,2.032S1428.318,98.27,1425.608,98.947Zm9.482,16.931c-1.354-.677-23.026,8.8-38.6,11.513-15.577,2.032-12.868,3.386-12.868,4.063s7.45,1.355,18.286-1.354C1413.418,126.715,1436.444,116.556,1435.09,115.879ZM1286.1,131.455c-.677-1.354-23.7-5.418-37.926-12.19s-12.19-4.063-12.868-3.386,5.418,5.418,16.254,8.8C1262.392,128.746,1286.772,132.81,1286.1,131.455ZM1477.079,86.08c.677-2.032-2.032-3.386-12.868,1.354s-17.609,8.8-14.9,8.127,6.1-2.709,16.931-5.418C1477.757,87.434,1476.4,88.111,1477.079,86.08Zm209.27-8.8c1.355,0-14.222-5.418-22.349-6.1s-13.545-.677-13.545,1.355.677,3.386,10.836,2.709C1672.127,74.566,1684.995,77.275,1686.349,77.275ZM889.228,18.355c.677-.677,16.254,2.032,50.794,2.032,33.862,0,92.106,16.254,116.487,23.7S988.783,17.677,944.762,16.323,888.55,19.032,889.228,18.355Z" transform="translate(0 23.109)" fill="#35a9af"/>
                        <path id="Path_7" data-name="Path 7" d="M245.812,18.543c.677.677,31.153-2.032,48.762,0C344.013,23.283,409.706,40.215,407,38.183S314.214,17.188,291.865,15.834C258.68,13.125,245.135,18.543,245.812,18.543Z" transform="translate(-151.675 43.916)" fill="#35a9af"/>
                        <path id="Path_8" data-name="Path 8" d="M205.713,7.807c1.354.677,30.476,6.772,64.339,8.127s86.011-4.063,83.3-3.386c-2.032.677-39.958,12.19-90.074,8.127S204.358,7.129,205.713,7.807Z" transform="translate(174.224 110.186)" fill="#35a9af"/>
                        <path id="Path_9" data-name="Path 9" d="M239.714,12.339c.677.677-13.545,6.772-21.672,7.45s-13.545,0-13.545-2.032.677-3.386,10.836-2.709C226.846,15.725,239.036,11.662,239.714,12.339Z" transform="translate(295.313 81.273)" fill="#35a9af"/>
                        <path id="Path_10" data-name="Path 10" d="M188.6,46.517c0,.677,29.8-8.127,42.667-14.9,12.868-6.1,41.989-20.995,41.312-20.995-.677-.677-28.444,10.836-42.667,17.608S188.6,45.84,188.6,46.517Z" transform="translate(370.132 66.058)" fill="#35a9af"/>
                        <path id="Path_11" data-name="Path 11" d="M130.712,27.313c.677.677,31.153-2.032,48.762,0,49.439,4.741,115.132,21.672,112.423,19.64S199.114,25.958,176.765,24.6C143.58,21.895,130.035,26.636,130.712,27.313Z" transform="translate(742.939 -23.775)" fill="#35a9af"/>
                        <path id="Path_12" data-name="Path 12" d="M164.711,21.6a59.958,59.958,0,0,1-19.64.677c-11.513-1.355-39.28-6.1-55.534-4.741C61.092,20.247,39.42,35.823,42.129,35.146c2.709,0,29.122-14.9,58.243-12.868,12.19.677,34.54,3.386,45.376,2.709A82.608,82.608,0,0,0,164.711,21.6Z" transform="translate(1371.201 32.053)" fill="#35a9af"/>
                        <path id="Path_13" data-name="Path 13" d="M118.857,10.85c-1.355-.677-13.545,5.418-29.122,7.45-15.577,1.354-14.222,2.032-14.222,3.386,0,.677,12.19,2.709,23.026,0C109.375,18.3,120.211,11.527,118.857,10.85Z" transform="translate(1289.82 88.18)" fill="#35a9af"/>
                        <path id="Path_14" data-name="Path 14" d="M94.838,30.148c0,.677-29.122,0-45.376-3.386S15.6,13.894,15.6,13.217,33.886,18.635,50.14,22.7C65.716,26.762,94.161,29.471,94.838,30.148Z" transform="translate(1719.511 64.818)" fill="#35a9af"/>
                    </g>
                </svg>
            </div>
            <div id="constructions">
                <div className="padding-l-r">
                    <h1 className="outlined-text transparent stroke-white">CONSTRUÇÕES</h1>
                    <h1 className="main-text pink">CONSTRUÇÕES</h1>
                </div>
                <div className="constructions-content">
                    <div id="construction-images">
                        <Carousel >
                            <Carousel.Item>
                                <img
                                src={construction1}
                                alt="Construção 1"
                                />
                                <Carousel.Caption >
                                    <h3>Construção 1</h3>
                                    <hr/>
                                    <p>Uga buga banana, <strong>2010</strong>.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                src={construction2}
                                alt="Construção 2"
                                />
                                <Carousel.Caption >
                                    <h3>oãçurtsnoC 2</h3>
                                    <hr/>
                                    <p>hola muchachos, <strong>2019</strong>.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                src={construction3}
                                alt="Construção 3"
                                />
                                <Carousel.Caption >
                                    <h3>LIXO DE PRÉDIO</h3>
                                    <hr/>
                                    <p>cidade merda, <strong>2020</strong>.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                src={houseplan1}
                                alt="House plan 1"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                src={houseplan2}
                                alt="House plan 2"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                src={houseplan3}
                                alt="House plan 3"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="constructions-block">
                        <div className="constructions-c">
                            <div className="animation-constructions" ref={animationContainerTwo}></div>
                            <h1>Construções<br></br> <strong>e Plantas</strong> </h1>
                        </div>
                        <div className="constructions-c">
                            <p>LITERALMENTE só tem isso nessa porra, vai fazer outro curso seu filho da puta, se for pra ser inútil ao menos faz algo divertido, seu fudido de merda, desgraçado sem família, seu pai ta na prisão por homicídio duplo, porra. Preciso falar mais algo? Acredito que não. Só desiste dessa merda e vai fazer administração, ou nem faz faculdade, tu vai desistir mesmo.</p>
                        </div>
                    </div>
                </div>

                

                <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="184.363" viewBox="0 0 1920 184.363"> 
                    <g id="Group_5" data-name="Group 5" transform="translate(0)">
                        <path id="Path_6" data-name="Path 6" d="M0,95.561S49.439,66.439,94.815,64.408c46.053-2.032,85.333,0,141.545,10.159,76.529,13.545,224.169,68.4,302.73,38.6s81.947-31.153,121.9-50.116C705.693,41.381,796.445-1.963,908.868.069c119.873,2.032,337.27,112.423,426.667,107.005,9.481-.677,44.7-5.418,71.111-13.545,25.735-8.127,63.661-25.735,115.132-31.831,21.672-2.709,56.212-7.45,96.169-6.1a574.871,574.871,0,0,1,81.27,10.836c38.6,8.127,74.5,20.995,107.005,25.058C1875.979,98.947,1920,88.111,1920,88.111v73.143H0ZM153.735,84.725c4.741,6.772,13.545,2.709,29.122,2.709s41.312,8.127,39.281,7.45S201.143,84.725,181.5,82.016C161.185,78.63,149.672,77.953,153.735,84.725Zm124.614,18.286a322.342,322.342,0,0,1,37.926,6.1c21.672,5.418,69.757,18.963,102.265,23.7,55.534,7.45,107.005,0,102.265-.677-5.418-.677-65.016,4.064-119.2-7.45-22.349-4.741-62.984-14.9-83.979-18.286A198.913,198.913,0,0,0,278.349,103.011Zm387.386.677c-11.513,4.741,90.074-31.831,125.291-41.312,14.222-4.063,41.989-10.836,67.725-13.545,26.413-2.709,60.275-2.709,59.6-3.386,0-1.355-39.28-5.418-75.852,0s-35.217,7.45-51.471,10.836C765.291,61.7,677.249,98.947,665.736,103.688ZM571.6,114.524c-1.354,0,5.418,2.709,32.508-7.45s45.376-23.7,46.73-25.058c1.355-.677-23.7,12.19-44.7,20.317C585.82,110.461,572.275,114.524,571.6,114.524Zm-568.212,6.1c.677-.677,12.868-7.45,32.508-16.931S82.624,84.725,81.27,85.4c-1.354,0-23.7,4.063-50.116,16.931S2.709,121.3,3.386,120.619ZM1708.021,82.693c-.677,1.354,12.868,1.354,30.476,8.127s36.571,10.836,52.825,13.545c27.09,5.418,79.238-.677,76.529-1.355-2.032-.677-55.534,2.032-84.656-4.741-14.9-3.386-16.254-3.386-38.6-10.836S1708.7,80.662,1708.021,82.693ZM1425.608,98.947c-2.709.677-23.7,10.836-56.889,17.608-33.185,7.45-60.275,3.386-60.275,5.418s6.772,6.1,41.989,2.032S1428.318,98.27,1425.608,98.947Zm9.482,16.931c-1.354-.677-23.026,8.8-38.6,11.513-15.577,2.032-12.868,3.386-12.868,4.063s7.45,1.355,18.286-1.354C1413.418,126.715,1436.444,116.556,1435.09,115.879ZM1286.1,131.455c-.677-1.354-23.7-5.418-37.926-12.19s-12.19-4.063-12.868-3.386,5.418,5.418,16.254,8.8C1262.392,128.746,1286.772,132.81,1286.1,131.455ZM1477.079,86.08c.677-2.032-2.032-3.386-12.868,1.354s-17.609,8.8-14.9,8.127,6.1-2.709,16.931-5.418C1477.757,87.434,1476.4,88.111,1477.079,86.08Zm209.27-8.8c1.355,0-14.222-5.418-22.349-6.1s-13.545-.677-13.545,1.355.677,3.386,10.836,2.709C1672.127,74.566,1684.995,77.275,1686.349,77.275ZM889.228,18.355c.677-.677,16.254,2.032,50.794,2.032,33.862,0,92.106,16.254,116.487,23.7S988.783,17.677,944.762,16.323,888.55,19.032,889.228,18.355Z" transform="translate(0 23.109)" fill="#FFAC3C"/>
                        <path id="Path_7" data-name="Path 7" d="M245.812,18.543c.677.677,31.153-2.032,48.762,0C344.013,23.283,409.706,40.215,407,38.183S314.214,17.188,291.865,15.834C258.68,13.125,245.135,18.543,245.812,18.543Z" transform="translate(-151.675 43.916)" fill="#FFAC3C"/>
                        <path id="Path_8" data-name="Path 8" d="M205.713,7.807c1.354.677,30.476,6.772,64.339,8.127s86.011-4.063,83.3-3.386c-2.032.677-39.958,12.19-90.074,8.127S204.358,7.129,205.713,7.807Z" transform="translate(174.224 110.186)" fill="#FFAC3C"/>
                        <path id="Path_9" data-name="Path 9" d="M239.714,12.339c.677.677-13.545,6.772-21.672,7.45s-13.545,0-13.545-2.032.677-3.386,10.836-2.709C226.846,15.725,239.036,11.662,239.714,12.339Z" transform="translate(295.313 81.273)" fill="#FFAC3C"/>
                        <path id="Path_10" data-name="Path 10" d="M188.6,46.517c0,.677,29.8-8.127,42.667-14.9,12.868-6.1,41.989-20.995,41.312-20.995-.677-.677-28.444,10.836-42.667,17.608S188.6,45.84,188.6,46.517Z" transform="translate(370.132 66.058)" fill="#FFAC3C"/>
                        <path id="Path_11" data-name="Path 11" d="M130.712,27.313c.677.677,31.153-2.032,48.762,0,49.439,4.741,115.132,21.672,112.423,19.64S199.114,25.958,176.765,24.6C143.58,21.895,130.035,26.636,130.712,27.313Z" transform="translate(742.939 -23.775)" fill="#FFAC3C"/>
                        <path id="Path_12" data-name="Path 12" d="M164.711,21.6a59.958,59.958,0,0,1-19.64.677c-11.513-1.355-39.28-6.1-55.534-4.741C61.092,20.247,39.42,35.823,42.129,35.146c2.709,0,29.122-14.9,58.243-12.868,12.19.677,34.54,3.386,45.376,2.709A82.608,82.608,0,0,0,164.711,21.6Z" transform="translate(1371.201 32.053)" fill="#FFAC3C"/>
                        <path id="Path_13" data-name="Path 13" d="M118.857,10.85c-1.355-.677-13.545,5.418-29.122,7.45-15.577,1.354-14.222,2.032-14.222,3.386,0,.677,12.19,2.709,23.026,0C109.375,18.3,120.211,11.527,118.857,10.85Z" transform="translate(1289.82 88.18)" fill="#FFAC3C"/>
                        <path id="Path_14" data-name="Path 14" d="M94.838,30.148c0,.677-29.122,0-45.376-3.386S15.6,13.894,15.6,13.217,33.886,18.635,50.14,22.7C65.716,26.762,94.161,29.471,94.838,30.148Z" transform="translate(1719.511 64.818)" fill="#FFAC3C"/>
                    </g>
                </svg>
            </div>
            <div id="contact">
                <h1 className="outlined-text stroke-white transparent">CONTATO</h1>
                <h1 className="main-text blue">CONTATO</h1>
                <div className="contact-content">
                    <div className="contact-block">
                        <h1 >Envie-nos uma mensagem!</h1>
                        <h2>Venha fazer parte, ligue agora mesmo!</h2>
                        <form id="contact-form">
                            <div className="form-control-group">
                                <div className="form-control-simple">
                                    <input type="text" placeholder=" "></input>
                                    <label>Nome</label>
                                </div>
                                <div className="form-control-simple">
                                    <input type="text" placeholder=" "></input>
                                    <label>Telefone</label>
                                </div>
                            </div>
                            <div className="form-control-group">
                                <div className="form-control-simple">
                                    <input type="text" placeholder=" "></input>
                                    <label>E-mail</label>
                                </div>
                                <div className="form-control-simple">
                                    <input type="text" placeholder=" "></input>
                                    <label>Assunto</label>
                                </div>
                            </div>
                            <div className="form-control-simple">
                                <textarea type="text" placeholder=" " rows="6"></textarea>
                                <label>Mensagem</label>
                            </div>
                            <div className="form-control-group">
                                <button className="main-button" type="submit">Enviar</button>
                                <button className="ouline-button" type="reset">Apagar</button>
                            </div>
                        </form>
                    </div>
                    <div className="contact-animation-div">
                        <div id="contact-animation" ref={animationContainerThree}></div>
                    </div>
                </div>
            </div>

        </main>
        
    );
}

export default Home
