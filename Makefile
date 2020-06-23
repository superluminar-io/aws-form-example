deploy:
	sam deploy

upload:
	aws s3 sync ./website/dist/website s3://$(BUCKET_NAME) --acl public-read