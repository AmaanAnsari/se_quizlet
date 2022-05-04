FROM python:3.8-alpine

WORKDIR /code
COPY req.txt req.txt
RUN pip3 install -r req.txt

COPY compiler_python.py .

CMD ["python", "compiler_python.py"]