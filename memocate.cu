/* memocate.cu: The Trivial Memory Allocator in CUDA */
/* Disclaimer: I am not responsible for anything that happens. You are warned */
/* Author: TD */

#include <stdlib.h>
#include <stdio.h>
#include <string.h>


int main(void)
{
	int size = 2147483647;
	char *a = malloc(size);
	char *d_a;
	cudaMalloc((void **)&d_a,size);
	cudaMemcpy(d_a,a,size,cudaMemcpyHosttovice);
	cudaFree(d_a);
	free(a); 
	return 0;

}
