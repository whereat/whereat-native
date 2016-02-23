package io.whereat.mobile;

import android.app.Activity;
import android.content.Context;

import com.facebook.react.bridge.ReactTestHelper;
import com.facebook.react.uimanager.ThemedReactContext;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.osmdroid.tileprovider.tilesource.TileSourceFactory;
import org.osmdroid.views.MapView;
import org.robolectric.Robolectric;
import org.robolectric.RobolectricGradleTestRunner;
import org.robolectric.annotation.Config;

import io.whereat.mobile.support.FakeZoomButtonsController;

import static io.whereat.mobile.support.Matchers.isWithin;
import static org.assertj.core.api.Java6Assertions.assertThat;

@RunWith(RobolectricGradleTestRunner.class)
@Config(constants = BuildConfig.class, sdk = 21, shadows=FakeZoomButtonsController.class)

public class OsmDroidMapViewManagerTest {

    OsmDroidMapViewManager viewMgr;
    Context ctx;
    ThemedReactContext themedCtx;

    @Before
    public void setup() throws Exception {
        viewMgr = new OsmDroidMapViewManager();
        ctx = Robolectric.buildActivity(Activity.class).create().start().resume().visible().get();
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
        assertThat(isWithin(map.getMapCenter().getLatitude(), 40.7447038, .0001)).isTrue();
        assertThat(isWithin(map.getMapCenter().getLongitude(), -73.9870748, .0001)).isTrue();
    }
}
