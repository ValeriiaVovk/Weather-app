import React from "react";

function AboutApp() {
  return (
    <div className="about-container">
      <h1 className="about">About this Weather-app</h1>
      <h2 className="about_header">
        This application has the following features:
      </h2>
      <ol className="about_list">
        <li className="about_list-item">
          In the upper right corner, you can enter the city, in which you want
          to view the weather, and click on the "Search" button.
        </li>
        <li className="about_list-item">
          After that, several windows will appear on the screen:
          <ul>
            <li>
              a window with information about the weather for today
              (temperature, city, and an example of clothes);
            </li>
            <li>
              a window with more detailed information (how the temperature
              feels, a description of the weather conditions, the time of
              sunrise and sunset);
            </li>
            <li>windows with the weather for four days.</li>
          </ul>
        </li>
        <li className="about_list-item">
          Windows with four-day weather have their own features.
          <ul>
            <li>
              by clicking on the date, a modal window with more detailed
              information about the weather conditions will appear on the
              screen;
            </li>
            <li>
              next, you can see a photo with the clothes you can wear (hovering
              over it with the mouse will show a description of the weather);
            </li>
            <li>
              the highest and lowest temperatures for the day are shown below
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
}

export default AboutApp;
