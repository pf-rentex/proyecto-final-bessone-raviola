#!/bin/bash

echo Linking API...
# List abd devices and get device ID
devices=$(adb devices | grep -v List | grep -v "^$" | cut -f1)
echo DEVICE: $devices
#echo `adb devices` | cut -c 26-40

# Read backend dotenv file and get port
PORT=`cat ../backend/.env | grep PORT | cut -d '=' -f 2`
echo PORT: $PORT

# Run script to link api for detected device
npm run link-api --device=$devices --port=$PORT
