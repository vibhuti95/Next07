package Next2022;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
@RunWith(Cucumber.class)
@CucumberOptions(features = //" /Users/vibhutitandel/CUCUMBER PROJECTS/NEXT/src/test/java/Next2022/Features/Login/Search.feature",
        //"/Users/vibhutitandel/CUCUMBER PROJECTS/NEXT/src/test/java/Next2022/Features/Login/AddTocart.feature",
        "/Users/vibhutitandel/CUCUMBER PROJECTS/NEXT/src/test/java/Next2022/Features/Login/forgettPassword.feature",
        dryRun =false
        //format={"pretty","html:report"}
)
public class nextRunner
{
}
