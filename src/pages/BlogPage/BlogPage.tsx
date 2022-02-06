import React from "react";

import styles from "./BlogPage.module.scss";

import backgroundImage from "../../assets/images/jent1.jpeg";
import FullScreenImageComponent from "../../components/FullScreenImageComponent/FullScreenImageComponent";
import BlogOverviewComponent from "../../features/BlogFeature/BlogOverviewComponent/BlogOverviewComponent";

class BlogPage extends React.Component {
  render() {
    return (
      <div className={styles.LandingPage} data-testid="LandingPage">
        <BlogOverviewComponent
          data={{
            title: "Blog",
            text: "Sed finibus, odio sit amet rhoncus dictum, neque lorem ultricies felis, at commodo mauris nunc tincidunt orci. Morbi non pretium massa. Praesent laoreet feugiat fringilla. Nullam tortor augue, pulvinar at massa ut, blandit viverra est. Sed aliquam porttitor tortor ac fermentum. Vestibulum vitae pretium arcu.",
            blogTiles: [
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
                  "https://images.unsplash.com/photo-1644156638014-91b68e153f4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
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
                  "https://images.unsplash.com/photo-1644085128539-deedb9f80e06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
                date: "23 March 2022",
              },
              {
                title: "Tile 4",
                text: "Phasellus sed dui elementum, molestie nisl sit amet, convallis eros",
                image:
                  "https://images.unsplash.com/photo-1642320009030-ff80041e25ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
                date: "23 March 2022",
              },
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
                  "https://images.unsplash.com/photo-1644156638014-91b68e153f4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
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
                  "https://images.unsplash.com/photo-1644085128539-deedb9f80e06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
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
        ></BlogOverviewComponent>
      </div>
    );
  }
}

export default BlogPage;
