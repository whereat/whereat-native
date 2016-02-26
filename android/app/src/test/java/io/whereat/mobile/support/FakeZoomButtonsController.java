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

package io.whereat.mobile.support;

import android.view.View;
import android.widget.ZoomButtonsController;

import org.robolectric.annotation.Implementation;
import org.robolectric.annotation.Implements;
import org.robolectric.shadows.ShadowZoomButtonsController;

@Implements(ZoomButtonsController.class)
public class FakeZoomButtonsController extends ShadowZoomButtonsController {

    public void __constructor__(View ownerView){   }

    @Implementation
    public void setZoomInEnabled(boolean enabled) {}
    @Implementation
    public void setZoomOutEnabled(boolean enabled) {}
}
