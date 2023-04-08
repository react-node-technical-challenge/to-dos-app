A lot of improvements could be done, both from the technical and product point of view, but should be enough for you to get a sense of how I code and structure things :)

Other considerations:

* Instead of creating two repositories, I've created one so that you can easily spin everything up and play around by your own. Just run `docker-compose up` and go to: `http://localhost:3000`.
* The auth part is missing, but I added some files for it to make it clear how I would structure the project if it had everything that is described in the document.
* For the API, I've decided to use REST because lately I've been working more with it than with GraphQL and I felt like I could progress faster.
* The routes/controllers could've directly called the repository layer instead of passing through a service. However, I tend to do it like this even if the service doesn't do anything else than calling the repository because my experience says that the sooner or the later there will be more logic. In other words, I like to leave it prepared.
* I didn't overcomplicate the folder structure given the size of the project (for example, using _Clean Architecture_)
* There are no tests. Not because I don't usually write them, but because it was not mentioned and this is not a real project.

