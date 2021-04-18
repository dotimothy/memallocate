#Makefile for memocate

all: clean memocate
	./memocate

memocate: memocate.c
	gcc memocate.c -o memocate -Wall -ansi -std=c99 -g

clean:
	rm -rf memocate
