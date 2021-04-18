#Makefile for memocate

all: memocate
	./memocate

memocate: memocate.c
	gcc memocate.c -o memocate -Wall -ansi -std=c99

clean:
	rm -rf memocate
