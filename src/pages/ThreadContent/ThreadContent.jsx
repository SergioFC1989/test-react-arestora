import { useParams } from "react-router-dom";

export const ThreadContent = () => {
  const params = useParams();

  console.log(params);
  return (
    <div>
      <h1>ThreadContent</h1>
    </div>
  );
};
