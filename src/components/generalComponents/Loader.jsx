import React from 'react'
import { useState, CSSProperties } from "react";
import FadeLoader from "react-spinners/FadeLoader";

const Loader = () => {
    const override = {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // margin: "0 auto",
    // border: "1px solid red",
    // backgroundColor: '#ddd',
    // top: 0,
    // left: 0,
    width: 100,
    padding: 20
    // height: 100,
    
    };

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#1B49FF");
    
  return (
    <div className="sweet-loading fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-center items-center">
    {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button> */}
    {/* <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}

    <FadeLoader
      color={color}
      loading={loading}
      cssOverride={override}
      size={20}
      height={15}
      width={3}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </div>
  )
}

export default Loader
