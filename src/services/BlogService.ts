import { Blog } from "../model/model";

class BlogService {
  private overview;
  private blog;
  private url = "http://localhost:8080/api/v1/blog";

  constructor() {
    this.overview = {
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
    };

    this.blog = {
      title: "title",
      text: "Morbi aliquam, mauris in dignissim consectetur, purus mi ultrices libero, sit amet luctus nulla mi bibendum augue. Etiam a nunc nulla. Proin lacinia tincidunt enim non efficitur. Mauris imperdiet pretium massa vel tempus. Donec ultricies ligula id ex eleifend aliquet. Sed posuere ac felis ac aliquet. Nulla facilisi. Nunc vel dolor purus. In vitae ante at augue maximus volutpat. Vestibulum pellentesque consequat orci. Morbi eu fermentum nisl. Donec accumsan lectus ut enim pretium, a auctor elit volutpat. Aliquam nec augue eget magna egestas varius non quis quam. Nunc non turpis vel orci posuere facilisis vel sagittis magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam in felis accumsan, accumsan nunc quis, consequat dolor.",
      image:
        "https://images.unsplash.com/photo-1640622843377-6b5af9417e70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
      author: "Joris",
      date: new Date(),
      paragraphs: [
        {
          title: undefined,
          text: "Vivamus vulputate magna ultrices gravida fermentum. Vivamus vel condimentum purus. Maecenas a urna et sem feugiat varius. Morbi vitae tellus hendrerit, finibus dui pellentesque, pulvinar dolor. Nullam dictum ante sed sem molestie, nec congue enim tristique. Mauris aliquet fringilla maximus. Nulla vitae mollis leo, ac interdum urna. Nunc venenatis gravida mauris, eget euismod nulla faucibus finibus. Curabitur mollis augue ac fermentum fermentum.",
          image:
            "https://images.unsplash.com/photo-1638913662180-afc4334cf422?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
          quote:
            "Maecenas a urna et sem feugiat varius. Morbi vitae tellus hendrerit, finibus dui pellentesque, pulvinar dolor.",
        },
        {
          title: "In tempus purus tempor semper sagittis.",
          text: "In tempus purus tempor semper sagittis. Etiam congue purus sed lectus faucibus rhoncus. Nullam ultrices lorem id tortor dignissim, a congue eros cursus. Nunc fringilla nunc sed ipsum viverra aliquet. Donec placerat dictum arcu, sit amet egestas purus. Sed vel fermentum libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus venenatis, leo in tincidunt venenatis, neque purus mattis libero, quis auctor diam mi id ipsum. Vivamus et sapien pellentesque, rhoncus nisi vitae, malesuada mauris. Mauris tempor suscipit ex non gravida. Pellentesque dictum nulla lacus. Mauris nulla dolor, porttitor et tortor vitae, tincidunt volutpat diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec enim eget erat maximus interdum finibus et ipsum. Proin id imperdiet odio.",
          image: undefined,
          quote: undefined,
        },
        {
          title:
            "Curabitur vestibulum urna neque, vitae interdum nibh commodo quis. ",
          text: "Aliquam venenatis cursus risus, non pharetra metus auctor eu. Curabitur vestibulum urna neque, vitae interdum nibh commodo quis. Ut non gravida est. Phasellus sagittis efficitur nibh, vel auctor mi faucibus in. Integer volutpat nunc ut orci euismod tincidunt. Suspendisse volutpat magna in porttitor pharetra. Integer a risus pellentesque, bibendum mauris consequat, consectetur orci. Donec leo magna, ultrices in iaculis sed, fringilla eget odio. Fusce et elit erat. Curabitur tempus, tortor et dictum auctor, turpis eros aliquam velit, et elementum velit eros eget arcu. Aenean vitae lacus ligula.",
          image: undefined,
          quote:
            "Curabitur vestibulum urna neque, vitae interdum nibh commodo quis. ",
        },
        {
          title: "",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a hendrerit sapien. In ultricies sem eget porttitor euismod. Phasellus vulputate, nisi in congue feugiat, sapien velit suscipit augue, nec euismod dolor odio finibus mauris. Sed et libero nunc. Curabitur hendrerit, quam nec consectetur viverra, ligula ligula elementum ante, id ultricies odio nulla vel mi. Cras lacinia finibus neque, ut mattis arcu condimentum at. Mauris ac molestie arcu, a euismod tellus. Aliquam non urna risus. Nam vehicula aliquet mollis.",
          image:
            "https://images.unsplash.com/photo-1644411370675-e4e4572fc169?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
          quote: undefined,
        },
      ],
    };
  }

  async listBlogs(): Promise<any> {
    const response = await fetch(this.url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });

    const jsonResponse = response.json();

    console.log("service", jsonResponse);

    return jsonResponse;
  }

  async getBlog(): Promise<Blog> {
    return Promise.resolve(this.blog);
  }

  async postBlog(blog: Blog): Promise<Blog> {
    // Default options are marked with *
    const response = await fetch(this.url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(blog), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
}

export default BlogService;
