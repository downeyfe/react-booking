#Approach and Thoughts

I'm from more of an Angular world so getting into the React way of thinking took a bit of extra time initially. I hope that I've built this application in a conventional way, but I'm willing to learn where I can improve on it!

I began by pulling in the booking data to display in the list view and then added the select functionality.
I extracted each list item into its own component, but then realised I needed to move the handling of the selection up a level to the main layout component. Each child component is "dumb" but the main layout contains these and passes down the changes to the children.
I followed this approach when making the new details component too.
Since working with React is a bit newer to me, I decided to begin writing unit tests after I had a more stable base to work from, so at this point I started writing my tests. Once this base was in place I added the rest of my tests at the same time as the functionality. A coverage report is shown when the tests run.
I finished the rest of the features and then the styling. I purposely left the styling quite minimal, as it met the brief and showed a level of skill but I didn't want to spend another 3 hours on the styling alone!
Normally I would neaten up my git history by squashing related commits together, but I've left it relatively untouched so you can follow my approach.

If I were to continue this project into a larger application, there are some areas I would choose to expand or update: 
* Extract more small components from Layout, such as the heading
* Update the original classnames provided to be consistent with the new ones I added - this is not difficult to do but I didn't see the benefit at this time
* Work more on the styling so it's more visually appealing
* End to end tests
* Set up a CI environment for running tests, linting, etc
