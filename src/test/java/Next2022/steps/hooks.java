package Next2022.steps;

import Utils.commonFunctions;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class hooks extends commonFunctions {
    @Before
    public void openBrowser() throws InterruptedException {
        setup();
        open_the_application_url();
       // System.out.println("open the browser");
    }
    @After
    public  void closeBrowser()
    {
         tearDown();//System.out.println("close the browser");
         }
}
