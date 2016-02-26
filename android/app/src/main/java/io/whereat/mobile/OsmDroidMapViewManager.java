/*
 * Copyright (c) 2016-present, Total Location Test Paragraph.
 * All rights reserved.
 *
 * This file is part of Where@. Where@ is free software:
 * you can redistribute it and/or modify it under the terms of
 * the GNU General Public License (GPL), either version 3
 * of the License, or (at your option) any later version.
 *
 * Where@ is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. For more details,
 * see the full license at <http://www.gnu.org/licenses/gpl-3.0.en.html>
 */

package io.whereat.mobile;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

import org.osmdroid.tileprovider.tilesource.TileSourceFactory;
import org.osmdroid.util.GeoPoint;
import org.osmdroid.views.MapView;

public class OsmDroidMapViewManager extends SimpleViewManager<MapView> {

    public static final String REACT_CLASS = "OsmDroidMapView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected MapView createViewInstance(ThemedReactContext context) {
        MapView map = new MapView(context);

        map.setTileSource(TileSourceFactory.MAPNIK);
        map.setBuiltInZoomControls(true);
        map.setMultiTouchControls(true);

        return map;
    }

    @ReactProp(name = "center")
    public void setCenter(MapView map, ReadableMap center) {
        GeoPoint geoCenter = new GeoPoint(center.getDouble("lat"), center.getDouble("lon"));
        map.getController().setCenter(geoCenter);
    }

    @ReactProp(name = "zoom")
    public void setZoom(MapView map, Integer zoom) {
        map.getController().setZoom(zoom);
    }
}
