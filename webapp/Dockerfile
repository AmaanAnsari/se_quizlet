FROM python:3.8-slim-buster

WORKDIR .
COPY req.txt req.txt
RUN pip3 install -r req.txt

COPY main.py .

CMD ["python", "main.py"]