import React from "react";
import backgroundImage from "../../images/banner.jpg";


const styles = {
  customJumbotron: {
    backgroundImage: `url("${backgroundImage}")`,
    backgroundSize: "cover",
    height: "700px",
  },
  headingStyle: {
    fontSize: 100
  }
};

function Home() {
  return (
    <div style={styles.customJumbotron} className="jumbotron customJumbotron">
    </div>
  );
}

export default Home;
