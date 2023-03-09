# !/bin/bash

if [ "$CF_PAGES_BRANCH" == "main" ]; then

  npm run build:prod

elif [ "$CF_PAGES_BRANCH" == "development" ]; then

  npm run build:dev

else

  npm run build:dev

fi