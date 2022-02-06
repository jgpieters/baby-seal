import React, { FC } from "react";

import styles from "./ContactPage.module.scss";

import backgroundImage from "../../assets/images/jent1.jpeg";
import FullScreenImageComponent from "../../components/FullScreenImageComponent/FullScreenImageComponent";
import IntroCompontent from "../../components/IntroComponent/IntroComponent";

class ContactPage extends React.Component {
  render() {
    return (
      <div className={styles.LandingPage} data-testid="ContactPage">
        <FullScreenImageComponent image={backgroundImage}>
          <IntroCompontent
            data={{
              title: "Contact",
              text: "Phasellus sed dui elementum, molestie nisl sit amet, convallis eros. Sed vitae varius quam, ac volutpat nisi. In hac habitasse platea dictumst. Nulla facilisi. Fusce vulputate lacus in metus tincidunt, id gravida turpis feugiat. Nam magna ex, dapibus nec consequat in, congue in urna. Suspendisse vitae nunc sit amet leo facilisis ullamcorper nec sed erat. ",
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
      </div>
    );
  }
}

export default ContactPage;
