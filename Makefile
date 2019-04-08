install:
	npm install
start:
	npm babel-node src/bin/brain-games.js
publish:
	npm publish
lint:
	npm eslint src/
