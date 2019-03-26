run:
	pipenv install --deploy
	./gulp
	pipenv run lektor server

deploy:
	pipenv run lektor build
	pipenv run lektor deploy

.PHONY: run deploy