This is a template I created to bootstrap serverless project.

** Instruction:
* Run `rm -rf .git`
* Update *.env* & *serverless.yml* files as needed
* Run `yarn install`

** Some Helpful Commands:
* `npm install -g aws-cli serverless`
* `sls config credentials --provider aws --key ### --secret ### --profile serverless-admin`
* `sls create -t aws-nodejs --path <folderName>`
* `sls deploy`  => deploy the whole project
* `sls deploy -f <functionName>`  => deploy only 1 function
* `sls invoke local -f <functionName>` => invoke function  locally
* `sls logs -f <functionName> -t` => see the log in real time
* `sls remove` => remove everything
* `sls offline start` => to start the localhost server
* `sls schedule` => to launch cron locally