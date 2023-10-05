import React, { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { IcecreamOrder, IcecreamRestock } from "./IcecreamSlice";

const IcecreamView = () => {
  const Icecreams = useAppSelector((state) => state.icecreams.numOfIcecreams);
  const dispatch = useAppDispatch();
  const [InputVal, setInputVal] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputVal(parseInt(e.target.value));
  };
  return (
    <div>
      <h2>Number of Icecreams - {Icecreams}</h2>
      <button onClick={() => dispatch(IcecreamOrder())}>Icecream Order</button>
      &nbsp;&nbsp;
      <input
        type="number"
        value={InputVal === 0 ? "" : InputVal}
        onChange={handleChange}
      />
      &nbsp;&nbsp;
      <button onClick={() => dispatch(IcecreamRestock(InputVal))}>
        Icecream Restock
      </button>
    </div>
  );
};

export default IcecreamView;
