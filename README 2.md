# dpg-cloud-native-iq

바로 npm run serve가 되지 않을 경우
- root 터미널에 아래 명령어 입력
1. export NODE_OPTIONS=--openssl-legacy-provider
2. rm -rf node_modules
3. rm -rf package-lock.json
2. npm i
3. npm run serve