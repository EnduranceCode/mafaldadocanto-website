#!/bin/bash
#
# Creates the build files and copy it to the home folder of the production server
#
# The SSH config file must have an Host directive named "endurance" configured
# to connect to the production server where the website is hosted
#
# To finalize the deployment, the build files must be copied, on the production server,
# from the home folder to the Apache Server DocumentRoot folder

# Create the production build
npm run build:prod

# Copy build files to the production server
rsync -avh --delete dist/ endurance:~/prod-files/mafaldadocanto-website
