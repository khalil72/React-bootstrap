import React, { useEffect, useState } from 'react';
import { Grid } from 'react-loader-spinner';

const Preloader = () => {
    const [loading, setLoading] = useState(true);


  return (
    <div className={`preloader-container ${loading ? 'visible' : 'hidden'}`}>
      <Grid
        visible={loading}
        type="SixDots"
        color="#000000"
        height={80}
        width={80}
      />
    </div>
  );
};

export default Preloader;
