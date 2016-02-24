package io.whereat.mobile;

import android.app.Activity;
import android.content.Context;

import com.facebook.react.bridge.ReactTestHelper;
import com.facebook.react.uimanager.ThemedReactContext;

import org.assertj.core.data.Offset;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.osmdroid.tileprovider.tilesource.TileSourceFactory;
import org.osmdroid.views.MapView;
import org.robolectric.Robolectric;
import org.robolectric.RobolectricGradleTestRunner;
import org.robolectric.annotation.Config;

import io.whereat.mobile.support.FakeZoomButtonsController;

import static org.assertj.core.api.Java6Assertions.assertThat;
import static org.assertj.core.data.Offset.offset;

@RunWith(RobolectricGradleTestRunner.class)
@Config(constants = BuildConfig.class, sdk = 21, shadows=FakeZoomButtonsController.class)

public class OsmDroidMapViewManagerTest {

    private static final Offset<Double> MARGIN = offset(.0001);
    OsmDroidMapViewManager viewMgr;
    ThemedReactContext themedCtx;

    @Before
    public void setup() throws Exception {
        viewMgr = new OsmDroidMapViewManager();
        Context ctx = Robolectric.buildActivity(Activity.class).create().start().resume().visible().get();
        themedCtx = new ThemedReactContext(ReactTestHelper.createCatalystContextForTest(), ctx);
    }

    @Test
    public void getName_should_returnCorrectClassName() throws Exception {
        assertThat(viewMgr.getName()).isEqualTo("OsmDroidMapView");
    }

    @Test
    public void createViewInstance_should_constructMapViewCorrectly() throws Exception {
        MapView map = viewMgr.createViewInstance(themedCtx);
        map.layout(0, 0, 1920, 1080); // because robolectric views default to 0 x 0

        assertThat(map).isInstanceOf(MapView.class);
        assertThat(map.getTileProvider().getTileSource()).isEqualTo(TileSourceFactory.MAPNIK);
        assertThat(map.canZoomIn()).isTrue();
        assertThat(map.canZoomOut()).isTrue();

        assertThat(map.getZoomLevel()).isEqualTo(13);
        assertThat(map.getMapCenter().getLatitude()).isEqualTo(40.7447038, MARGIN);
        assertThat(map.getMapCenter().getLongitude()).isEqualTo(-73.9870748, MARGIN);
    }
}
