#Makefile for memocate

all: clean memocate
	./memocate

memocate: memocate.c
	gcc memocate.c -o memocate -Wall -ansi -std=c99 -g

c: memocate

gpucate: memocate.cu
	nvcc memocate.cu -o gpucate

python: memocate.py
	python3 memocate.py

clean:
	rm -rf memocate
