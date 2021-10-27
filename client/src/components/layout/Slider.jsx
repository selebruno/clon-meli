import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: "https://res.cloudinary.com/dbduj98i3/image/upload/v1635283680/D_NQ_715855-MLA48023008001_102021-OO_du8ydu.webp",
  },
  {
    url: "https://res.cloudinary.com/dbduj98i3/image/upload/v1635283677/D_NQ_658433-MLA47933462741_102021-OO_bnucmp.webp",
  },
  {
    url: "https://res.cloudinary.com/dbduj98i3/image/upload/v1635283675/D_NQ_926682-MLA47965174852_102021-OO_wy7hrz.webp",
  },
  {
    url: "https://res.cloudinary.com/dbduj98i3/image/upload/v1635283656/D_NQ_888686-MLA47892055072_102021-OO_ql6gro.webp",
  },
  {
    url: "https://res.cloudinary.com/dbduj98i3/image/upload/v1635283654/D_NQ_897467-MLA47976582955_102021-OO_u0htqt.webp",
  },
  {
    url: "https://res.cloudinary.com/dbduj98i3/image/upload/v1635283652/D_NQ_662857-MLA47981877797_102021-OO_rfzz4i.webp",
  },
  {
    url: "https://res.cloudinary.com/dbduj98i3/image/upload/v1635283650/D_NQ_657966-MLA48007822815_102021-OO_gxyuay.webp",
  },
];

export default function Slider() {
  return (
    <div>
      <SimpleImageSlider
        width="100%"
        height="43vh"
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        slideDuration={3}
      />
    </div>
  );
}
