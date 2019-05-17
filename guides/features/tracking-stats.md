Instructions - Tracking Stats
--

### Overview

In this feature, you will now begin working with all the cards to introduce stats such as: `attempts`, `matches`, `accuracy`, and `games_played`. Additionally, you will be accurately displaying them as the user plays through the game.

### Feature Set

1. In your `index.html`, uncomment all the cards. You should now have a total of 18 cards displaying on the page.
2. In your `script.js`, begin by introducing the following variables:
   - `attempts`
   - `accuracy`
   - `games_played`
3. Modify your existing `flipCard` function. 
   - Determine during the execution of code when this function gets called:
     - When an `attempt` is made, increase the count of this variable by `1`.
     - When the game is complete, increase the count of the `games_played` variable by `1`.
4. Create a function, `displayStats`.
   - This function will select the appropriate child elements inside of the `<aside>` and change the text with the values inside of the our stats variables:
     - `matches`
     - `attempts`
     - `accuracy`
     - `games_played`

### Design Docs

<!-- TODO Will have design docs located here 

- Bullet
![Alt-text-for-image](/path/to/image.jpg)

-->


### After Each Feature

- When your feature implementation is complete, you will want to save and submit your work to the branch that you have created.
  - Use `git status` to check that you are on the correct branch that represents your feature.
  - You will want to **add**, **commit**, and **push** the code that you have written to the appropriate Github repository.
    1. `git add .`
    2. `git commit -m "Description of the feature that you have implemented"`
       - e.g. `git commit -m "Added simple HTML skeleton"`
    3. `git push origin FEATURE_NAME_HERE`
       - e.g. `git push origin skeleton`

- Finally, you will want to create a pull request. This will merge the code from your newly **completed** feature branch into your `master` branch.

  1. Navigate to <kbd>New Pull Request</kbd>:
  ![Navigate to pull requests](../post-feature/navigate-to-pull-request.gif)
  2. Compare changes to merge: 
  ![Compare changes to merge](../post-feature/compare-changes.gif)
  3. Create a new pull request:
  ![Create new pull request](../post-feature/create-pull-request.gif)
  4. Merge pull request:
  ![Merge pull request](../post-feature/merge-pull-request.gif)
  5. Update master with the new changes:
  ![Update master](../post-feature/pull-new-changes.gif)
  6. Go back to [Features](../../README.md), if you're still working through the project.
