package io.whereat.mobile;

import android.content.Context;

import com.facebook.react.bridge.CatalystInstance;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.queue.MessageQueueThread;
import com.facebook.react.bridge.queue.ReactQueueConfiguration;
import com.facebook.react.uimanager.ThemedReactContext;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.osmdroid.api.IGeoPoint;
import org.osmdroid.tileprovider.tilesource.TileSourceFactory;
import org.osmdroid.views.MapView;
import org.robolectric.Robolectric;
import org.robolectric.RobolectricGradleTestRunner;
import org.robolectric.annotation.Config;


import io.whereat.mobile.support.FakeZoomButtonsController;

import static io.whereat.mobile.support.Matchers.isWithin;
import static org.assertj.core.api.Java6Assertions.assertThat;
import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.spy;

@RunWith(RobolectricGradleTestRunner.class)
@Config(constants = BuildConfig.class, sdk = 21, shadows=FakeZoomButtonsController.class)


public class OSMMapViewManagerTest {

    OSMMapViewManager viewMgr;
    Context ctx;
    ReactApplicationContext reactAppCtx;
    CatalystInstance catalystInstance;
    ReactQueueConfiguration queueConfig;

    @Before
    public void setup(){

        viewMgr = new OSMMapViewManager();
        ctx = Robolectric.buildActivity(MainActivity.class).get();
        reactAppCtx = mock(ReactApplicationContext.class);

        // The below mocksand stubs are necessary (but insufficient!)
        // to avoid throwing Null Pointer Exceptions when React Native
        // tries to build bridge btw/ native & JS layer.

        // Specifically...

        // This mock and stub prevents NPE's on these lines of `com.facboook.react.bridge.ReactContext`:
        // https://github.com/facebook/react-native/blob/master/ReactAndroid/src/main/java/com/facebook/react/bridge/ReactContext.java#L109-L111

        catalystInstance = mock(CatalystInstance.class);
        doReturn(catalystInstance).when(reactAppCtx).getCatalystInstance();

        // This mock and these stubs prevent NPE's on these lines of the same class:
        // https://github.com/facebook/react-native/blob/master/ReactAndroid/src/main/java/com/facebook/react/bridge/ReactContext.java#L53-L72

        queueConfig = mock(ReactQueueConfiguration.class);

        doReturn(queueConfig).when(catalystInstance).getReactQueueConfiguration();
        doReturn(mock(MessageQueueThread.class)).when(queueConfig).getUIQueueThread();
        doReturn(mock(MessageQueueThread.class)).when(queueConfig).getNativeModulesQueueThread();
        doReturn(mock(MessageQueueThread.class)).when(queueConfig).getJSQueueThread();

        // All of which is invoked when we try to construct a ThemedReactContext here:
        // https://github.com/facebook/react-native/blob/master/ReactAndroid/src/main/java/com/facebook/react/uimanager/ThemedReactContext.java#L37
        // Which we have to do to pass it as the only argument to our `createViewInstance` method
    }

    @Test
    public void getName_should_returnCorrectClassName() throws Exception {
        assertThat(viewMgr.getName()).isEqualTo("OSMMapView");
    }

    @Test
    public void createViewInstance_should_constructMapViewCorrectly() throws Exception {

        ThemedReactContext reactCtx = new ThemedReactContext(reactAppCtx, ctx);
        // ^-- throws NPE at android.view.ContextThemeWrapper.java:135 (calling #initializeTheme)
        // because mocking ThemedReactContext means we don't have a theme!

        MapView map = viewMgr.createViewInstance(reactCtx);
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