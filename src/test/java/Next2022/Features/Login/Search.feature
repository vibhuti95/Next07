Feature: search functionality
  Scenario: validate search functionality
    Given :you are on next home page
    When :I enter a product name as"coats" into search inputbox
    And :I click on search icon
    Then :I should able to see all "Coats" as result
