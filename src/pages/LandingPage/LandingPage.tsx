import React from "react";

import styles from "./LandingPage.module.scss";

import backgroundImage from "../../assets/images/jent1.jpeg";
import FullScreenImageComponent from "../../components/FullScreenImageComponent/FullScreenImageComponent";
import IntroCompontent from "../../components/IntroComponent/IntroComponent";
import VideoSnippetComponent from "../../components/VideoSnippetComponent/VideoSnippetComponent";
import TilesComponent from "../../components/TilesComponent/TilesComponent";
import SectionComponent from "../../components/SectionComponent/SectionComponent";
import SnippetComponent from "../../components/SnippetComponent/SnippetComponent";

class LandingPage extends React.Component {
  render() {
    return (
      <div className={styles.LandingPage} data-testid="LandingPage">
        <FullScreenImageComponent image={backgroundImage}>
          <IntroCompontent
            data={{
              title: "Baby Zeehond",
              text: "Wij zijn Joris en Tyrone en wij zijn begonnen an het grootste avontuur van ons leven; Het verwezenlijken van onze kinderwens. We zijn inmiddels al een aantal jaar bezig om onze kinderwens uit te laten komen, tot op heden zonder succes. We gaan nu over op een manier waarbij de kans op succes een stuk groter wordt. We gaan voor een draagmoeder in het buitenland. Op deze pgina nemen we jullie mee en kunnen jullie ons volgen ook geven wij informatie aan andere stellen met een kidnerwens.",
              signature: "Joris & Tyrone",
              primaryButton: {
                href: "localhost",
                text: "Kijk de eerste video",
              },
              secondaryButton: {
                href: "localhost",
                text: "Lees onze laatste blog",
              },
            }}
          ></IntroCompontent>
        </FullScreenImageComponent>
        <SectionComponent color={"#719e9e"}>
          <VideoSnippetComponent
            data={{
              title: "Joris & Tyrone",
              text: "Phasellus sed dui elementum, molestie nisl sit amet, convallis eros. Sed vitae varius quam, ac volutpat nisi. In hac habitasse platea dictumst. Nulla facilisi. Fusce vulputate lacus in metus tincidunt, id gravida turpis feugiat. Nam magna ex, dapibus nec consequat in, congue in urna. Suspendisse vitae nunc sit amet leo facilisis ullamcorper nec sed erat. ",
              primaryButton: {
                href: "localhost",
                text: "Kijk de eerste video",
              },
              video: "https://www.youtube.com/watch?v=dHpm3t4UyJ4",
              secondaryButton: {
                href: "localhost",
                text: "Lees onze laatste blog",
              },
            }}
          ></VideoSnippetComponent>
        </SectionComponent>
        <SectionComponent color={"#fff"}>
          <TilesComponent
            data={{
              intro: {
                title: "Video",
                text: "Sed finibus, odio sit amet rhoncus dictum, neque lorem ultricies felis, at commodo mauris nunc tincidunt orci. Morbi non pretium massa. Praesent laoreet feugiat fringilla. Nullam tortor augue, pulvinar at massa ut, blandit viverra est. Sed aliquam porttitor tortor ac fermentum. Vestibulum vitae pretium arcu.",
              },
              tiles: [
                {
                  title: "Tile 1",
                  text: "Phasellus sed dui elementum, molestie nisl sit amet, convallis eros",
                  image:
                    "https://images.unsplash.com/photo-1642023998435-54aa37078fba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8cm5TS0RId3dZVWt8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                  date: "23 March 2022",
                },
                {
                  title: "Tile 2",
                  text: "Phasellus sed dui elementum, molestie nisl sit amet, convallis eros",
                  image:
                    "https://images.unsplash.com/photo-1641715736797-3459026c6bc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHJuU0tESHd3WVVrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                  date: "23 March 2022",
                },
                {
                  title: "Tile 3",
                  text: "Phasellus sed dui elementum, molestie nisl sit amet, convallis eros",
                  image:
                    "https://images.unsplash.com/photo-1642329927367-a77deac14b4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
                  date: "23 March 2022",
                },
                {
                  title: "Tile 4",
                  text: "Phasellus sed dui elementum, molestie nisl sit amet, convallis eros",
                  image:
                    "https://images.unsplash.com/photo-1641650265007-b2db704cd9f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fHJuU0tESHd3WVVrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                  date: "23 March 2022",
                },
                {
                  title: "Tile 4",
                  text: "Phasellus sed dui elementum, molestie nisl sit amet, convallis eros",
                  image:
                    "https://images.unsplash.com/photo-1642320009030-ff80041e25ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
                  date: "23 March 2022",
                },
              ],
            }}
          ></TilesComponent>
        </SectionComponent>
        <SectionComponent color="#82b6b6">
          <SnippetComponent
            data={{
              title: "Over Tyrone",
              text: "Phasellus sed dui elementum, molestie nisl sit amet, convallis eros. Sed vitae varius quam, ac volutpat nisi. In hac habitasse platea dictumst. Nulla facilisi. Fusce vulputate lacus in metus tincidunt, id gravida turpis feugiat. Nam magna ex, dapibus nec consequat in, congue in urna. Suspendisse vitae nunc sit amet leo facilisis ullamcorper nec sed erat. ",
              image: "https://www.youtube.com/watch?v=dHpm3t4UyJ4",
            }}
            view={"image-right" as any}
          ></SnippetComponent>
        </SectionComponent>
        <SectionComponent color={"#fff"}>
          <TilesComponent
            data={{
              intro: {
                title: "Blog",
                text: "Sed finibus, odio sit amet rhoncus dictum, neque lorem ultricies felis, at commodo mauris nunc tincidunt orci. Morbi non pretium massa. Praesent laoreet feugiat fringilla. Nullam tortor augue, pulvinar at massa ut, blandit viverra est. Sed aliquam porttitor tortor ac fermentum. Vestibulum vitae pretium arcu.",
              },
              tiles: [
                {
                  title: "Tile 1",
                  text: "Phasellus sed dui elementum, molestie nisl sit amet, convallis eros",
                  image:
                    "https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
                  date: "23 March 2022",
                },
                {
                  title: "Tile 2",
                  text: "Phasellus sed dui elementum, molestie nisl sit amet, convallis eros",
                  image:
                    "https://images.unsplash.com/photo-1642170637760-f59a0b6d922d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                  date: "23 March 2022",
                },
                {
                  title: "Tile 3",
                  text: "Phasellus sed dui elementum, molestie nisl sit amet, convallis eros",
                  image:
                    "https://images.unsplash.com/photo-1641923211665-9c24f5d617bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                  date: "23 March 2022",
                },
                {
                  title: "Tile 4",
                  text: "Phasellus sed dui elementum, molestie nisl sit amet, convallis eros",
                  image:
                    "https://images.unsplash.com/photo-1640622304896-2af07ccb1c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                  date: "23 March 2022",
                },
                {
                  title: "Tile 4",
                  text: "Phasellus sed dui elementum, molestie nisl sit amet, convallis eros",
                  image:
                    "https://images.unsplash.com/photo-1642282412070-a013bd8a9b07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
                  date: "23 March 2022",
                },
              ],
            }}
          ></TilesComponent>
        </SectionComponent>
        <SectionComponent color="#c2cccc">
          <SnippetComponent
            data={{
              title: "Over Joris",
              text: "Ik ben Joris en ik ben 41 jaar oud. Al vrij jong had ik een kinderwens, ik heb ooit het voornemen gehad om met mijn jeugdliefde 9 kinderen te krijgen. Mijn leven is volledig anders gelopen, maar de kinderwens is er nog steeds.\n\r\n\rIn het dagelijks leven ben ik Senior Full Stack Developer en ben ik werkzaam bij de Rabobank. Het is een ontzettend veelzijdige, creatieve en technische baan. Ik kan mij niet voorstellen dat ik ooit iets anders zou doen.\n\r\n\rIn mijn vrije tijd houd ik mij veel bezig met sporten, ik heb de overtuiging dat beweging de sleutel is tot gezond ouder worden. Ik hou ook van video bewerken, stedentrips, de bisocoop en lekker (uit) eten. Ik heb rijk sociaal leven met vrienden en familie die ik graag om mij heen heb. Ik ik het liefst natuurlijk mijn grote liefde Tyrone om me heen, waarmee ik elke dag heel gelukkig ben en waarmee ik deze grote stap met overtuiging durf te zetten.",
              image: "https://www.youtube.com/watch?v=dHpm3t4UyJ4",
            }}
            view={"image-left" as any}
          ></SnippetComponent>
        </SectionComponent>
      </div>
    );
  }
}

export default LandingPage;
