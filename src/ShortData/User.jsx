import { useEffect, useState } from "react";

const User = () => {
  const [data, setData] = useState(["a", "z", "c", "x", "y"]);

  useEffect(() => {
    let dataList = [...data];
    dataList.sort();
    dataList.reverse()
    setData(dataList);
  }, []);

  return <div>{data.map((item,index)=> <div key={index}>{item}</div>)}</div>;
};

export default User;
