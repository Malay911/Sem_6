#include<stdio.h>
void main(){
    FILE *f1;
    FILE *f2;
    f1=fopen("File1.txt","r");
    f2=fopen("File2.txt","a");
    char ch;
    if(f1==NULL || f2==NULL){
        printf("File not found");
    }
    while(fscanf(f1,"%c",&ch)==1){
        fprintf(f2,"%c",ch);
    }
    fclose(f1);
    fclose(f2);
    fprintf(f2,"\n");
}