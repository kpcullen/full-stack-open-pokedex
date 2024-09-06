In a project written in Python, we have several different testing libraries and frameworks available. For unit testing, we might choose the built-in testing library "PyUnit". We also have several frameworks to choose from such as PyTest, Nosetest, Doctest and Robot. For UI testing, we can use either Playwright or Cypress.

For setting up the CI we have a few different options. Besides Github Actions, we might also choose a different cloud-based service such as Gitlab, JetBrains TeamCity, Atlassian, Microsoft's Azure or AWS. Moreover we do have the option of self-hosting with Jenkins.

It's important to keep in my mind, however, that self-hosting isn't easy to configure. Everything must be written from scratch in order to set it up, whereas with cloud-based services, they tend be much simpler to use out-of-box, requiring less boilerplate and configurations. There is also less of a worry of hardware failures.

In determining whether to go the self-hosting or cloud-based route for CI/CD of our project, there's a few things we should consider: the complexity of the app, the size of the team working on it, it's resource needs, and billing concerns.

However, since this is not a large project, and doesn't require an extraordinary amount of resources, such as GPUs, we're better off selecting a cloud-based service, specifially GitHub Actions. It'll save us the hassle of building and setting up our own system, and be more cost effective.

This especially makes sense considering we are already collaborating and developing on GitHub. Therefore, it'll be easier to integrate into our workflow.

#testing
