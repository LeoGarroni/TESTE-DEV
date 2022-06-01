FROM python:3.10.4

WORKDIR /app

COPY . .

ADD . /app

RUN pip install -r requirements.txt

CMD ["uvicorn", "index:app", "--host", "0.0.0.0", "--port", "15400"]