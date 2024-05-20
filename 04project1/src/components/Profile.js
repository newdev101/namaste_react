import { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);

    console.log("child constructor");
    this.state = {
      email: "no userName",
      name: "no name",
      pictureUrl: "https://randomuser.me/api/portraits/women/69.jpg",
    };
  }

  async componentDidMount() {
    const data = await fetch("https://randomuser.me/api/");
    const json = await data.json();

    const { name, email, picture } = json.results[0];
    this.setState({
      name: name.title + " " + name.first + " " + name.last,
      email: email,
      pictureUrl: picture.large,
    });

    console.log("child componentDidMount");
  }

  componentDidUpdate() {
     console.log("child componentDidUpdate");
   }

  render() {

     console.log("child render");
    const { name, email, pictureUrl } = this.state;
    return (
      <div className="card">
        <h3>userName {name}</h3>
        <h3>email {email}</h3>
        <img src={pictureUrl} />
      </div>
    );
  }
}

export default Profile;
