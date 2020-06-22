start:
	yarn start

deploy:
	sam deploy

upload:
	aws s3 sync ./website s3://$(BUCKET_NAME) --acl public-read