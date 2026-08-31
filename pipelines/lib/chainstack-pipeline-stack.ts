import {CfnOutput, Duration, Fn, RemovalPolicy, Stack, StackProps} from "aws-cdk-lib";
import { Construct } from "constructs";
import * as ecr from "aws-cdk-lib/aws-ecr";
import * as s3 from "aws-cdk-lib/aws-s3";
import { GithubEcrPipeline } from "./constructs/github-ecr-pipeline-construct/github-ecr-construct";

export interface PipelineStackProps extends StackProps {
  branchName: string;
}

export class ChainstackNgnixPipelinesStack extends Stack {
  constructor(scope: Construct, id: string, props?: PipelineStackProps) {
    super(scope, id, props);

    const { branchName } = props!;

    const repository = new ecr.Repository(this, "repository-nodes-repo", {
      repositoryName: "chainstack-nodes-nginx",
      removalPolicy: RemovalPolicy.DESTROY,
    });

    repository.addLifecycleRule({
      tagPrefixList: ["prod"],
      maxImageCount: 9999,
    });

    repository.addLifecycleRule({ maxImageAge: Duration.days(30) });

    const bucketName = Fn.importValue("artifact-bucket");

    const bucket = s3.Bucket.fromBucketName(this, "s3-bucket", bucketName);

    const pipeline = new GithubEcrPipeline(this, "GithubEcrCodePipeline", {
      ecrRepository: repository,
      githubRepo: "blockchain-clients",
      branchName: branchName,
      directoryName: "services/chainstack",
      artifactBucket: bucket,
    });

    new CfnOutput(this, 'chainstak-node-repository', {
      value: repository.repositoryName,
      exportName: 'chainstack-node-repo'
    });
  }
}
