export AWS_REGION=eu-central-1

start:
	yarn --cwd website start 

build:
	yarn --cwd website build

deploy:
	sam deploy

upload: build
	aws s3 sync ./website/dist/website s3://$(shell make get-bucket) --acl public-read

get-bucket:
	@aws cloudformation describe-stacks \
		--stack-name "sam-app-3" \
		--query 'Stacks[].Outputs[?OutputKey==`WebsiteBucketName`].OutputValue' \
		--output text