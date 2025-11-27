#include<stdio.h>
void main(){
    FILE *f;
    f=fopen("Demo.txt","r");
    char ch;
    if(f==NULL){
        printf("File not found");
    }
    int flag=1;
    while(fscanf(f,"%c",&ch)==1){
        if(ch==' ' || ch=='\n' || ch=='\t'){
            printf("%c",ch);
            flag=1;
        }
        else if(flag==1){
            printf("%c",ch-'a'+'A');
            flag=0;
        }
        else{
            printf("%c",ch);
        }
    }
    fclose(f);
}