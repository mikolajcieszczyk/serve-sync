#!/bin/sh

if [ ! -d "node_modules" ]
then
	npm i --legacy-peer-deps
fi

npm run dev
