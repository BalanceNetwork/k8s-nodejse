#!/bin/sh

REPO=$1

mkdir app/

git clone "$1" app/

cd app/

yarn

yarn start
