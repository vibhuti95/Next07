    Feature: Login to application
      Scenario: login with valid credentials
        Then :you are on next home page
        When :click on myaccount icon
        Then :provide valid usernameas "tandelvibhuti95@gmail.com" and password as "khiyu20*T"
        And :click on login button
        Then :you should able to see My account page
        And :click on signout button
