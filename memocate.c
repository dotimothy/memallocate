/* memocate.c: The Trivial Memory Allocator in C */
/* Disclaimer: I am not responsible for anything that happens. You are warned */
/* Author: TD */

#include <stdio.h>
#include <stdlib.h>

int main(void)
{
	int size = 2147483647, counter = 0;
	char *a = malloc(size), *b = malloc(size), *c = malloc(size), *d = malloc(size), *e = malloc(size), *f = malloc(size), *g = malloc(size), *h = malloc(size), *i = malloc(size), *j = malloc(size), *k = malloc(size), *l = malloc(size), *m = malloc(size), *n = malloc(size), *o = malloc(size), *p = malloc(size), *q = malloc(size), *r = malloc(size), *s = malloc(size), *t = malloc(size), *u = malloc(size), *v = malloc(size), *w = malloc(size), *x = malloc(size), *y = malloc(size), *z = malloc(size);
	char *temp1 = NULL, *temp2 = NULL, *temp3 = NULL, *temp4 = NULL, *temp5 = NULL, *temp6 = NULL, *temp7 = NULL, *temp8 = NULL, *temp9 = NULL, *temp10 = NULL, *temp11 = NULL, *temp12 = NULL, *temp13 = NULL, *temp14 = NULL, *temp15 = NULL, *temp16 = NULL, *temp17 = NULL, *temp18 = NULL, *temp19 = NULL, *temp20 = NULL, *temp21 = NULL, *temp22 = NULL, *temp23 = NULL, *temp24 = NULL, *temp25 = NULL, *temp26 = NULL;
	char *letter[] = {a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z};
	char *temp[] = {temp1,temp2,temp3,temp4,temp5,temp6,temp7,temp8,temp9,temp10,temp11,temp12,temp13,temp14,temp15,temp16,temp17,temp18,temp19,temp20,temp21,temp22,temp23,temp24,temp25,temp26};
	//initializing letter to temp
	for(counter = 0; counter < 26; counter++)
	{
		temp[counter] = letter[counter];
	}
	//memocate part :)
	while(size > 0)
	{
		for(counter = 0; counter < 26; counter++)
		{
			*temp[counter] = counter + 97;
			//printf("%c",*temp[counter]);
			temp[counter]++;
		}
		size--;
	}
	//freeing
	for(counter = 0; counter < 26; counter++)
	{
		free(letter[counter]); 
	}
	return 0;
}
