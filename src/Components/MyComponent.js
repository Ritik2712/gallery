import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Searchbar from "./Searchbar";
import Images from "./Images";
import { Switch } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ChangeTheme } from "../state/actions";

const MyComponent = (props) => {
  const [theme, setTheme] = useState(false);

  console.log(theme);
  return (
    <div className="">
      <div className="switch">
        <Switch
          value={theme}
          onChange={(e) => {
            setTheme(!theme);
          }}
        ></Switch>
      </div>
      <div className={`h-screen ${theme ? "dark" : null}`}>
        <Searchbar theme={theme} />
        <Images theme={theme} />
      </div>
    </div>
  );
};

export default MyComponent;
