docker pull ngrok/ngrok

docker run --net=host -it -e NGROK_AUTHTOKEN=2lZ1ZfjjQsuuKxkkzYLxN4BAz6Z_243yqnqfA5ai2wANUgLUG ngrok/ngrok:latest http 80
run : ngrok http 3001
copy grok endpoint to line official