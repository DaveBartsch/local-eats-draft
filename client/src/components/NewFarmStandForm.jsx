import React, { useEffect } from "react";
import { useState } from "react";

const NewFarmStandForm = (props) => {
   
  const [type, setType] = useState("");
  const [location_name, setLocation_name] = useState("");
  const [address, setAddress] = useState("");
  const [hours, setHours] = useState("");
  const [duration, setDuration] = useState("");
  const [community, setCommunity] = useState("");
  const [sector, setSector] = useState("");
  const [vendor_name, setVendor_name] = useState("");
  const [vendor_description, setVendor_description] = useState("");
  const [product_description, setProduct_description] = useState("");
  const setShowModal=props.setShowModal;
  const onFormSubmit=props.onFormSubmit;
  const initialValues=props.initialValues;
  const buttonText=props.buttonText;

  useEffect(() => {
    if (initialValues) {
      setType(initialValues.type);
      setLocation_name(initialValues.location_name);
      setAddress(initialValues.address);
      setHours(initialValues.hours);
      setDuration(initialValues.duration);
      setCommunity(initialValues.community);
      setSector(initialValues.sector);
      setVendor_name(initialValues.vendor_name);
      setVendor_description(initialValues.vendor_description);
      setProduct_description(initialValues.product_description);
      console.log(`initialValues is:`, initialValues);
    }
  
  }, [initialValues]);
    
  


  return (
    <div>
      <h2>Add a new FarmStand</h2>
      <div>
        <label>FarmStand Type:</label>
        <input
          type="text"
          name="type"
          value={type}
          onChange={(event) => {
            setType(event.target.value);
          }}
        />
        <br />
        <label>Location Name:</label>
        <input
          type="text"
          name="location_name"
          value={location_name}
          onChange={(event) => {
            setLocation_name(event.target.value);
          }}
        />
        <br />
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={address}
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        />
        <br />
        <label>Hours:</label>
        <input
          type="text"
          name="hours"
          value={hours}
          onChange={(event) => {
            setHours(event.target.value);
          }}
        />
        <br />
        <label>Duration:</label>
        <input
          type="text"
          name="duration"
          value={duration}
          onChange={(event) => {
            setDuration(event.target.value);
          }}
        />
        <br />
        <label>Community:</label>
        <input
          type="text"
          name="community"
          value={community}
          onChange={(event) => {
            setCommunity(event.target.value);
          }}
        />
        <br />
        <label>Sector:</label>
        <input
          type="text"
          name="sector"
          value={sector}
          onChange={(event) => {
            setSector(event.target.value);
          }}
        />
        <br />
        <label>Vendor Name:</label>
        <input
          type="text"
          name="vendor_name"
          value={vendor_name}
          onChange={(event) => {
            setVendor_name(event.target.value);
          }}
        />
        <br />
        <label>Vendor Description:</label>
        <input
          type="text"
          name="vendor_description"
          value={vendor_description}
          onChange={(event) => {
            setVendor_description(event.target.value);
          }}
        />
        <br />
        <label>Product Description:</label>
        <input
          type="text"
          name="product_description"
          value={product_description}
          onChange={(event) => {
            setProduct_description(event.target.value);
          }}
        />
        <br />
        <button onClick={()=>onFormSubmit({
          type:type,
          location_name:location_name,
          address:address,
          hours:hours,
          duration:duration,
          community:community,
          sector:sector,
          vendor_name:vendor_name,
          vendor_description:vendor_description,
          product_description:product_description
          
        })}>{buttonText}</button>
      </div>
    </div>
  );
};

export default NewFarmStandForm;