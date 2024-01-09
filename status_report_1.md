Accomplishments:
-	Wrote down all action items required to be completed for this project. 
-	Created branch structure: Dev branch off main and Release branch off Dev.
-	Created branch protection rules. Currently, the only active rule is to require pull request and approval before merging into any branch. As the project gets developed more, additional rules will be added.
-	Provisioned an ubuntu server and created a self-hosted runner that runs in the background using screen. Installed docker on the server.
-	Created a first draft of linting workflow - https://github.ncsu.edu/sbapat2/CSC-519-Project/commit/09eb4ead2a19d1ff393a418b37baf90164b5d613

Next Steps: 
-	The workflow for linting does not run correctly. The next step is to make the linting and testing workflows run correctly using the self-hosted runner
-	Allow docker environment on servers to run in the background
-	Write ansible playbook that configures docker containers to run application

Retrospective:
-	The setup for workflows is not currently working as intended. The workflow is not getting triggered from a pull request, so trying to get that fixed.
-	Creating the pipeline is trickier than expected. Making every piece of the puzzle fit manually needs more research and a deeper understand of the ecosystem.
-	In the next sprint, I will look at more online resources to solve the issues I am facing with configuring workflows correctly.
