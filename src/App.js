import React from "react";
import Plot from "react-plotly.js";
import styled from "styled-components";
import "./App.css";

const Container = styled.div`
  width: 100%;
  height: 85vh;
  max-height: 100vh;
  min-width: 300px;
  position: relative;

  @media (max-width: 1300px) {
    height: 750px;
  }
  @media (max-width: 1200px) {
    height: 650px;
  }
  @media (max-width: 1100px) {
    height: 600px;
  }
  @media (max-width: 1000px) {
    height: 550px;
  }
  @media (max-width: 900px) {
    height: 500px;
  }
  @media (max-width: 800px) {
    height: 450px;
  }
  @media (max-width: 700px) {
    height: 400px;
  }
  @media (max-width: 600px) {
    height: 350px;
  }
  @media (max-width: 500px) {
    height: 300px;
  }
  @media (max-width: 400px) {
    height: 250px;
  }
`;

const ColorBarContainer = styled.div`
  width: 75%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const ColorBar = styled.div`
  height: 15px;
  width: 100%;
  background-image: linear-gradient(
    to right,
    rgb(247, 252, 245) 0%,
    rgb(229, 245, 224) 12.5%,
    rgb(199, 233, 192) 25%,
    rgb(161, 217, 155) 37.5%,
    rgb(116, 196, 118) 50%,
    rgb(65, 171, 93) 62.5%,
    rgb(35, 139, 69) 75%,
    rgb(0, 109, 44) 87.5%,
    rgb(0, 68, 27) 100%
  );
`;

const Percentages = styled.div`
  display: flex;
  justify-content: space-between;
  color: gray;
`;

const Legend = styled.div`
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
`;

class App extends React.Component {
  render() {
    return (
      <Container>
        <Plot
          style={{ height: "100%", width: "100%" }}
          config={{ responsive: true }}
          data={[
            {
              type: "scattergeo",
              locationmode: "USA-states",
              lat: [37.9375, 49.3988],
              lon: [-107.8123, 8.6724],
              hoverinfo: "text",
              text: ["Telluride, US (1-3%)", "Heisenberg, Germany (15%)"],
              marker: {
                size: [5, 37.5],
                color: [2, 15],
                cmin: 0,
                cmax: 15,
                colorscale: "Greens",
                reversescale: true,
                line: {
                  color: "black",
                },
              },
              name: "global sero data",
            },
          ]}
          layout={{
            margin: { l: 0, r: 0, t: 0, b: 0 },
            dragmode: false,
            geo: {
              scope: "world",
              resolution: 15,
            },
          }}
        />
        <ColorBarContainer>
          <ColorBar />
          <Percentages>
            <span>0%</span>
            <span>7.5%</span>
            <span>15%</span>
          </Percentages>
          <Legend>Percent Infected</Legend>
        </ColorBarContainer>
      </Container>
    );
  }
}

export default App;
