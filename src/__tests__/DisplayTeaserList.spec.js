import React from "react";
import { shallow } from "enzyme";
import TeaserList from "../components/TeaserList";
import axios from "axios";

describe("<TeaserList />", () => {
  it("should fetch TeaserList from Api using axios", () => {
    const axiosSpy = jest.spyOn(axios, "get")
    shallow(<TeaserList />)
    expect(axiosSpy).toBeCalled()
  });
}) 

