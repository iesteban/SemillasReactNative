package com.semillasreactnative;

import com.facebook.react.ReactActivity;
import com.proxima.RCTDigits.DigitsPackage;
import com.digits.sdk.android.Digits;

import android.support.v7.app.ActionBarActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;

import com.twitter.sdk.android.core.TwitterAuthConfig;
import io.fabric.sdk.android.Fabric;

import com.twitter.sdk.android.core.TwitterCore;
import com.digits.sdk.android.*;

public class MainActivity extends ReactActivity {

    private static final String TWITTER_KEY = "6FJMTRCi3hZPqJOITD56y3KzF";
    private static final String TWITTER_SECRET = "HR4HkIl63AJfE4zmHH7XOKkH0FtZ3r6ivgRXzC1BLktYfyvCGQ";

    @Override
    protected String getMainComponentName() {
        return "SemillasReactNative";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
          super.onCreate(savedInstanceState);
          TwitterAuthConfig authConfig = new TwitterAuthConfig(TWITTER_KEY, TWITTER_SECRET);
          Fabric.with(this, new TwitterCore(authConfig), new Digits.Builder().build());
        }
}

