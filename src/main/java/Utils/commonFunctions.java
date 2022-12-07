package Utils;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.time.Duration;

public class commonFunctions {
    public static  WebDriver driver;
    public void setup() throws InterruptedException {
        WebDriverManager.firefoxdriver().setup();
        driver=new FirefoxDriver();
        Thread.sleep(10);
    }
    public void open_the_application_url()  {
        driver.get("https://www.next.co.uk/");
        driver.findElement(By.id("onetrust-accept-btn-handler")).click();
        driver.manage().window().maximize();

    }
    public void tearDown()
    {
        driver.close();
    }
}
