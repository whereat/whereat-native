package io.whereat.mobile.support;

import java.lang.reflect.Field;

public class TestUtil {
    public static Object extractPrivateField(Object obj, String fieldName) throws NoSuchFieldException, IllegalAccessException {
        Class<?> clazz = obj.getClass();
        Field field = clazz.getDeclaredField(fieldName);
        field.setAccessible(true);
        return field.get(obj);
    }

}
