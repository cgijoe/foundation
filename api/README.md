# to see all docker images
sudo docker images


# to see the status of docker images
sudo docker build -t 56faisal/typescript-starter .

# build the docker image
sudo docker build -t 56faisal/typescript-starter .

# push docker image to dockerhub
sudo docker login -u "username" -p "password" docker.io
docker push 56faisal/typescript-starter:tagname

# pull docker image
56faisal/typescript-starter

# to run the docker image
sudo docker run -p 8888:3001 56faisal/typescript-starter

# here 8888 is the port open to the world and 3001 is the port in which our application is running



