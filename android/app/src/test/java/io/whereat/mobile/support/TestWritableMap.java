package io.whereat.mobile.support;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;

import java.util.HashMap;
import java.util.Map;

public class TestWritableMap implements WritableMap {
    private Map<String, Boolean> booleans = new HashMap<>();
    private Map<String, Double> doubles = new HashMap<>();
    private Map<String, Integer> integers = new HashMap<>();
    private Map<String, String> strings = new HashMap<>();
    private Map<String, WritableArray> arrays = new HashMap<>();
    private Map<String, WritableMap> maps = new HashMap<>();

    @Override
    public void putNull(String key) {

    }

    @Override
    public void putBoolean(String key, boolean value) {
        booleans.put(key, value);
    }

    @Override
    public void putDouble(String key, double value) {
        doubles.put(key, value);
    }

    @Override
    public void putInt(String key, int value) {
        integers.put(key, value);
    }

    @Override
    public void putString(String key, String value) {
        strings.put(key, value);
    }

    @Override
    public void putArray(String key, WritableArray value) {
        arrays.put(key, value);
    }

    @Override
    public void putMap(String key, WritableMap value) {
        maps.put(key, value);
    }

    @Override
    public void merge(ReadableMap source) {

    }

    @Override
    public boolean hasKey(String name) {
        return false;
    }

    @Override
    public boolean isNull(String name) {
        return false;
    }

    @Override
    public boolean getBoolean(String name) {
        return booleans.get(name);
    }

    @Override
    public double getDouble(String name) {
        return doubles.get(name);
    }

    @Override
    public int getInt(String name) {
        return integers.get(name);
    }

    @Override
    public String getString(String name) {
        return strings.get(name);
    }

    @Override
    public ReadableArray getArray(String name) {
        return arrays.get(name);
    }

    @Override
    public ReadableMap getMap(String name) {
        return maps.get(name);
    }

    @Override
    public ReadableType getType(String name) {
        return null;
    }

    @Override
    public ReadableMapKeySetIterator keySetIterator() {
        return null;
    }
}
