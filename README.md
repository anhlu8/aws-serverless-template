This is a template I created to bootstrap serverless project.

** Instruction:
* Run `rm -rf .git`
* Update *.env* & *serverless.yml* files as needed
* Run `yarn install`

** Some Helpful Commands:
* sls create --t aws-nodejs --path FOLDERNAME
* sls deploy -v  
* sls deploy function -f FUNCTIONNAME  
* sls invoke local --function FUNCTIONNAME
* sls invoke -f hello -l  
* sls logs -f FUNCTIONNAME -t
* sls remove 