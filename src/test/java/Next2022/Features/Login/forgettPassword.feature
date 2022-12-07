Feature: Forgot password working
  Scenario: validating forgot password functionality
    When :you are on next home page
    Then :click on myaccount icon
    Then :Then :provide valid usernameas "tandelvibhuti95@gmail.com"
    And :click on forgot password link
    Then :you shold get pop window to rest password click on Reset button
    And :check the registered email address for which  password got reset
    Then it will give you temparary password and enter it into password fied
    And :click on sign in button
