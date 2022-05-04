FROM python:3.8-alpine

#WORKDIR /db
COPY req.txt req.txt
RUN pip3 install -r req.txt

COPY db.py .

CMD ["python", "db.py"]