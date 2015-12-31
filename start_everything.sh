echo "Starting node webserver on port 80 "
sudo node node/app.js
echo "Starting rails backend on port 3000"
cd rails_backend
rails s
cd ..
echo "Starting frontend demo at port 8000"
node frontend/demo.js