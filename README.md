Criar imagem:
sudo docker build -t teste-dev .
sudo docker run -d -p 8000:8000 teste-dev

docker-compose up --build
sudo docker-compose up -d