FROM python:3.8-alpine

WORKDIR /code
COPY req.txt req.txt
RUN pip3 install -r req.txt
RUN chmod 777 /code/

COPY . .

CMD ["python", "main.py"]