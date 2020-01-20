import React from "react";
import "./index.css";

export default ({fill = "rgba(0,0,0,0.65)", style = {}, className = "icon", viewBox = "0 0 1024 1024"}) => (
  <svg
    style={style}
    viewBox={viewBox}
    className={className}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M432.128 0C188.416 0 0 165.888 0 378.88c0 122.88 53.248 223.232 165.888 301.056l-45.056 133.12 155.648-77.824c51.2 12.288 102.4 20.48 155.648 22.528 14.336 0 28.672 0 40.96-2.048-8.192-30.72-14.336-61.44-14.336-92.16 0-194.56 165.888-352.256 378.88-352.256 14.336 0 28.672 0 43.008 2.048C841.728 133.12 651.264 0 432.128 0z m-143.36 301.056c-32.768 0-67.584-22.528-67.584-55.296s34.816-55.296 67.584-55.296c30.72 0 55.296 24.576 55.296 55.296 0 28.672-24.576 55.296-55.296 55.296z m309.248 0c-32.768 0-67.584-22.528-67.584-55.296s32.768-55.296 67.584-55.296c30.72 0 55.296 24.576 55.296 55.296 2.048 28.672-24.576 55.296-55.296 55.296z"
      fill="#35CB72"
      p-id="48663"
    />
    <path
      d="M1245.184 655.36c0-178.176-178.176-323.584-378.88-323.584-210.944 0-378.88 145.408-378.88 323.584 0 178.176 165.888 323.584 378.88 323.584 45.056 0 88.064-10.24 133.12-22.528l122.88 67.584-32.768-110.592c90.112-67.584 155.648-157.696 155.648-258.048zM745.472 600.064c-22.528 0-45.056-22.528-45.056-45.056s22.528-45.056 45.056-45.056c32.768 0 55.296 22.528 55.296 45.056s-22.528 45.056-55.296 45.056z m243.712 0c-22.528 0-45.056-22.528-45.056-45.056s22.528-45.056 45.056-45.056c32.768 0 55.296 22.528 55.296 45.056 2.048 22.528-20.48 45.056-55.296 45.056z m0 0"
      fill="#35CB72"
      p-id="48664"
    />
  </svg>
);
