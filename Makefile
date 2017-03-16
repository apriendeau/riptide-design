.PHONY: build server static help
.DEFAULT_GOAL := help

build: ## build assets
	@gulp

watch: ## watch the assest pipeline and build
	@gulp watch

server: ## run the node server on :3000
	@node index.js

help: ## display this help
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
