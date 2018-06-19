# Budget Pipeline

This is a basic streaming data pipeline that uses AWS API Gateway, DynamoDB,
and Lambda to demonstrate [Serverless Components](https://github.com/serverless/components).

Follow along by checking out branches `step[1-5]` and examining the changes.

## Steps to Completion
1. Basic setup of the `serverless.yml` and `index.js` files.
2. Create our Lambda function and add it to the `serverless.yml` file.
3. Add a REST API to the `serverless.yml` file.
4. Add our DynamoDB table to the `serverless.yml` file.
5. Deploy!

### Step 1
First we setup some housekeeping for our component. We name our component
`budget-pipeline`, and we add a single required variable. This variable,
`name`, will be used at deploy time to identify which instance of the
`budget-pipeline` component we're referring to.

### Step 2
Now we create our Lambda function and add it to our `serverless.yml` file.

**Note:** This is not the same as our `index.js` file which contains logic for
the component itself. To separate the two, we place our lambda function
underneath the `code` subdirectory.

### Step 3
We have a Lambda function and that's great, but right now we don't have any way
to invoke it.

Let's fix that by adding the rest-api component to our `serverless.yml` file.

### Step 4
So we have a function to process our data, and a way to invoke it, but at the
moment we're just sending JSON back to the caller rather than storing it
somewhere. That's not how an analytics pipeline would work, even a budget one.

After processing and transforming our data, let's store it in a DynamoDB table.
It's lightning fast, and we'll only pay for what we use. Luckily, there's a
dynamodb component; let's add it to the `serverless.yml` file.

### Step 5
We have everything we need, we just need to do some final touch-ups. We need to
wire up our DynamoDB table and Lambda function so that the function receives
the table name dynamically. We do this by passing the table name as an
environment variable in our lambda declaration in `serverless.yml`.

We also want to make our function actually do something! We modify `data.js`
to extract the body of the event, modify the resulting object, and attempt to
store the modified object in our DynamoDB table.

## Deployment
To deploy our component, run `components deploy`. The command will show us the
URL for our newly-created API endpoint.

## Removal
To remove our component, run `components remove`.
