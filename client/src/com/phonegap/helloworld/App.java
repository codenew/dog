package com.phonegap.helloworld;

//import android.app.Activity;
import android.os.Bundle;
import com.phonegap.*;
import com.strumsoft.websocket.phonegap.WebSocketFactory;

public class App extends DroidGap {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //setContentView(R.layout.main);
        super.loadUrl("file:///android_asset/www/index.html");

		// ��websocket֧��
		//appView.addJavascriptInterface(new WebSocketFactory(appView),
		//		"WebSocketFactory");
    }
}