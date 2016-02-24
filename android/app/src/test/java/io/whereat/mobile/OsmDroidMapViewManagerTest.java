package io.whereat.mobile;

import android.app.Activity;
import android.content.Context;

import com.facebook.react.bridge.JavaOnlyMap;
import com.facebook.react.bridge.ReactTestHelper;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.ThemedReactContext;

import org.assertj.core.data.Offset;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.osmdroid.tileprovider.tilesource.TileSourceFactory;
import org.osmdroid.views.MapView;
import org.robolectric.Robolectric;
import org.robolectric.RobolectricGradleTestRunner;
import org.robolectric.annotation.Config;

import java.lang.reflect.Field;
import java.util.Collections;

import io.whereat.mobile.support.FakeZoomButtonsController;

import static io.whereat.mobile.support.TestUtil.extractPrivateField;
import static org.assertj.core.api.Java6Assertions.assertThat;
import static org.assertj.core.data.Offset.offset;

@RunWith(RobolectricGradleTestRunner.class)
@Config(constants = BuildConfig.class, sdk = 21, shadows=FakeZoomButtonsController.class)

public class OsmDroidMapViewManagerTest {

    private static final Offset<Double> MARGIN = offset(.0001);
    public static final double LAT = 40.7447038;
    public static final double NEW_LAT = 41.7447038;
    public static final int NEW_LAT_E6 = 41744704;

    public static final double LON = -73.9870748;
    public static final double NEW_LON = -74.9870748;
    public static final int NEW_LON_E6 = -74987075;


    OsmDroidMapViewManager viewMgr;
    MapView map;

    @Before
    public void setup() throws Exception {
        viewMgr = new OsmDroidMapViewManager();
        Context ctx = Robolectric.buildActivity(Activity.class).create().start().resume().visible().get();
        ThemedReactContext themedCtx = new ThemedReactContext(ReactTestHelper.createCatalystContextForTest(), ctx);
        map = viewMgr.createViewInstance(themedCtx);
        map.layout(0, 0, 1080, 1920); // because robolectric views default to 0 x 0
    }

    @Test
    public void getName_should_returnCorrectClassName() throws Exception {
        assertThat(viewMgr.getName()).isEqualTo("OsmDroidMapView");
    }

    @Test
    public void createViewInstance_should_constructMapViewCorrectly() throws Exception {
        assertThat(map).isInstanceOf(MapView.class);
        assertThat(map.getTileProvider().getTileSource()).isEqualTo(TileSourceFactory.MAPNIK);
        assertThat(extractPrivateField(map, "mEnableZoomController")).isEqualTo(true); //
        assertThat(extractPrivateField(map, "mMultiTouchController")).isNotNull();
        assertThat(map.getZoomLevel()).isEqualTo(0);
        assertThat(map.getMapCenter()).isNotNull();
    }


    @Test
    public void setZoom_should_reZoomTheMapView() throws Exception {
        viewMgr.setZoom(map, 15);
        assertThat(map.getZoomLevel()).isEqualTo(15);
    }

    @Test
    public void setCenter_should_reCenterTheMapView() throws Exception {
        WritableMap center = new JavaOnlyMap();
        center.putDouble("lat", NEW_LAT);
        center.putDouble("lon", NEW_LON);

        viewMgr.setZoom(map, 13);
        viewMgr.setCenter(map, center); // TODO -- this test fails at zoom levels 0-12, but passes at 13 upwards

        assertThat(map.getMapCenter().getLatitude()).isEqualTo(NEW_LAT, MARGIN);
        assertThat(map.getMapCenter().getLongitude()).isEqualTo(NEW_LON, MARGIN);
    }

    @Ignore
    @Test
    public void clickingZoomButtons_should_zoomTheMap(){
        //use sequence of calls to MotionEvent.obtain to simulate clicking zoom in & zoom out button
    }

    @Ignore
    @Test
    public void pinching_should_zoomTheMap(){
        //use sequence of calls to MotionEvent.obtain to simulate pinch zooming in and out
    }
}
