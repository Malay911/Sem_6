#include <stdio.h>

int main() {
    int pages[50], frames[10];
    int n, f, i, j, k, pageFaults = 0, index = 0;
    int flag;

    printf("Enter number of pages: ");
    scanf("%d", &n);

    printf("Enter the reference string: ");
    for(i = 0; i < n; i++)
        scanf("%d", &pages[i]);

    printf("Enter number of frames: ");
    scanf("%d", &f);

    for(i = 0; i < f; i++)
        frames[i] = -1;

    for(i = 0; i < n; i++) {
        flag = 0;

        for(j = 0; j < f; j++) {
            if(frames[j] == pages[i]) {
                flag = 1;
                break;
            }
        }

        if(flag == 0) {
            frames[index] = pages[i];
            index = (index + 1) % f;
            pageFaults++;
        }

        printf("Frames: ");
        for(k = 0; k < f; k++)
            printf("%d ", frames[k]);
        printf("\n");
    }

    printf("Total Page Faults = %d\n", pageFaults);
    return 0;
}