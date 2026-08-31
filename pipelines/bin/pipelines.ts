import * as cdk from 'aws-cdk-lib';
import { ChainstackNgnixPipelinesStack } from "../lib/chainstack-pipeline-stack";

const app = new cdk.App();

const branch = process.env.CDK_DEFAULT_ACCOUNT === process.env.CDK_DEV_ACCOUNT ? 'development' : 'main';

new ChainstackNgnixPipelinesStack(app, 'chainstack-ecr-build-pipeline', {
  branchName: branch,
  description: 'blockchain client pipeline for the devops blockchain nodes',
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});
