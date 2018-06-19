# Budget Pipeline

This is a basic streaming data pipeline that uses AWS API Gateway, DynamoDB, and
Lambda to demonstrate [Serverless Components](https://github.com/serverless/components).

## Steps to Completion
1. Basic setup of the `serverless.yml` and `index.js` files.
2. Add a REST API to the `serverless.yml` file.
3. Add our DynamoDB table to the `serverless.yml` file.
4. Create our Lambda function and add it to the `serverless.yml` file.
5. Deploy!

### Step 1
First we setup some housekeeping for our component. We name our component `budget-pipelin`,
and we add a single required variable. This variable, `name`, will be used at deploy
time to identify which instance of the `budget-pipeline` component we're referring to.

## Deployment
To deploy our component, run `components deploy`.

At this moment nothing will happen, as we haven't defined any resources to be created.

## Removal
To remove our component, run `components remove`.
