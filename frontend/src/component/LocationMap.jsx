import React from "react";
import { Marker, Popup, useMapEvent } from "react-leaflet";

const LocationMap = ({ myLocation, setMylocation, icon }) => {
  // useMapEvent เพื่อฟังการคลิกบนแผนที่แล้วตั้งค่าตำแหน่งใหม่
  useMapEvent({
    click(e) {
      const { lat, lng } = e.latlng;
      setMylocation({ lat, lng }); // อัปเดตตำแหน่งบ้านของผู้ใช้
    },
  });

  return (
    <>
      {myLocation.lat && myLocation.lng && (
        <Marker position={[myLocation.lat, myLocation.lng]} icon={icon}>
          <Popup>Your Current Location</Popup>
        </Marker>
      )}
    </>
  );
};

export default LocationMap;
