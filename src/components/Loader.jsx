import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      className="flex justify-center items-center flex-col"
    >
      <span className='canvas-loader'></span>
      <p
        className="text-xl text-[#F1F1F1] font-extrabold mt-10"
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
}

export default Loader