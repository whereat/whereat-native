package com.whereatclient;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

import org.osmdroid.api.IMapController;
import org.osmdroid.tileprovider.tilesource.TileSourceFactory;
import org.osmdroid.util.GeoPoint;
import org.osmdroid.views.MapView;

public class OSMMapViewManager extends SimpleViewManager<MapView> {
    @Override
    public String getName() {
        return "OSMMapView";
    }

    @Override
    protected MapView createViewInstance(ThemedReactContext context) {
        MapView map = new MapView(context);

        map.setTileSource(TileSourceFactory.MAPNIK);
        map.setBuiltInZoomControls(true);
        map.setMultiTouchControls(true);

        IMapController mapController = map.getController();
        mapController.setZoom(13);
        mapController.setCenter(new GeoPoint(40.7447038,-73.9870748));

        return map;
    }
}
