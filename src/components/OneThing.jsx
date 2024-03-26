import CustomButton from "./CustomButton";


const OneThing = ({ thing, handleCompletedThing }) => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-3">{thing}</h1>
      <CustomButton text="Mark Done"
      handleCompletedThing={handleCompletedThing} />
    </>
  );
};
export default OneThing;
