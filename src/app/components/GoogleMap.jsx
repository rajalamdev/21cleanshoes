import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15838.036185647126!2d107.183687!3d-7.066822!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e685c329f0c44eb%3A0x12138e43cf9602c8!2s21%20CleanShoes!5e0!3m2!1sen!2sid!4v1689187534657!5m2!1sen!2sid"
        style={{border:0}}
        allowfullscreen="true"
        loading="lazy"
        className="w-full h-[400px]"
        >
    </iframe>
  );
}
