import React from 'react';
import AboutViewCss from '../css/AboutView.css';

export default class AboutView extends React.Component {
  render(){
    let content = (<div><h1>GIGA SOLAR</h1>
      <h1>Giga Solar is a Solar Turnkey EPC company that provides state of the art Consulting-Engineering-Contracting-Commissioning services dedicated to development of Solar Roof Top Power Plants for residential, institutional and commercial setups.
Our focus is to provide the most cost efficient solution to the customers based on their average power consumption and maximize their return on investment. We have collaborated with some of the leading players in the solar power industry to deliver the best product and offer the finest after sales services to our customers.
With our team of skilled specialists, we are gradually increasing our foot print in the market and are helping numerous households and corporates across India garner the power of sun.
PLANT DESIGN & ENGINEERING
As most solar power plants are set up on already constructed buildings or on a structure and electrical system which were not designed to accommodate solar panel, there are a number of challenges our team faces day in and day out.
We design our plants to cause minimum alterations to the customer’s existing building and electrical system without compromising on the efficiency of the solar power plant.
LIASONING & APPROVALS
We support the customer with various government formalities. On behalf of the customer, we ensure to obtain all government approvals required for setting up roof top solar power plants based on the location of the project.
This involves initial application to the state DISCOM, registration after approval of application, obtaining government subsidy on behalf of customer, facilitating final inspection of the plant and installation of Net Meter.
Because of our vast experience, we are able to provide a hassle free experience to our customers.
CONSTRUCTION, PROCUREMENT & MANAGEMENT
We believe in procuring the best in class material & equipment for our projects and promote use of latest proven technology.
Our execution team has experience of handling large scale EPC projects, which results in a trouble free installation & commissioning at client site.
We have developed a strong project management team which ensures a proper planning, scheduling, timely execution & completion of our projects.
Learn More
Our Vision
Our aim is to become India’s leading green power generating company. We focus on providing the the most technically viable and commercially feasible solutions to our clients. Our team’s strong technical background and engineering and construction experience gives us an edge over the other players in the industry.
Meet the Team
The leadership at Giga Solar is proficient in their respective fields and holds an extensive industry experience in conventional and solar energy projects engineering procurement and construction.
Anshul Singla
Chief Executive Officer
Anshul is a mechanical engineering graduate from Delhi College of Engineering with over 7 years of experience of working with some of the world’s leading EPC companies in Oil and Gas and Power sector including Larsen & Toubro and Fluor.
He has a vast international exposure of working on foreign assignments and dealing with international client & vendors. He has worked closely with project management and commercial strategy teams for various international projects.
His strong technical background and extraordinary project management skills are a valuable asset to the company.
He heads the company’s business development division and supports the project management and procurement teams. His fresh and innovative approach has helped in 100% successful and hassle free implementation of our projects.
Ayush Singla
Chief Operating Officer
Ayush is an alumnus of NIT Jalandhar with over 2 years of experience of working with Larsen & Toubro in construction industry. He has worked as a Planning Engineer and was part of the core team that executed projects to the tune of 400 crores.
His dynamic and problem solving attitude has helped avoid any major issue at project site. He is technically very sound and has played a very important role in efficient and timely completion of our projects.
Having worked on several construction sites, he understands the importance of safety at site and ensures that all works adhere to the Safety Norms and Standards.</h1></div>);
    return (<div className={AboutViewCss.aboutMenuDiv}>
{content}
    </div>);
  }
}
