#include <stdio.h>
#include <string.h>

#define SUCCESS 1
#define FAILURE 0

int E(), Edash(), T(), Tdash(), F();

const char *cursor;
char string[64];

int main() {
    printf("Enter the string: ");
    scanf("%s", string);
    cursor = string;

    if (E() == SUCCESS && *cursor == '\0') {
        printf("String accepted\n");
    } else {
        printf("String not accepted\n");
    }
    return 0;
}

int E() {
    if (T() == SUCCESS) {
        return Edash();
    }
    return FAILURE;
}

int Edash() {
    if (*cursor == '+') {
        cursor++;
        if (T() == SUCCESS) {
            return Edash();
        }
        return FAILURE;
    }
    return SUCCESS;
}

int T() {
    if (F() == SUCCESS) {
        return Tdash();
    }
    return FAILURE;
}

int Tdash() {
    if (*cursor == '*') {
        cursor++;
        if (F() == SUCCESS) {
            return Tdash();
        }
        return FAILURE;
    }
    return SUCCESS;
}

int F() {
    if (*cursor == 'i') {
        cursor++;
        return SUCCESS;
    }
    return FAILURE;
}
