import React from "react";
import "./map.css";

const Map = () => {
  return (
    <div className="mapContainer">
      <iframe
        title="mapFrame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36423.110469252824!2d25.573575367946077!3d55.210475586304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd6659a9aaa805%3A0xec3ff958b67d0b5e!2zTWluZMWrbmFp!5e0!3m2!1sen!2slt!4v1657816088679!5m2!1sen!2slt"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
