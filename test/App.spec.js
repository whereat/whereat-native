import React, { View } from "react";
import { shallow } from "enzyme";
import MapView from "../src/components/MapView.android";
import { expect } from "chai"
import { App } from "../src/containers/App"

describe("<App />", () => {

    it("should have a mapView", () => {
        let app = shallow(<App/>);
        expect(app.find(MapView).is("OsmDroidMapView")).to.equal(true);
    });
});
