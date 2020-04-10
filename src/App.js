import React from "react";
import Plot from "react-plotly.js";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div style={{ height: "100vh", width: "100vw" }}>
        <Plot
          data={[
            // {
            //   type: "scattergeo",
            //   mode: "markers",
            //   locations: ["DEU"],
            //   hoverinfo: "text",
            //   text: ["Heisenberg (15%)"],
            //   marker: {
            //     size: [30],
            //     color: [15],
            //     cmin: 0,
            //     cmax: 15,
            //     colorscale: "Greens",
            //     reversescale: true,
            //     colorbar: {
            //       title: "Infection Rate",
            //       ticksuffix: "%",
            //       showticksuffix: "last",
            //     },
            //     line: {
            //       color: "black",
            //     },
            //   },
            //   name: "global sero data",
            // },
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
                colorbar: {
                  title: "Infection Rate",
                  ticksuffix: "%",
                  showticksuffix: "last",
                },
                line: {
                  color: "black",
                },
              },
              name: "global sero data US",
            },
          ]}
          layout={{
            height: 600,
            width: 1000,
            geo: {
              scope: "world",
              resolution: 15,
            },
          }}
        />
      </div>
    );
  }
}

export default App;
