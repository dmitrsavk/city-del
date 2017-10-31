#!/bin/bash

rm -rf /var/www/build_old/
mv /var/www/build/ /var/www/build_old/
cp -r ./build/ /var/www/
forever stopall
forever start /root/city-del/src/api/server.js
