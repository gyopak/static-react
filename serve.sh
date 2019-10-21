docker build . -t static-react &&
docker run -p 8080:80 static-react
