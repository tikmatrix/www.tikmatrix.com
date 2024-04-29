npm config set proxy http://localhost:7890
npm config set https-proxy http://localhost:7890
npm install
npm run start
npm config delete proxy
npm config delete https-proxy