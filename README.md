This is a template I created to bootstrap serverless project.

** Instruction:
* Run `rm -rf .git`
* Update *.env* & *serverless.yml* files as needed
* Run `yarn install`

** Some Helpful Commands:
* npm install -g aws-cli serverless
* sls config credentials --provider aws --key ### --secret ### --profile serverless-admin
* sls create -t aws-nodejs --path <folderName>
* sls deploy -v  => deploy the whole project
* sls deploy -f <functionName>  => deploy only 1 function
* sls invoke -f -l  <functionName> => invoke function  locally
* sls logs -f <functionName> -t
* sls remove => remove everything
* sls offline => to start the localhost server