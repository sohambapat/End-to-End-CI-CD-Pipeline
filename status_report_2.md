Accomplishments: 
-	The workflow for linting and tests now works correctly. It triggers when a pull request is created. https://github.ncsu.edu/sbapat2/CSC-519-Project/commits/main/.github/workflows/linting.yml 
-	Started using github projects to track progress
-	Configured ESLint for linting app.js
-	Enabled Jest testing and used “detectOpenHandles” and “forceExit” tags at the end of my jest command to end connection on ports when testing is done.
-	Provisioned two new instances of ubuntu and configured actions runners to run on the background

Next Steps (Includes security components):
-	Create Static Application Security Testing(SAST) as a security component to my workflow. Using CodeQL for SAST
-	Create Docker scanning tool that checks for security vulnerabilities to my workflow. Using Trivy. 
-	Write an ansible playbook that installs dependencies, runs the app in docker and exposes it to the internet for accessibility
-	Currently, the instances run all workflows, but the final version will have one instance handle linting and testing and the other two instances will handle docker deployment
-	Make sure the entire workflow is working correctly
-	Update readme.md with more information in the pipeline design section

Retrospective:
-	As I progressed in the project, I realized that it would be better to segment an instance exclusively for linting and testing. Currently the workflow runs on all instances.
-	Jest was using the testing offered by app.test.js but the connection to port never closed. This needed to be done manually by using “ForceExit”
-	Started tracking project progress using GitHub projects. It helps understand progress and tasks at a granular level
