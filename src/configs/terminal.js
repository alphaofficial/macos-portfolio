const terminal = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>Hi! This is Albert Akrong, fullstack engineer</div>
            <div className="mt-1">
              I hold a Bachelor’s degree in Information technology. I have a
              hands-on industry experience in modern programming languages and
              tools, including but not limited to: React, Typescript, NodeJS,
              Graphql, and AWS to create and implement software applications.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "Frontend / Backend / Cloud / Deep Learning"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content: "I'm open to frontend / backend / fullstack engineer roles"
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:alphaxsalt@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                alphaxsalt@gmail.com
              </a>{" "}
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/alphaofficial"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/alphaofficial
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/albertakrong"
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/albertakrong
              </a>
            </li>
            <li>
              Blog:{" "}
              <a
                className="text-blue-300"
                href="https://alphaxsalt.meduim.com"
                target="_blank"
                rel="noreferrer"
              >
                https://alphaxsalt.medium.com
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
