package io.whereat.mobile.support;

public class Matchers {

    public static boolean isWithin(double expected, double actual, double diff){
        return Math.abs(expected - actual) < diff;
    }
}
