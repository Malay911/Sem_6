#include<stdio.h>
void main(){
    FILE *f;
    f=fopen("demo.txt","r");
    int sc=0,tc=0,cc=0,nlc=0;
    char ch;
    if(f==NULL){
        printf("File not found");
    }
    while(fscanf(f,"%c",&ch)==1){
        cc++;
        if(ch=='\t'){
            tc++;
        }
        else if(ch==' '){
            sc++;
        }
        else if(ch=='\n'){
            nlc++;
        }
    }
    fclose(f);
    printf("%d ",sc);
    printf("%d ",tc);
    printf("%d ",cc);
    printf("%d ",nlc+1);
}