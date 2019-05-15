package LumosysTestCucumber;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import junit.framework.Assert;

public class LumosysStepDefinitions {
	
	private WebDriver driver;
	
	
	@Given("^I have opened the Lumosys site$")
	public void I_have_opened_the_Lumosys_site() {
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
		driver.get("https://www.lumosystem.com:8083/");
	}
	@When ("^I Login with an exist user$")
	public void I_Login_with_an_exist_user( ) {
		//find element user with Id("USU_USERNAME")
		driver.findElement(By.id("USU_USERNAME")).sendKeys("MCORDOVA");
		//find element password with Id("USU_PASSWORD")
		driver.findElement(By.id("USU_PASSWORD")).sendKeys("Qa#12345");
		// find element Button Enter with Id("btnIngresar")
		driver.findElement(By.id("btnIngresar")).click();
	}
	@Then ("^I validate there are Login$")
	public void I_validate_there_are_Login( ) {
	List<WebElement>MenuList=driver.findElements(By.linkText("Fondeos"));
	Assert.assertTrue(MenuList.size()>1);
	
	}
		

}
